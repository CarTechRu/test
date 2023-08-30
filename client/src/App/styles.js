import { grey } from '@mui/material/colors';

export const cardHeaderStyle = {
  padding: '8px',
  backgroundColor: grey[200],
  fontSize: '1rem',
  '& .MuiCardHeader-content': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
};

export const bidStyle = {
  position: 'absolute',
  bottom: 0,
  right: 0,
  width: 'auto',
  padding: '5px',
  backgroundColor: grey[500],
  color: 'white',
  borderTopLeftRadius: 2,
};
