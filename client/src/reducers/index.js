import { combineReducers } from 'redux';
import auctions from './auctions';
import { api } from '../store/api';
import searchReducer from '../store/search/reducer';

export default combineReducers({
  auctions,
  search: searchReducer,
  [api.reducerPath]: api.reducer,
});
