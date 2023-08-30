import { combineReducers } from 'redux';
import auctions from './auctions';
import auctionDetails from './auctionDetails';

export default combineReducers({
  auctions,
  auctionDetails,
});
