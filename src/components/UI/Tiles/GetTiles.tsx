import { fetchData } from './../../Hooks/DataFetcher';
import { Marker, useMap } from 'react-leaflet';
import React, { useState } from 'react';

function GetTiles() {
  const map = useMap();
  const bounds = map.getBounds();
  const [data, setData] = useState(null);

  let southWest = [bounds._southWest.lat, bounds._southWest.lng];
  let northEast = [bounds._northEast.lat, bounds._northEast.lng];

  const fetchAirData = async () => {
    const airData = await fetchData(southWest, northEast);
    setData(airData);
  };

  // fetchAirData();

  return (
    <>
      <Marker position={[51.274880130680536, 20.090660095214847]} />
    </>
  );
}

export default GetTiles;
