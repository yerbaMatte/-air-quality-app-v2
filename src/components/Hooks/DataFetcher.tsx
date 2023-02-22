import React from 'react';
import { useQueryClient, useQuery } from 'react-query';
import axios from 'axios';
import { convertLatLngToTiles } from '../HelperFunctions/convertLatLng';
const DataFetcher = () => {
  // const warsawTiles = convertLatLngToTiles(52.237049, 21.017532, 10);

  const fetchAxios = async (data: string) => {
    const response = await axios.get(data);
    const quizData = response.data;
    return quizData;
  };

  const { data, isSuccess } = useQuery('AirData', async () => {
    const response = await axios.get(
      'https://tiles.waqi.info/tiles/usepa-aqi/10/571/337.png?token=b4a90c69db861da6fd209f61dcbf5d8f1b874f57'
    );
    const quizData = response.data;
    return quizData;
  });

  console.log(data);

  return <div>DataFetcher</div>;
};

export default DataFetcher;

// token
// b4a90c69db861da6fd209f61dcbf5d8f1b874f57

// https://tiles.waqi.info/tiles/usepa-aqi/10/571/337.png?token=b4a90c69db861da6fd209f61dcbf5d8f1b874f57
