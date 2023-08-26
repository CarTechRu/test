import { useDispatch } from 'react-redux';
import { TextField } from '@mui/material';
import { SET_FILTER } from '../../constants/actions';

function Filter() {
  const dispatch = useDispatch();
  return (
    <TextField
      id="outlined-controlled"
      placeholder="Ford"
      onChange={(event) => {
        dispatch({
          type: SET_FILTER,
          payload: event.target.value,
        });
      }}
    />
  );
}

export default Filter;
