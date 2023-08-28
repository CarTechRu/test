export const ACTION_CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';

export const changeInputValue = (value) => ({
  type: ACTION_CHANGE_INPUT_VALUE,
  payload: value,
});
