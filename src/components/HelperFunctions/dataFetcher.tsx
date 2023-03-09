import axios from 'axios';

export const markersFetcher = async (
  southWest: number[],
  northEast: number[]
) => {
  const response = await axios.get(
    `https://api.waqi.info/v2/map/bounds?latlng=${southWest},${northEast}&networks=all&token=b4a90c69db861da6fd209f61dcbf5d8f1b874f57`
  );
  const data = response.data;
  console.log(data);
  return data;
};

export const getHistoricData = async (uid: string) => {
  const response = await axios.get(
    `https://api.waqi.info/api/attsse/${uid}/yd.json`
  );
  const data = response.data;
  console.log(data);
  return data;
};

// token
// b4a90c69db861da6fd209f61dcbf5d8f1b874f57
