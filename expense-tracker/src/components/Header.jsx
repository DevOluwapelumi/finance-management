// import React from 'react';

const Header = () => {
  return (
    <header className="bg-red-900 p-4 text-white flex justify-between items-center">
      <h1 className="text-3xl font-bold">The Oracle.</h1>
      <nav className="space-x-4">
        <a href="#" className="hover:text-gray-300">Home</a>
        <a href="#" className="hover:text-gray-300">Expense Tracking</a>
        <a href="#" className="hover:text-gray-300">Budgeting & Saving Goals</a>
      </nav>
    </header>
  );
};

export default Header;
