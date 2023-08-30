import * as types from '../constants/actions';

const initState = {
  info: {},
  loading: false,
};

// eslint-disable-next-line default-param-last
const auctionDetails = (state = initState, action) => {
  switch (action.type) {
    case types.START_LOADING_DETAILS:
      return {
        ...state,
        loading: true,
      };
    case types.FINISH_LOADING_DETAILS:
      return {
        ...state,
        loading: false,
        info: action.payload,
      };
    default: {
      return { ...state };
    }
  }
};

export default auctionDetails;
