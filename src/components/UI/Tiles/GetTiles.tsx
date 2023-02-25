import { DataFetcher } from './../../Hooks/DataFetcher';
import { Marker, useMap } from 'react-leaflet';
import React, { useState, useEffect } from 'react';
import { useQueryClient, useQuery } from 'react-query';

function GetTiles() {
  const { data, isError, isSuccess } = useQuery('Tailes', DataFetcher);

  const map = useMap();
  const bounds = map.getBounds();
  // Extract the coordinates from the bounds object
  const southWest = [bounds.getSouth(), bounds.getWest()];
  const northEast = [bounds.getNorth(), bounds.getEast()];

  // Call the fetchAirData function on mount and whenever the bounds change
  // useEffect(() => {
  //   fetchAirData();
  // }, [bounds]);

  // Render the map tiles and markers based on the fetched data
  return (
    <>
      {Array.isArray(data) &&
        data.map((datum) => (
          <Marker
            key={datum.uid}
            position={[datum.lat, datum.lon]}
            icon={getMarkerIcon(datum.aqi)}
          />
        ))}
    </>
  );
}

export default GetTiles;
