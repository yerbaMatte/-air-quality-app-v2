import DataFetecher from '../../Hooks/DataFetcher';
import { Marker, useMap } from 'react-leaflet';

function GetTiles() {
  const map = useMap();
  const bounds = map.getBounds();

  let southWest = [bounds._southWest.lat, bounds._southWest.lng];
  let northEast = [bounds._northEast.lat, bounds._northEast.lng];
  console.log(southWest, northEast);
  DataFetecher(southWest, northEast);
  return (
    <>
      <Marker position={[52.19908510453474, 20.94423294067383]} />
      <Marker position={[52.274880130680536, 21.090660095214847]} />
    </>
  );
}

export default GetTiles;
