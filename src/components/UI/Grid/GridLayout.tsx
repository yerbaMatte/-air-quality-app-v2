import { gridSettings } from './gridSettings';
import { Grid, GridItem } from '@chakra-ui/react';
import { Map } from '../../Map/Map';
import { SideContent } from '../../SideContent/SideContent';
import ContextProvider, { useContent } from '../../Context/context';

const GridLayout = () => {
  return (
    <ContextProvider>
      <Grid {...gridSettings}>
        <GridItem bg='#f4f4f9' area={'header'}>
          Header
        </GridItem>
        <GridItem bg='#b8dbd9' area={'control-side'}>
          <SideContent />
        </GridItem>
        <GridItem bg='#000' area={'map-side'}>
          <Map />
        </GridItem>
        <GridItem bg='#586f7c' area={'footer'}>
          Footer
        </GridItem>
      </Grid>
    </ContextProvider>
  );
};

export default GridLayout;
