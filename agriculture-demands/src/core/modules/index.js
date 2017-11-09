import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import products from './products.module';
import farmerDemand from './farmer-demand.module';
import buyerDemand from './buyer-demand.module';

export default combineReducers({
  routing: routerReducer,
  products,
  farmerDemand,
  buyerDemand,
});
