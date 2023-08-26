import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { grey } from '@mui/material/colors';
import store from './store';
import App from './components/App';

const theme = createTheme({
  palette: {
    grey: {
      light: grey[300],
      dark: grey[500],
      contrastText: grey[50],
    },
  },
});

render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <CssBaseline />
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root'),
);
