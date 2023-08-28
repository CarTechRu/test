import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';

const Home = React.lazy(() => import(/* webpackChunkName: "Home" */ '../pages/Home'));
const Car = React.lazy(() => import(/* webpackChunkName: "Car" */ '../pages/Car'));

function App() {
  return (
    <Suspense fallback={<div>Загрузка</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/:car" element={<Car />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
