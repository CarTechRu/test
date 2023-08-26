// Исходное состояние
import {
  GET_AUCTIONS_FAILED,
  GET_AUCTIONS_REQUEST,
  GET_AUCTIONS_SUCCESS, UPDATE_AUCTIONS_FAILED,
  UPDATE_AUCTIONS_SUCCESS,
} from '../constants/actions';
import cmpAuctionsData from '../utils/comparison';

const initialState = {
  auctions: [],
  getAuctionsRequest: false,
  getAuctionsFailed: false,
};

// eslint-disable-next-line default-param-last
const auctionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_AUCTIONS_REQUEST: {
      return {
        ...state,
        getAuctionsRequest: true,
      };
    }
    case GET_AUCTIONS_SUCCESS: {
      return {
        ...state,
        getAuctionsRequest: false,
        getAuctionsFailed: false,
        auctions: action.payload,
      };
    }
    case GET_AUCTIONS_FAILED: {
      return {
        ...state,
        getAuctionsRequest: false,
        getAuctionsFailed: true,
      };
    }
    case UPDATE_AUCTIONS_SUCCESS: {
      return {
        ...state,
        auctions: cmpAuctionsData(state.auctions, action.payload),
      };
    }
    case UPDATE_AUCTIONS_FAILED: {
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};

export default auctionsReducer;
