import { Box, Container, Divider } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AuctionsList from './AuctionsList';
import CarPage from './CarPage';
import Header from './Header';

function App() {
  return (
    <Container>
      <Header />
      <Box my={3}>
        <Divider />
      </Box>
      <Box>
        <Router>
          <Routes>
            <Route path="/" element={<AuctionsList />} />
            <Route path="/auctions/:id" element={<CarPage />} />
          </Routes>
        </Router>
      </Box>

    </Container>
  );
}

export default App;
