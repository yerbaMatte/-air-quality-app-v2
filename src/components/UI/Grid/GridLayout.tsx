import { gridSettings } from './gridSettings';
import { Grid, GridItem, Button } from '@chakra-ui/react';
import { Map } from '../../Map/Map';

const GridLayout = () => {
  return (
    <Grid {...gridSettings}>
      <GridItem bg='#f4f4f9' area={'header'}>
        Header
      </GridItem>
      <GridItem bg='#b8dbd9' area={'control-side'}>
        control-side
      </GridItem>
      <GridItem bg='#000' area={'map-side'}>
        <Map />
      </GridItem>
      <GridItem bg='#586f7c' area={'footer'}>
        Footer
      </GridItem>
    </Grid>
  );
};

export default GridLayout;
