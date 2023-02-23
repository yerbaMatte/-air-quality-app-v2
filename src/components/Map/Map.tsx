import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import './Map.css';
import DataFetecher from '../Hooks/DataFetcher';

export const Map = () => {
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

  return (
    <MapContainer
      center={[52.237049, 21.017532]}
      zoom={11}
      scrollWheelZoom={true}
    >
      <GetTiles />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
    </MapContainer>
  );
};
