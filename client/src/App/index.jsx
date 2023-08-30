import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuctionList from './components/AuctionList';
import AuctionDetails from './components/AuctionDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuctionList />} />
        <Route path="/:id" element={<AuctionDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
