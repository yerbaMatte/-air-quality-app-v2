import { dataFetcher } from './../../Hooks/dataFetcher';
import { Marker, useMap } from 'react-leaflet';
import React, { useState, useEffect } from 'react';
import { useQueryClient, useQuery, QueryClient } from 'react-query';

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

  type Tile = {
    lat: number;
    lon: number;
    uid: number;
  };

  // uid -> "Unique Station ID"
  const createTiles = (tile: Tile) => (
    <Marker key={tile.uid} position={[tile.lat, tile.lon]} />
  );

  let renderedTiles: JSX.Element | undefined;

  if (tilesData) {
    const tiles = tilesData.data;
    renderedTiles = (
      <>
        {tiles.map((tile: Tile) =>
          createTiles({
            lat: tile.lat,
            lon: tile.lon,
            uid: tile.uid,
          })
        )}
      </>
    );
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

  // console.log(tilesData?.data);

  return <>{tilesData && renderedTiles}</>;
}

export default GetTiles;
