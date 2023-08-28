import { ACTION_CHANGE_INPUT_VALUE } from '../actions';

const initialState = {
  searchValue: '',
};

// eslint-disable-next-line default-param-last
const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_CHANGE_INPUT_VALUE:
      return { ...state, searchValue: action.payload };
    default:
      return state;
  }
};

export default searchReducer;
