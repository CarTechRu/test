import {
  Box, Container, Divider, Typography,
} from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import routes from '../routes/routes';
import NotFoundPage from './NotFound/NotFoundPage';
import MainPage from './Main/MainPage';
import AuctionPage from './Auction/AuctionPage';

function App() {
  return (
    <Container>
      <Box mt={3} mb={2}>
        <Typography variant="h1" fontSize="h3.fontSize">
          Аукционы
        </Typography>
      </Box>
      <Box mb={3}>
        <Divider />
      </Box>
      <Router>
        <Routes>
          <Route path={routes.notFoundPage()} element={<NotFoundPage />} />
          <Route path={routes.mainPage()} element={<MainPage />} />
          <Route path={routes.auctionPage()} element={<AuctionPage />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
