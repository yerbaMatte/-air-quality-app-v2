import { Marker } from 'react-leaflet';
import ReactDOMServer from 'react-dom/server';
import SVGIcon from './qualityIconHTML';
import qualityIconColor from './qualityIconColor';
import L from 'leaflet';

type MarkerType = {
  // latitude and longitude
  lat: number;
  lon: number;
  // uid -> "Unique Station ID"
  uid: number;
  // aqi -> "air quality index - the result"
  aqi: string;
};

// develop a single custom AQI Marker Element
const createMarkerElement = (tile: MarkerType) => {
  const aqiNumber = parseInt(tile.aqi, 10);
  // if the given measuring station does not have a result - skip this station
  if (!aqiNumber) return;
  // determine the marker color based on aqi index
  const colorString = qualityIconColor(aqiNumber);
  // create custom marker
  const icon = L.divIcon({
    className: 'custom-icon',
    html: ReactDOMServer.renderToString(
      <SVGIcon perc={aqiNumber} iconColor={colorString} />
    ),
  });

  return <Marker key={tile.uid} position={[tile.lat, tile.lon]} icon={icon} />;
};

// create JSX element with all fetched markers data
export const renderMarker = (tilesData: { data: MarkerType[] }) => {
  const tiles = tilesData.data;
  return (
    <>
      {tiles.map((tile: MarkerType) =>
        createMarkerElement({
          lat: tile.lat,
          lon: tile.lon,
          uid: tile.uid,
          aqi: tile.aqi,
        })
      )}
    </>
  );
};
