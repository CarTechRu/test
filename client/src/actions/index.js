import axios from 'axios';
import * as types from '../constants/actions';

const auctionsUrl = `${process.env.CONFIG.API_BASEPATH}/filterAuctions`;

export const changeSearchParam = (payload) => ({
  type: types.CHANGE_SEARCH_PARAM,
  payload,
});
export const startLoadingAuctions = () => ({
  type: types.START_LOADING_AUCTIONS,
});
export const finishLoadingAuctions = (payload) => ({
  type: types.FINISH_LOADING_AUCTIONS,
  payload,
});

export const startLoadingDetails = () => ({
  type: types.START_LOADING_DETAILS,
});
export const finishLoadingDetails = (payload) => ({
  type: types.FINISH_LOADING_DETAILS,
  payload,
});

export const getAuctionsData = (searchParam) => (dispatch) => {
  dispatch(startLoadingAuctions());

  axios
    .get(auctionsUrl, { params: { search: searchParam } })
    .then((res) => dispatch(finishLoadingAuctions(res.data.auctions)))
    .catch((error) => {
      throw new Error(error);
    });
};

export const getAuctionDetailsData = (detailsUrl) => (dispatch) => {
  dispatch(startLoadingDetails());

  axios
    .get(detailsUrl)
    .then((res) => dispatch(finishLoadingDetails(res.data.auction)))
    .catch((error) => {
      throw new Error(error);
    });
};
