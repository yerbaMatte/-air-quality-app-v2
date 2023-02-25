import { MapContainer, TileLayer } from 'react-leaflet';
import './Map.css';
import GetTiles from '../UI/Tiles/GetTiles';
import L from 'leaflet';

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
        url='https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png'
      />
    </MapContainer>
  );
};
