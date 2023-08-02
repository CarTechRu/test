import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { render } from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import App from './components/App';

const theme = createTheme();

render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
);
