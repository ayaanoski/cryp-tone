import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignUp from '../pages/signup/SignUp';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Land from '../pages/landing/Land';
import Cart from '../pages/cart/cart';

function App() {
  return (
    // Add the Anon Aadhaar Provider at the root of your app

    <div className='body'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/land" element={<Land />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>

  );
}

export default App;
