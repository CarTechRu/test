import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';

import store from './store';
import App from './App';

const theme = createTheme();

render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root'),
);
