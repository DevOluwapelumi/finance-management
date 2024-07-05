// import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-red-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">The Oracle.</h1>
        <nav>
          <ul className="flex flex-wrap justify-end space-x-4">
            <li><Link to="/home" className="hover:text-gray-300">Home</Link></li>
            <li><Link to="/expense" className="hover:text-gray-300">Expense Tracking</Link></li>
            <li><Link to="/budget" className="hover:text-gray-300">Budgeting & Saving Goals</Link></li>
            <li><Link to="/dashboard" className="hover:text-gray-300">Dashboard</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
