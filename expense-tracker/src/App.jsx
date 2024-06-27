// src/App.js
// import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import './index.css';
import './App.css'
import Register from './components/Register';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/up' element={<SignUp/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </div>
  );
};

export default App;
