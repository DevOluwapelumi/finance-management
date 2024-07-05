// import React from 'react';
// import {  FaCog } from 'react-icons/fa';
import { FaHome, FaList, FaChartPie, FaBullseye, FaUsers, FaCog, FaSignOutAlt, FaLightbulb, FaLock, FaShieldAlt, FaMoneyBill } from 'react-icons/fa';
import { Card } from 'flowbite-react';
import { Button } from 'flowbite-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faPiggyBank, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {

    
    
  return (
    <>
    
    <nav className="fixed top-0 z-50 w-full bg-red-900 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
  <div className="px-3 py-3 lg:px-5 lg:pl-3">
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-start rtl:justify-end">
      <button data-drawer-target="separator-sidebar" data-drawer-toggle="separator-sidebar" aria-controls="separator-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span className="sr-only">Open sidebar</span>
   <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
   <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>
        {/* <a href="https://flowbite.com" className="flex ms-2 md:me-24"> */}
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 me-3" alt="FlowBite Logo" />
          <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">The Oracle.</span>
        {/* </a> */}
      </div>
      <div className="flex items-center">
          <div className="flex items-center ms-3">
            <div>
              <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                <span className="sr-only">Open user menu</span>
                <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
              </button>
            </div>
            <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
              <div className="px-4 py-3" role="none">
                <p className="text-sm text-gray-900 dark:text-white" role="none">
                  Neil Sims
                </p>
                <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                  neil.sims@flowbite.com
                </p>
              </div>
              <ul className="py-1" role="none">
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Earnings</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  </div>
</nav>

<aside id="separator-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div className="h-full px-3 py-4 overflow-y-auto bg-gray-300 mt-3">
      <ul className="space-y-2 font-medium ">
         <li>
            <a href="#" className="flex items-center p-2 mt-5 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <FaList />
               <span className="ms-3">Dashboard</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <FaHome />
               <span className="flex-1 ms-3 whitespace-nowrap">Home</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <FaChartPie />
               <span className="flex-1 ms-3 whitespace-nowrap">Expense Tracking</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <FaBullseye />
               <span className="flex-1 ms-3 whitespace-nowrap">Transactions</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <FaUsers />
               <span className="flex-1 ms-3 whitespace-nowrap">Goals</span>
            </a>
         </li>
      </ul>
      <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
      <div className="text-gray-900 uppercase text-sm">Teams</div>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
            <FaLightbulb />
               <span className="ms-3">Ideas</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
            <FaLock />
               <span className="ms-3">Safety</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
            <FaShieldAlt />
               <span className="ms-3">Privacy</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
            <FaMoneyBill />
               <span className="ms-3">Transactions</span>
            </a>
         </li>
      </ul>
      <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
            <FaCog />
               <span className="ms-3">Preferences</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
            <FaSignOutAlt />
               <span className="ms-3">Sign out</span>
            </a>
         </li>
      </ul>
   </div>
</aside>

<div className="p-4 sm:ml-64 mt-16">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 ">
          <div className="grid grid-cols-1 gap-4 mb-4 ">
          <div className="flex space-x-4 p-2">
      <div className="bg-gray-200 p-2 rounded-lg w-1/2">
        <h2 className="text-lg font-bold mb-2">New update!</h2>
        <div className="">
          <div className="flex items-start space-x-2">
            <img src="src/assets/Image.png" alt="Insights" className="w-10 h-10 rounded-full"/>
            <div className="flex-1">
              <p className="font-semibold">Insights</p>
              <p className="text-sm text-gray-600">analyzed data for Expense Trends</p>
              <div className="flex mt-1 space-x-1">
                <Button className="mt-1" size="xs">View</Button>
                <Button className="mt-1 ml-1" size="xs">Respond</Button>
                <Button className="mt-1 ml-1" size="xs">Save</Button>
              </div>
            </div>
            <p className="text-sm text-gray-600">Now</p>
          </div>
          <div className="flex items-start space-x-2">
            <img src="src/assets/Image.png" alt="Calculator" className="w-10 h-10 rounded-full"/>
            <div className="flex-1">
              <p className="font-semibold">Calculator</p>
              <p className="text-sm text-gray-600">Expense Trends</p>
              <div className="flex mt-1 space-x-1">
                <Button className="mt-1" size="xs">View</Button>
                <Button className="mt-1 ml-1" size="xs">Respond</Button>
                <Button className="mt-1 ml-1" size="xs">Save</Button>
              </div>
            </div>
            <p className="text-sm text-gray-600">Today</p>
          </div>
          <div className="flex items-start space-x-2">
            <img src="src/assets/Image.png" alt="Report" className="w-10 h-10 rounded-full"/>
            <div className="flex-1">
              <p className="font-semibold">Report</p>
              <p className="text-sm text-gray-600">Financial Report</p>
              <div className="flex mt-1 space-x-1">
                <Button className="mt-1" size="xs">View</Button>
                <Button className="mt-1 ml-1" size="xs">Respond</Button>
                <Button className="mt-1 ml-1" size="xs">Save</Button>
              </div>
            </div>
            <p className="text-sm text-gray-600">Yesterday</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 p-2 rounded-lg w-1/2">
        <h2 className="text-lg font-bold mb-2">Objectives</h2>
        <div className="space-y-2">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faLightbulb} className="w-5 h-5 flex items-center justify-center text-2xl" />
              <div className="ml-1">
                <p className="font-semibold">Savings Plan</p>
                <p className="text-sm text-gray-600">progress towards target</p>
              </div>
            </div>
            <Button className="mt-1" size="xs">View</Button>
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faPiggyBank} className="w-5 h-5 flex items-center justify-center text-2xl" />
              <div className="ml-1">
                <p className="font-semibold">Investment</p>
                <p className="text-sm text-gray-600">new investments made</p>
              </div>
            </div>
            <Button className="mt-1" size="xs">View</Button>
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faPencilAlt} className="w-5 h-5 flex items-center justify-center text-2xl" />
              <div className="ml-1">
                <p className="font-semibold">Expense</p>
                <p className="text-sm text-gray-600">Budget goals updated</p>
              </div>
            </div>
            <Button className="mt-1" size="xs">View</Button>
          </div>
        </div>
      </div>
    </div>
            <Card className="bg-gray-300">
              <h3 className="font-bold">Objectives</h3>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between">
                  <span>Savings Plan</span>
                  <button className="bg-gray-200 px-2 py-1 rounded-md">View</button>
                </div>
                <div className="flex justify-between">
                  <span>Investment</span>
                  <button className="bg-gray-200 px-2 py-1 rounded-md">View</button>
                </div>
                <div className="flex justify-between">
                  <span>Expense</span>
                  <button className="bg-gray-200 px-2 py-1 rounded-md">View</button>
                </div>
              </div>
            </Card>

            <Card className="bg-gray-300">
              <h3 className="font-bold">FinancePal overview</h3>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <div className="text-red-500 font-bold text-3xl">4.7</div>
                  <div className="text-gray-400">/10</div>
                </div>
                <div className="flex space-x-4">
                  <div className="flex items-center space-x-2">
                    <FaCog />
                    <span>6.4 Savings</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaCog />
                    <span>5.8 Budget</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaCog />
                    <span>5.3 Spending</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaCog />
                    <span>7.2 Financial</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaCog />
                    <span>6.9 Expense</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaCog />
                    <span>8.7 Goal</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-gray-300">
              <h3 className="font-bold">Upcoming expenses</h3>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between">
                  <span>John Smith</span>
                  <button className="bg-gray-200 px-2 py-1 rounded-md">View</button>
                  <button className="bg-gray-200 px-2 py-1 rounded-md">Adjust</button>
                </div>
                <div className="flex justify-between">
                  <span>Sarah</span>
                  <button className="bg-gray-200 px-2 py-1 rounded-md">View</button>
                  <button className="bg-gray-200 px-2 py-1 rounded-md">Adjust</button>
                </div>
                <div className="flex justify-between">
                  <span>Michael Brown</span>
                  <button className="bg-gray-200 px-2 py-1 rounded-md">View</button>
                  <button className="bg-gray-200 px-2 py-1 rounded-md">Adjust</button>
                </div>
              </div>
            </Card>

            <Card className="bg-gray-300">
              <h3 className="font-bold">Financial insights</h3>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between">
                  <span>Expense trends</span>
                  <span>Q4 Budget review</span>
                </div>
                <div className="flex justify-between">
                  <span>Financial status</span>
                  <span>Q4 Savings check-in for all categories</span>
                </div>
                <div className="flex justify-between">
                  <span>Financial operations</span>
                  <span>Future goals and investment plans</span>
                </div>
              </div>
            </Card>

            <Card className="bg-gray-300">
              <h3 className="font-bold">Analysis</h3>
              <div className="mt-4 space-y-2">
                <div>Are you meeting your budget targets?</div>
                <div className="bg-gray-200 w-full h-4 rounded-md">
                  <div className="bg-red-500 h-4 w-1/2 rounded-md"></div>
                </div>
                <div>How satisfied are you with the apps financial tools?</div>
                <div className="bg-gray-200 w-full h-4 rounded-md">
                  <div className="bg-red-500 h-4 w-2/3 rounded-md"></div>
                </div>
                <div>Do you feel confident in your financial decisions?</div>
                <div className="bg-gray-200 w-full h-4 rounded-md">
                  <div className="bg-red-500 h-4 w-1/4 rounded-md"></div>
                </div>
              </div>
            </Card>

            <Card className="bg-gray-300">
              <h3 className="font-bold">Help & Settings</h3>
              <div className="mt-4 space-y-2">
                <button className="bg-gray-200 px-2 py-1 rounded-md w-full">Help Center</button>
                <button className="bg-gray-200 px-2 py-1 rounded-md w-full">Subscription</button>
                <button className="bg-gray-200 px-2 py-1 rounded-md w-full">Manage budget</button>
                <button className="bg-gray-200 px-2 py-1 rounded-md w-full">Learning resources</button>
              </div>
            </Card>
          </div>
          </div>
          </div>
</>

  );
};


export default Dashboard;