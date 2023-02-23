import React from 'react';
import { useQueryClient, useQuery } from 'react-query';
import axios from 'axios';
import { convertLatLngToTiles } from '../HelperFunctions/convertLatLng';

const DataFetcher = (southWest: number[], northEast: number[]) => {
  // const warsawTiles = convertLatLngToTiles(52.237049, 21.017532, 10);

  const { data, isSuccess } = useQuery('AirData', async () => {
    const response = await axios.get(`
    https://api.waqi.info/v2/map/bounds?latlng=${southWest},${northEast}&networks=all&token=b4a90c69db861da6fd209f61dcbf5d8f1b874f57`);
    const quizData = response.data;
    console.log(quizData);
    return quizData;
  });

  return <div>DataFetcher</div>;
};

export default DataFetcher;

// token
// b4a90c69db861da6fd209f61dcbf5d8f1b874f57
