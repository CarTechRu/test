import {
  GET_AUCTIONS_FAILED,
  GET_AUCTIONS_REQUEST,
  GET_AUCTIONS_SUCCESS, UPDATE_AUCTIONS_FAILED,
  UPDATE_AUCTIONS_SUCCESS,
} from '../constants/actions';
import { api } from '../utils/api';

export function getAuctions() {
  return (dispatch) => {
    dispatch({ type: GET_AUCTIONS_REQUEST });
    api.getAuctions().then((res) => {
      dispatch({
        type: GET_AUCTIONS_SUCCESS,
        payload: res.auctions,
      });
    }).catch(() => {
      dispatch({
        type: GET_AUCTIONS_FAILED,
      });
    });
  };
}

export function updateAuctions() {
  return (dispatch) => {
    api.getAuctions().then((res) => {
      dispatch({
        type: UPDATE_AUCTIONS_SUCCESS,
        payload: res.auctions,
      });
    }).catch(() => {
      dispatch({
        type: UPDATE_AUCTIONS_FAILED,
      });
    });
  };
}
