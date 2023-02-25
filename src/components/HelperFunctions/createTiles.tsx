import { Marker } from 'react-leaflet';

export let renderedTiles: JSX.Element | undefined;

type Tile = {
  lat: number;
  lon: number;
  uid: number;
};

// uid -> "Unique Station ID"
export const createTiles = (tile: Tile) => (
  <Marker key={tile.uid} position={[tile.lat, tile.lon]} />
);

export const renderTiles = (tilesData: { data: Tile[] }) => {
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
};
