import { Marker } from 'react-leaflet';
import ReactDOMServer from 'react-dom/server';
import L from 'leaflet';

function SVGIconComponent({ perc = 0 }) {
  return (
    <svg
      width='45px'
      height='45px'
      viewBox='0 0 42 42'
      className='donut'
      aria-labelledby='beers-title beers-desc'
      role='img'
    >
      <circle
        className='donut-hole'
        cx='21'
        cy='21'
        r='15.91549430918954'
        fill='white'
        role='presentation'
      ></circle>
      <circle
        className='donut-ring'
        cx='21'
        cy='21'
        r='15.91549430918954'
        fill='transparent'
        stroke='#d2d3d4'
        strokeWidth='3'
        role='presentation'
      ></circle>
      <circle
        className='donut-segment'
        cx='21'
        cy='21'
        r='15.91549430918954'
        fill='transparent'
        stroke='#d70202'
        strokeWidth='3'
        strokeDasharray={`${perc} ${100 - perc}`}
        strokeDashoffset='25'
        aria-labelledby='donut-segment-1-title donut-segment-1-desc'
      ></circle>
      <g className='chart-text'>
        <text className='chart-number' x='50%' y='60%' textAnchor='middle'>
          {perc}
        </text>
      </g>
    </svg>
  );
}

type MarkerType = {
  lat: number;
  lon: number;
  uid: number;
};

const icon = L.divIcon({
  className: 'custom-icon',
  html: ReactDOMServer.renderToString(<SVGIconComponent perc={100} />),
});

// uid -> "Unique Station ID"
const createMarkerElement = (tile: MarkerType) => (
  <Marker key={tile.uid} position={[tile.lat, tile.lon]} icon={icon} />
);

export const renderMarker = (tilesData: { data: MarkerType[] }) => {
  const tiles = tilesData.data;
  return (
    <>
      {tiles.map((tile: MarkerType) =>
        createMarkerElement({
          lat: tile.lat,
          lon: tile.lon,
          uid: tile.uid,
        })
      )}
    </>
  );
};
