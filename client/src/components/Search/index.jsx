import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';
import { changeInputValue } from '../../store/search/actions';

function Search() {
  const dispatch = useDispatch();

  const handleSearch = debounce((event) => {
    const searchTerm = event.target.value;
    dispatch(changeInputValue(searchTerm));
  }, 300);

  return <TextField label="Find car..." onChange={handleSearch} />;
}

export default Search;
