import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Car from '../pages/Car';
import Home from '../pages/Home';
import Header from '../components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/:id" element={<Car />} />
      </Routes>
    </Router>
  );
}

export default App;
