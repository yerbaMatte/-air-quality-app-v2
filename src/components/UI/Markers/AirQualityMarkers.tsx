import { markersFetcher } from '../../HelperFunctions/dataFetcher';
import { useMap } from 'react-leaflet';
import { useEffect } from 'react';
import { useQueryClient, useQuery } from 'react-query';
import { renderMarker } from './MarkerCreator/createMarker';

function GetTiles() {
  // determine current map viewport based on map instance
  const map = useMap();
  // define bounds
  const bounds = map.getBounds();
  const southWest = [bounds.getSouth(), bounds.getWest()];
  const northEast = [bounds.getNorth(), bounds.getEast()];
  // current queryClient
  const queryClient = useQueryClient();
  // use useQuery hook to fetch data
  const { data: tilesData, isSuccess } = useQuery(
    ['Tailes'],
    () => markersFetcher(southWest, northEast),
    {
      initialData: undefined,
    }
  );

  useEffect(() => {
    // when the map's movement ends, get the new 'bounds' set new data
    // to query 'Tailes'
    const onMoveEnd = async () => {
      const bounds = map.getBounds();
      const southWest = [bounds.getSouth(), bounds.getWest()];
      const northEast = [bounds.getNorth(), bounds.getEast()];
      const newData = await markersFetcher(southWest, northEast);
      queryClient.setQueryData(['Tailes'], newData);
    };
    //'moveend' event triggers 'onMoveEnd' function
    map.on('moveend', onMoveEnd);

    return () => {
      // unmount 'moveend' function from the 'map' object
      map.off('moveend', onMoveEnd);
    };
  }, [map]);

  return <>{isSuccess && renderMarker(tilesData)}</>;
}

export default GetTiles;
