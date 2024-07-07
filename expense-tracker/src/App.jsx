// src/App.js
// import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from './pages/Login';
import './index.css';
import './App.css'
import Register from './pages/Register';
import Home from './pages/Home';
import ExpensesTracking from './pages/ExpensesTracking';
import BudgetAndGoals from './pages/BudgetAndGoals';
import Dashboard from './pages/Dashboard';
import LandingPage from './pages/LandingPage';

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
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/expense' element={<ExpensesTracking/>}/>
        <Route path='/budget' element={<BudgetAndGoals/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </div>
  );
};

export default App;
