import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { changeInputValue } from '../../store/search/actions';

function Search() {
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    dispatch(changeInputValue(searchTerm));
  };

  return <TextField label="Find car..." onChange={handleSearch} />;
}

export default Search;
