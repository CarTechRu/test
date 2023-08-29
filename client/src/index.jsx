import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import App from './components/App';
import store from './redux/store';

const theme = createTheme();

render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root'),
);
