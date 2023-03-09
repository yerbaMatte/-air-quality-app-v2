import { MapContainer, TileLayer } from 'react-leaflet';
import './Map.css';
import AirQualityMarkers from '../UI/Tiles/AirQualityMarkers';

export const Map = () => {
  console.log('Map');
  return (
    <MapContainer
      center={[52.237049, 21.017532]}
      zoom={11}
      scrollWheelZoom={true}
    >
      <AirQualityMarkers />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png'
      />
    </MapContainer>
  );
};

// Historical data visualization: You can use charting libraries like Chart.js or D3.js to display historical air quality data. This would help users understand the trend of air quality over time.
