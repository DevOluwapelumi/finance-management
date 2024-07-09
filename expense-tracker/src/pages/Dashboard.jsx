// import React from 'react';
// import {  FaCog } from 'react-icons/fa';

// import { Card } from 'flowbite-react';
import { Button } from 'flowbite-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faPiggyBank, faWallet, faDollarSign, faClipboard, faChartLine, faBullseye } from '@fortawesome/free-solid-svg-icons';
import { faChartBar, faClipboardCheck, faCogs } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer';
import Header from '../components/Header';
// import Sidebar from '../components/Sidebar';
// import { Link } from 'react-router-dom';
// import image4 from '../assets/Image.png'; 

const Dashboard = () => {

    
    
  return (
    <>
    
    <Header/>
      {/* <Sidebar/> */}


<div className="p-4 sm:ml-64 mt-12">
        <div className="p- border-2 border-red-700 border-dashed rounded-lg dark:border-gray-700 shadow-md ">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap- mb-4">
  <div className="flex space-x-4 p-2">
    <div className="bg-gray-200 p-2 rounded-lg w-full shadow-md">
      <h2 className="text-lg font-bold mb-2">New update!</h2>
      <div>
        <div className="flex items-start space-x-2">
          <img src="src/assets/Image.png" alt="Insights" className="w-10 h-10 rounded-full"/>
          <div className="flex-1">
            <p className="font-semibold">Insights</p>
            <p className="text-sm text-gray-600">analyzed data for Expense Trends</p>
            <div className="flex mt-1 space-x-1">
              <Button className="mt-1 text-gray-600" size="xs">View</Button>
              <Button className="mt-1 text-gray-600 ml-1" size="xs">Respond</Button>
              <Button className="mt-1 text-gray-600 ml-1" size="xs">Save</Button>
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
              <Button className="mt-1 text-gray-600" size="xs">View</Button>
              <Button className="mt-1 text-gray-600 ml-1" size="xs">Respond</Button>
              <Button className="mt-1 text-gray-600 ml-1" size="xs">Save</Button>
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
              <Button className="mt-1 text-gray-600" size="xs">View</Button>
              <Button className="mt-1 text-gray-600 ml-1" size="xs">Respond</Button>
              <Button className="mt-1 text-gray-600 ml-1" size="xs">Save</Button>
            </div>
          </div>
          <p className="text-sm text-gray-600">Yesterday</p>
        </div>
      </div>
    </div>
  </div>

  <div className="flex space-x-4 p-2">
    <div className="bg-gray-200 p-2 rounded-lg w-full shadow-md">
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
          <Button className="mt-1 text-dark-900" size="xs">View</Button>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faPiggyBank} className="w-5 h-5 flex items-center justify-center text-2xl" />
            <div className="ml-1">
              <p className="font-semibold">Investment</p>
              <p className="text-sm text-gray-600">new investments made</p>
            </div>
          </div>
          <Button className="mt-1 text-dark-900" size="xs">View</Button>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faPencilAlt} className="w-5 h-5 flex items-center justify-center text-2xl" />
            <div className="ml-1">
              <p className="font-semibold">Expense</p>
              <p className="text-sm text-gray-600">Budget goals updated</p>
            </div>
          </div>
          <Button className="mt-1 text-dark-900" size="xs">View</Button>
        </div>
      </div>
    </div>
  </div>

  <div className="flex space-x-4 p-2">
    <div className="bg-gray-200 p-4 rounded-lg w-full shadow-md">
      <h2 className="text-lg font-bold mb-4">FinancePal overview</h2>
      <div className="flex flex-wrap">
        <div className="flex items-center justify-center w-full lg:w-1/3">
          <div className="relative">
            <svg className="w-32 h-32">
              <circle
                className="text-gray-300"
                strokeWidth="10"
                stroke="currentColor"
                fill="transparent"
                r="50"
                cx="60"
                cy="60"
              />
              <circle
                className="text-red-500"
                strokeWidth="10"
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r="50"
                cx="60"
                cy="60"
                strokeDasharray="314"
                strokeDashoffset="166"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-red-500">4.7</span>
              <span className="text-sm text-gray-500">/10</span>
            </div>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-4">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faPiggyBank} className="w-5 h-5 text-red-500" />
            <p className="ml-2">6.4 Savings</p>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faWallet} className="w-5 h-5 text-red-500" />
            <p className="ml-2">5.8 Budget</p>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faDollarSign} className="w-5 h-5 text-red-500" />
            <p className="ml-2">5.3 Spending</p>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faClipboard} className="w-5 h-5 text-red-500" />
            <p className="ml-2">7.2 Finance</p>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faChartLine} className="w-5 h-5 text-red-500" />
            <p className="ml-2">6.9 Expense</p>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faBullseye} className="w-5 h-5 text-red-500" />
            <p className="ml-2">8.7 Goal</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="flex space-x-4 p-2">
    <div className="bg-gray-200 p-4 rounded-lg w-full shadow-md">
      <h2 className="text-lg font-bold mb-4">Upcoming expenses</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-start space-x-2">
            <img src="src/assets/Image.png" alt="Insights" className="w-10 h-10 rounded-full"/>
            <p className="font-semibold">John Smith</p>
          </div>
          <div className="flex space-x-2">
            <Button className="mt-1 text-gray-900" size="xs">View</Button>
            <Button className="mt-1 text-gray-900 ml-1" size="xs">Adjust</Button>
          </div>
        </div>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-start space-x-2">
            <img src="src/assets/Image.png" alt="Insights" className="w-10 h-10 rounded-full"/>
            <p className="font-semibold">Sarah</p>
          </div>
          <div className="flex space-x-2">
            <Button className="mt-1 text-gray-900" size="xs">View</Button>
            <Button className="mt-1 text-gray-900 ml-1" size="xs">Adjust</Button>
          </div>
        </div>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-start space-x-2">
            <img src="src/assets/Image.png" alt="Insights" className="w-10 h-10 rounded-full"/>
            <p className="font-semibold">Michael Brown</p>
          </div>
          <div className="flex space-x-2">
            <Button className="mt-1 text-gray-900" size="xs">View</Button>
            <Button className="mt-1 text-gray-900 ml-1" size="xs">Adjust</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>

  <div className="flex space-x-4 p-2 -mt-5">
  <div className="bg-gray-200 p-4 rounded-lg w-1/3 shadow-md">
    <h2 className="text-lg font-bold mb-4">Financial insights</h2>
    <div className="space-y-4">
      <div className="flex items-center mb-2">
        <FontAwesomeIcon icon={faChartBar} className="w-5 h-5 text-black" />
        <div className="ml-2">
          <p className="font-semibold">Expense trends</p>
          <p className="text-sm text-gray-600">Q4 Budget review</p>
        </div>
      </div>
      <div className="flex items-center mb-2">
        <FontAwesomeIcon icon={faClipboardCheck} className="w-5 h-5 text-black" />
        <div className="ml-2">
          <p className="font-semibold">Financial status</p>
          <p className="text-sm text-gray-600">Q4 Savings check-in for all categories</p>
        </div>
      </div>
      <div className="flex items-center mb-2">
        <FontAwesomeIcon icon={faCogs} className="w-5 h-5 text-black" />
        <div className="ml-2">
          <p className="font-semibold">Financial operations</p>
          <p className="text-sm text-gray-600">Future goals and investment plans</p>
        </div>
      </div>
    </div>
  </div>

  <div className="bg-gray-200 p-4 rounded-lg w-2/5 shadow-md">
    <h2 className="text-lg font-bold mb-4">Analysis</h2>
    <div className="space-y-4">
      <div className="space-y-2">
        <p>Are you meeting your budget targets?</p>
        <div className="w-full bg-gray-300 rounded-lg h-4">
          <div className="bg-red-500 h-4 rounded-lg" style={{ width: '40%' }}></div>
        </div>
      </div>
      <div className="space-y-2">
        <p>How satisfied are you with the apps financial tools?</p>
        <div className="w-full bg-gray-300 rounded-lg h-4">
          <div className="bg-red-500 h-4 rounded-lg" style={{ width: '70%' }}></div>
        </div>
      </div>
      <div className="space-y-2">
        <p>Do you feel confident in your financial decisions?</p>
        <div className="w-full bg-gray-300 rounded-lg h-4">
          <div className="bg-red-500 h-4 rounded-lg" style={{ width: '60%' }}></div>
        </div>
      </div>
    </div>
  </div>

  <div className="bg-gray-200 p-4 rounded-lg w-1/3 shadow-md">
    <h2 className="text-lg font-bold mb-4">Help & Settings</h2>
    <div className="space-y-2">
      <Button className="w-full text-gray-900" size="sm">Subscription</Button>
      <Button className="w-full text-gray-900" size="sm">Manage budget</Button>
      <Button className="w-full text-gray-900" size="sm">Learning resources</Button>
      <Button className="w-full text-gray-900" size="sm">Help Center</Button>
    </div>
  </div>
</div>
    </div>
    <Footer/>           
    </div>
</>

  );
};


export default Dashboard;
