import { dataFetcher } from '../../HelperFunctions/dataFetcher';
import { Marker, useMap } from 'react-leaflet';
import React, { useState, useEffect } from 'react';
import { useQueryClient, useQuery, QueryClient } from 'react-query';
import {
  renderedTiles,
  createTiles,
  renderTiles,
} from './../../HelperFunctions/createTiles';

function GetTiles() {
  const map = useMap();
  const bounds = map.getBounds();
  const southWest = [bounds.getSouth(), bounds.getWest()];
  const northEast = [bounds.getNorth(), bounds.getEast()];

  const queryClient = useQueryClient();

  const {
    data: tilesData,
    isError,
    isSuccess,
  } = useQuery(['Tailes'], () => dataFetcher(southWest, northEast), {
    initialData: undefined,
  });

  //Create markers with
  if (isSuccess) {
    renderTiles(tilesData);
  }

  useEffect(() => {
    const onMoveEnd = async () => {
      const bounds = map.getBounds();
      const southWest = [bounds.getSouth(), bounds.getWest()];
      const northEast = [bounds.getNorth(), bounds.getEast()];
      const newData = await dataFetcher(southWest, northEast);
      queryClient.setQueryData(['Tailes'], newData);
    };

    map.on('moveend', onMoveEnd);

    return () => {
      map.off('moveend', onMoveEnd);
    };
  }, [map]);

  console.log(tilesData);

  return <>{tilesData && renderedTiles}</>;
}

export default GetTiles;
