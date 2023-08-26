import { combineReducers } from 'redux';
import update from './update';
import search from './search';
import searchId from './searchId';

export default combineReducers({
  update,
  search,
  searchId,
});
