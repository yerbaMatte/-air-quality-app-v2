import L from 'leaflet';

export const convertLatLngToTiles = (
  lat: number,
  lng: number,
  zoom: number
): number[] => {
  let tilePoint = L.CRS.EPSG3857.latLngToPoint(L.latLng(lat, lng), zoom);
  let tileX = Math.floor(tilePoint.x / 256);
  let tileY = Math.floor(tilePoint.y / 256);
  return [tileX, tileY];
};
