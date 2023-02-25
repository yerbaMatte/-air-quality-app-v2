import { useQueryClient, useQuery } from 'react-query';
import axios from 'axios';

export const DataFetcher = (southWest: number[], northEast: number[]) => {
  const { data, isSuccess, isLoading, error } = useQuery(
    'AirData',
    async (): Promise<object> => {
      const response = await axios.get(`
    https://api.waqi.info/v2/map/bounds?latlng=${southWest},${northEast}&networks=all&token=b4a90c69db861da6fd209f61dcbf5d8f1b874f57`);
      const airData = await response.data;

      if (isLoading) return console.log('data is loading...');
      if (isSuccess) return console.log('data is has been fetched!');
      if (error) return console.log(error);
      return airData;
    }
  );
  console.log(data);
  return data;
};

// token
// b4a90c69db861da6fd209f61dcbf5d8f1b874f57
