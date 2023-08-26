import { combineReducers } from 'redux';
import auctionsReducer from './auctions';
import filterReducer from './filter';

export default combineReducers({
  auctions: auctionsReducer,
  filter: filterReducer,
});
