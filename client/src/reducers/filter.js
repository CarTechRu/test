// Исходное состояние
import {
  SET_FILTER,
} from '../constants/actions';

const initialState = {
  filter: '',
};
// eslint-disable-next-line default-param-last
const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER: {
      return {
        ...state,
        filter: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default filterReducer;
