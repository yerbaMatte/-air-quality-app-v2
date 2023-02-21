import { Grid, GridItem } from '@chakra-ui/react';
import { Map } from './components/Map/Map';
import { gridProps } from './components/Map/grid_settings';

function App() {
  return (
    <Grid {...gridProps}>
      <GridItem bg="#f4f4f9" area={'header'}>
        Header
      </GridItem>
      <GridItem bg="#b8dbd9" area={'control-side'}>
        control-side
      </GridItem>
      <GridItem bg="black" area={'map-side'}>
        <Map />
      </GridItem>
      <GridItem bg="#586f7c" area={'footer'}>
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
