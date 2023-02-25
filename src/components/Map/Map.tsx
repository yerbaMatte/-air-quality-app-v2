import { MapContainer, TileLayer } from 'react-leaflet';
import './Map.css';
import GetTiles from '../UI/Tiles/GetTiles';

export const Map = () => {
  console.log('Map');
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
