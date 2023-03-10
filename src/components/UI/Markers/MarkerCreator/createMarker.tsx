import { Marker, Popup } from 'react-leaflet';
import ReactDOMServer from 'react-dom/server';
import SVGIcon from './qualityIconHTML';
import qualityIconColor from './qualityIconColor';
import { getHistoricData } from '../../../HelperFunctions/dataFetcher';
import L, { LeafletMouseEvent } from 'leaflet';
import { Button, ButtonGroup } from '@chakra-ui/react';

type MarkerType = {
  // latitude and longitude
  lat: number;
  lon: number;
  // uid -> "Unique Station ID"
  uid: string;
  // aqi -> "air quality index - the result"
  aqi: string;
  // get location name
  station: { name: string };
};

// develop a single custom AQI Marker Element
const createMarkerElement = ({ lat, lon, uid, aqi, station }: MarkerType) => {
  const aqiNumber = parseInt(aqi, 10);
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

  function handleClick() {
    console.log(' clicked!');
  }

  const handleClickWithUid = (uid: string) => {
    return (event: LeafletMouseEvent) => {
      // Execute the desired function with tile.uid as a parameter
      console.log(`Tile's uid: ${uid}`);
      getHistoricData(uid);
    };
  };

  return (
    <Marker
      key={uid}
      position={[lat, lon]}
      icon={icon}
      eventHandlers={{ click: handleClickWithUid(uid) }}
    >
      <Popup offset={[15, 0]}>
        <h1>{station.name}</h1>
      </Popup>
    </Marker>
  );
};

// create JSX element with all fetched markers data
export const renderMarker = (tilesData: { data: MarkerType[] }) => {
  const tiles = tilesData.data;
  return (
    <>
      {tiles.map((tile: MarkerType) => {
        return createMarkerElement(tile);
      })}
    </>
  );
};
