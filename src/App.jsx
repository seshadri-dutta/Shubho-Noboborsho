import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import WishPage from './pages/WishPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/wish" element={<WishPage />} />
    </Routes>
  );
};

export default App;

