import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './Map.css';
import DataFetecher from '../Hooks/DataFetcher';
export const Map = () => {
  return (
    <MapContainer
      center={[52.237049, 21.017532]}
      zoom={11}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={[52.237049, 21.017532]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <DataFetecher />
    </MapContainer>
  );
};
