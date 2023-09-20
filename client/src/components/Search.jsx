import { TextField, Typography, Box } from '@mui/material';

function Search(props) {
  const { onChange, value } = props;
  return (
    <Box mb={3}>
      <Typography sx={{ marginBottom: '5px' }}>
        Поиск по названию
      </Typography>
      <TextField
        type="search"
        label="Введите текст"
        sx={{ width: '25ch' }}
        value={value}
        onChange={onChange}
      />
    </Box>
  );
}

export default Search;
