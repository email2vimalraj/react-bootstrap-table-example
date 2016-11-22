import { combineReducers } from 'redux';
import products from './productReducer';

const rootReducer = combineReducers({
  products
});

export default rootReducer;
