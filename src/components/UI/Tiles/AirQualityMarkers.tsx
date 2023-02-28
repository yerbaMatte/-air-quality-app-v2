import { dataFetcher } from '../../HelperFunctions/dataFetcher';
import { useMap } from 'react-leaflet';
import { useEffect } from 'react';
import { useQueryClient, useQuery, QueryClient } from 'react-query';
import { renderMarker } from './createMarker';

function GetTiles() {
  const map = useMap();
  const bounds = map.getBounds();
  const southWest = [bounds.getSouth(), bounds.getWest()];
  const northEast = [bounds.getNorth(), bounds.getEast()];

  const queryClient = useQueryClient();

  const { data: tilesData, isSuccess } = useQuery(
    ['Tailes'],
    () => dataFetcher(southWest, northEast),
    {
      initialData: undefined,
    }
  );

  useEffect(() => {
    // when the map's movement ends, get the new bounds and matching markers
    const onMoveEnd = async () => {
      const bounds = map.getBounds();
      const southWest = [bounds.getSouth(), bounds.getWest()];
      const northEast = [bounds.getNorth(), bounds.getEast()];
      const newData = await dataFetcher(southWest, northEast);
      queryClient.setQueryData(['Tailes'], newData);
    };
    map.on('moveend', onMoveEnd);

    return () => {
      map.off('moveend', onMoveEnd);
    };
  }, [map]);
  // isSuccess === true ? render all aqi markers at the area
  return <>{isSuccess && renderMarker(tilesData)}</>;
}

export default GetTiles;

//
