/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import { useSelector } from 'react-redux';
import React from 'react';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import Books from './components/Books';
import Navbar from './components/Navbar';
import Categories from './components/Categories';

function App() {
  const state = useSelector((state) => state);
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" exact element={<Books />} />
          <Route path="/categories" element={<Categories categories={state.categories} />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
