// import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
<>
    

<nav className="bg-red-900 border-gray-200 dark:bg-gray-900">
  <div className=" flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">The Oracle.</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
       
        <li>
          <Link to="/login" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sign In</Link>
        </li>
        <li>
          <Link to="/register"
          
          
          
          
          className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sign Up</Link>
        </li>
      
      </ul>
    </div>
  </div>
</nav>

<div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <header className="bg-white w-full py-6 shadow-md text-center">
        <img src="/src/assets/images/expenses.png" alt="Expense Tracker" className="mx-auto mb-4" />
        <h1 className="text-3xl font-bold">Take Control of Your Finances with Our Simple Expense Tracker</h1>
        <p className="text-gray-700 mt-2">Get a clear picture of your spending habits and achieve your financial goals</p>
      </header>
      <main className="flex flex-col items-center justify-center mt-10 px-4">
      <Link to="/register" className="mt-10 bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 focus:outline-none transition duration-300">
          Sign up now and get your FREE Daily Expense Tracker!
        </Link>
        <section className="mt-10 text-center max-w-2xl">
          <p className="text-gray-800 text-lg">Are you tired of living paycheck to paycheck? Do you struggle to stick to your budget? Our simple expense tracker is here to help. With our easy-to-use tool, you can track your spending habits, identify areas for improvement, and make informed financial decisions.</p>
          <ul className="list-disc text-left mt-6 ml-8 text-gray-700">
            <li>Track your income and expenses with ease</li>
            <li>Categorize your spending to identify areas for improvement</li>
            <li>Set budgets and receive alerts when you go over</li>
            <li>Get a clear picture of your financial situation and make informed decisions</li>
          </ul>
        </section>
        <section className="mt-10 text-center max-w-2xl">
          <h2 className="text-2xl font-semibold">Testimonial</h2>
          <p className="mt-4 text-gray-800 italic">“I was struggling to save money and get out of debt. With the help of our expense tracker, I was able to identify areas where I could cut back and make a plan to achieve my financial goals. I’m now able to save over 50% of my income and am debt-free!” - Dafina, Financial Coach and Founder of Dollars Plus Sense</p>
        </section>
        <section className="mt-10 text-center max-w-2xl">
          <h2 className="text-2xl font-semibold">Benefits</h2>
          <ul className="list-disc text-left mt-6 ml-8 text-gray-700">
            <li>Gain control of your finances and achieve your financial goals</li>
            <li>Identify areas where you can cut back and save money</li>
            <li>Make informed financial decisions and avoid overspending</li>
            <li>Get a clear picture of your financial situation and stay on track</li>
          </ul>
        </section>
         <Link to="/register" className="mt-10 bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 focus:outline-none transition duration-300">
          Sign up now and get your FREE Daily Expense Tracker!
        </Link>

      </main>
    </div>


    </>
  );
};

export default LandingPage;
