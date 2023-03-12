import { Marker, Popup } from 'react-leaflet';
import ReactDOMServer from 'react-dom/server';
import SVGIcon from './qualityIconHTML';
import qualityIndicator from './qualityIndicator';
import { getHistoricData } from '../../../HelperFunctions/dataFetcher';
import L, { LeafletMouseEvent } from 'leaflet';
import { CustomPopUp } from '../PopupWindow/CustomPopUp';
import '../../../Map/Map.css';

type MarkerType = {
  // latitude and longitude; uid: "Unique Station ID"; aqi: "air quality index - current result"; station: name and data fetched time
  lat: number;
  lon: number;
  uid: string;
  aqi: string;
  station: { time: string; name: string };
};

// develop a single custom AQI Marker Element
const createMarkerElement = ({ lat, lon, uid, aqi, station }: MarkerType) => {
  //convert 'aqi' string to number
  const aqiNumber = parseInt(aqi, 10);
  // if the given measuring station does not have a result - skip this station
  if (!aqiNumber) return;
  //
  // determine the marker color and comment based on aqi index
  const colorAndComment = qualityIndicator(aqiNumber);
  // create a custom marker for aqi marker
  const icon = L.divIcon({
    className: 'custom-icon',
    html: ReactDOMServer.renderToString(
      <SVGIcon perc={aqiNumber} iconColor={colorAndComment.color} />
    ),
  });

  const handleClickWithUid = (uid: string) => {
    return (event: LeafletMouseEvent) => {
      // Execute the desired function with tile.uid as a parameter
      console.log(`Tile's uid: ${uid}`);
      getHistoricData(uid).then((data) => console.log(data));
    };
  };

  return (
    <Marker
      key={uid}
      position={[lat, lon]}
      icon={icon}
      eventHandlers={{ click: handleClickWithUid(uid) }}
    >
      <Popup offset={[17, 0]} position={[lat, lon]} className='custom-popup'>
        <CustomPopUp
          station={station}
          colorAndComment={colorAndComment}
          aq={aqiNumber}
        />
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
