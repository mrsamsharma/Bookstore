import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Books from './pages/Books';
import Categories from './pages/Categories';
import './App.scss';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/category" element={<Categories />} />
    </Routes>
  );
}

export default App;
