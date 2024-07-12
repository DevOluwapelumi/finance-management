import { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';
import { FaHome, FaList, FaChartPie, FaBullseye, FaUsers, FaCog, FaSignOutAlt, FaLightbulb, FaLock, FaShieldAlt, FaMoneyBill } from 'react-icons/fa';

const Nav = () => {
   const sidebarRef = useRef(null);
   const [isSidebarOpen, setSidebarOpen] = useState(false);
 
   const toggleSidebar = () => {
     setSidebarOpen(!isSidebarOpen);
   };
 
   const handleClickOutside = (event) => {
     if (
       sidebarRef.current &&
       !sidebarRef.current.contains(event.target) &&
       !event.target.closest(".sidebar-toggle")
     ) {
       setSidebarOpen(false);
     }
   };
 
   useEffect(() => {
     document.addEventListener("click", handleClickOutside);
     return () => {
       document.removeEventListener("click", handleClickOutside);
     };
   }, []);
 
   useEffect(() => {
     if (isSidebarOpen) {
       document.addEventListener("click", handleClickOutside);
     } else {
       document.removeEventListener("click", handleClickOutside);
     }
     return () => {
       document.removeEventListener("click", handleClickOutside);
     };
   }, [isSidebarOpen]);

  return (
    <>
      <button
        onClick={toggleSidebar}
        aria-controls="sidebar-multi-level-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden bg-white mb-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 sidebar-toggle"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        ref={sidebarRef}
        id="sidebar-multi-level-sidebar"
        className={`fixed top-0 left-0 z-40 mt-20 md:mt-16 w-60 h-screen transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <Link to="/dashboard" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <FaList />
                <span className="ms-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/home" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <FaHome />
                <span className="flex-1 ms-3 whitespace-nowrap">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/expense" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <FaChartPie />
                <span className="flex-1 ms-3 whitespace-nowrap">Expense</span>
              </Link>
            </li>
            <li>
              <Link to="/income" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <FaBullseye />
                <span className="flex-1 ms-3 whitespace-nowrap">Income</span>
              </Link>
            </li>
            <li>
              <Link to="/budget" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <FaUsers />
                <span className="flex-1 ms-3 whitespace-nowrap">Budget&Goals</span>
              </Link>
            </li>
          </ul>
          <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
            <div className="text-gray-900 uppercase text-sm">Teams</div>
            <li>
              <Link to="" className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                <FaLightbulb />
                <span className="ms-3">Ideas</span>
              </Link>
            </li>
            <li>
              <Link to="" className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                <FaLock />
                <span className="ms-3">Safety</span>
              </Link>
            </li>
            <li>
              <Link to="" className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                <FaShieldAlt />
                <span className="ms-3">Privacy</span>
              </Link>
            </li>
            <li>
              <Link to="" className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                <FaMoneyBill />
                <span className="ms-3">Transactions</span>
              </Link>
            </li>
          </ul>
          <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
            <li>
              <Link to="" className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                <FaCog />
                <span className="ms-3">Preferences</span>
              </Link>
            </li>
            <li>
              <Link to="/" className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                <FaSignOutAlt />
                <span className="ms-3">Sign out</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Nav;
