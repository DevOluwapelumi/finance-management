// src/App.js
// import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from './components/Login';
import './index.css';
import './App.css'
import Register from './components/Register';
import Home from './components/Home';

const App = () => {
  return (
    <div>

<ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={2}
        theme="light"
      />

      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </div>
  );
};

export default App;
