// import React from 'react';
import { Link } from 'react-router-dom';
import image3 from '../assets/expenses.png';

const LandingPage = () => {
  return (
    <>
      <nav className="bg-red-900 p-2">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2 text-white text-2xl">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center font-semibold whitespace-nowrap">The Oracle.</span>
          </div>
          <div className="space-x-4">
            <Link to="/login" className="text-gray-300 hover:text-white">Login</Link>
            <Link to="/register" className="text-gray-300 hover:text-white">Register</Link>
          </div>
        </div>
      </nav>

      <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
        <header className="bg-white w-full py-6 shadow-md text-center px-4">
          <img src={image3} alt="Expense Tracker" className="mx-auto mb-4" />
          <h1 className="text-3xl font-bold">Take Control of Your Finances with Our Simple Expense Tracker</h1>
          <p className="text-gray-700 mt-2">Get a clear picture of your spending habits and achieve your financial goals</p>
        </header>
        <main className="flex flex-col items-center justify-center mt-10 px-4">
          <Link to="/register" className="mt-10 bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 focus:outline-none transition duration-300">
            Sign up now and get your FREE Daily Expense Tracker!
          </Link>
          <section className="mt-10 text-center max-w-2xl px-4">
            <p className="text-gray-800 text-lg">Are you tired of living paycheck to paycheck? Do you struggle to stick to your budget? Our simple expense tracker is here to help. With our easy-to-use tool, you can track your spending habits, identify areas for improvement, and make informed financial decisions.</p>
            <ul className="list-disc text-left mt-6 ml-8 text-gray-700">
              <li>Track your income and expenses with ease</li>
              <li>Categorize your spending to identify areas for improvement</li>
              <li>Set budgets and receive alerts when you go over</li>
              <li>Get a clear picture of your financial situation and make informed decisions</li>
            </ul>
          </section>
          <section className="mt-10 text-center max-w-2xl px-4">
            <h2 className="text-2xl font-semibold">Testimonial</h2>
            <p className="mt-4 text-gray-800 italic">“I was struggling to save money and get out of debt. With the help of our expense tracker, I was able to identify areas where I could cut back and make a plan to achieve my financial goals. I’m now able to save over 50% of my income and am debt-free!” - Dafina, Financial Coach and Founder of Dollars Plus Sense</p>
          </section>
          <section className="mt-10 text-center max-w-2xl px-4">
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
