import { gridSettings } from './gridSettings';
import { Grid, GridItem } from '@chakra-ui/react';
import { Map } from '../../Map/Map';
import { SideContent } from '../../SideContent/SideContent';
import { createContext, useState } from 'react';

export const Context = createContext('Default Value');

const GridLayout = () => {
  return (
    <Context.Provider value={'NULL'}>
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
    </Context.Provider>
  );
};

export default GridLayout;
