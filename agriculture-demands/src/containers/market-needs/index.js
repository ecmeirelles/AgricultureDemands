import React from 'react';

import DataTable from '../data-table';
import OwnDemands from '../own-demands';

import { Tabs, Tab } from 'material-ui/Tabs';

const MarketNeeds = props => (
  <div>
    <Tabs tabItemContainerStyle={{ backgroundColor: '#1d3141' }}>
      <Tab label="Demandas do Mercado" >
        <DataTable />
      </Tab>
      <Tab label="Minhas Demandas" >
        <OwnDemands />
      </Tab>
    </Tabs>
  </div>
);

export default (MarketNeeds);
