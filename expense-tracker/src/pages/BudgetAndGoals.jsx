// import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import Sidebar from '../components/Sidebar';

const BudgetAndGoals = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* <div className="flex flex-grow">
        <Sidebar className="hidden md:block md:w-1/4 lg:w-1/5" /> */}

      <main className="flex-grow p-2 md:ml-60 mt-[70px]">
        <div className="container mx-auto py-6 px-4 md:px-0 flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-bold mb-4">Set Budgets & Goals</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category:</label>
                  <input type="text" id="category" className="border border-gray-300 rounded p-2 w-full " />
                </div>
                <div>
                  <label htmlFor="budgetAmount" className="block text-sm font-medium text-gray-700">Budget Amount:</label>
                  <input type="number" id="budgetAmount" className="border border-gray-300 rounded p-2 w-full" />
                </div>
                <div>
                  <label htmlFor="savingGoal" className="block text-sm font-medium text-gray-700">Saving Goal:</label>
                  <input type="number" id="savingGoal" className="border border-gray-300 rounded p-2 w-full" />
                </div>
                <button type="submit" className="bg-red-900 text-white p-2 rounded w-full">Save</button>
              </form>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-bold mb-4">Track Progress</h2>
              <div className="space-y-4">
                {['Groceries', 'Utilities', 'Entertainment'].map((item, index) => (
                  <div key={index} className="border border-gray-300 rounded p-4">
                    <p className="text-md font-semibold">{item}</p>
                    <button className="bg-red-900 text-white p-2 rounded mt-2 w-full">Edit</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer className="mt-auto"/>
    </div>
    // </div>
  );
};

export default BudgetAndGoals;
