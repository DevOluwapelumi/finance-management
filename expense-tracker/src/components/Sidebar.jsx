// import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaList, FaChartPie, FaBullseye, FaUsers, FaCog, FaSignOutAlt, FaLightbulb, FaLock, FaShieldAlt, FaMoneyBill } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <aside id="separator-sidebar" className="fixed top-0 left-0 z-40 w-54 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
    <div className="h-full px-3 py-4 overflow-y-auto bg-gray-300 mt-3">
       <ul className="space-y-2 font-medium ">
          <li>
             <Link to="/dashboard"  className="flex items-center p-2 mt-5 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
             <FaList />
                <span className="ms-3">Dashboard</span>
             </Link>
          </li>
          <li>
             <Link to="/home"  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
             <FaHome />
                <span className="flex-1 ms-3 whitespace-nowrap">Home</span>
             </Link>
          </li>
          <li>
             <Link to="/expense"  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
             <FaChartPie />
                <span className="flex-1 ms-3 whitespace-nowrap">Expense Tracking</span>
             </Link>
          </li>
          <li>
             <Link to="/home"  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
             <FaBullseye />
                <span className="flex-1 ms-3 whitespace-nowrap">Transactions</span>
             </Link>
          </li>
          <li>
             <Link to="/budget"  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
             <FaUsers />
                <span className="flex-1 ms-3 whitespace-nowrap">Budget&Goals</span>
             </Link>
          </li>
       </ul>
       <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
       <div className="text-gray-900 uppercase text-sm">Teams</div>
          <li>
             <Link to="/home"  className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
             <FaLightbulb />
                <span className="ms-3">Ideas</span>
             </Link>
          </li>
          <li>
             <Link to="/home"  className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
             <FaLock />
                <span className="ms-3">Safety</span>
             </Link>
          </li>
          <li>
             <Link to="/home"  className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
             <FaShieldAlt />
                <span className="ms-3">Privacy</span>
             </Link>
          </li>
          <li>
             <Link to="/home"  className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
             <FaMoneyBill />
                <span className="ms-3">Transactions</span>
             </Link>
          </li>
       </ul>
       <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
          <li>
             <Link to="/home"  className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
             <FaCog />
                <span className="ms-3">Preferences</span>
             </Link>
          </li>
          <li>
             <Link to="/home"  className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
             <FaSignOutAlt />
                <span className="ms-3">Sign out</span>
             </Link>
          </li>
       </ul>
    </div>
 </aside>
  );
};

export default Sidebar;
