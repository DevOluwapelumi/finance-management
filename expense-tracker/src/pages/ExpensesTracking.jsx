// import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const ExpensesTracking = () => {
  const expenses = [
    { category: 'Food', date: '2023-10-01', amount: 50 },
    { category: 'Transport', date: '2023-10-02', amount: 20 },
    { category: 'Entertainment', date: '2023-10-03', amount: 100 },
  ];

  const data = {
    labels: ['Food', 'Transport', 'Entertainment'],
    datasets: [
      {
        data: [50, 20, 100],
        backgroundColor: ['#ff6384', '#36a2eb', '#ffce56'],
        hoverBackgroundColor: ['#ff6384', '#36a2eb', '#ffce56'],
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto py-6 px-4 md:px-0 flex-1">
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <h2 className="text-lg font-bold mb-4">Add New Expense</h2>
          <form className="flex flex-wrap space-x-0 md:space-x-4 space-y-4 md:space-y-0">
            <input type="date" className="border border-gray-300 rounded p-2 flex-1 min-w-full md:min-w-0" />
            <select className="border border-gray-300 rounded p-2 flex-1 min-w-full md:min-w-0">
              <option value="food">Food</option>
              <option value="transport">Transport</option>
              <option value="entertainment">Entertainment</option>
            </select>
            <input type="number" placeholder="Amount" className="border border-gray-300 rounded p-2 flex-1 min-w-full md:min-w-0" />
            <button type="submit" className="bg-red-900 text-white p-2 rounded min-w-full md:min-w-0">Add Expense</button>
          </form>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-lg font-bold mb-4">Past Expenses</h2>
          <div className="flex flex-wrap -mx-2">
            {expenses.map((expense, index) => (
              <div key={index} className="border border-gray-300 rounded p-4 flex-1 mx-2 mb-4 md:mb-0 min-w-full md:min-w-0">
                <h3 className="text-md font-semibold">{expense.category}</h3>
                <p>Date: {expense.date}</p>
                <p>Amount: ${expense.amount}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">Spending by Category</h2>
          <div className="flex flex-wrap justify-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1 max-w-xs">
              <Pie data={{...data, datasets: [{ ...data.datasets[0], data: [50, 20, 30] }] }} />
              <p className="text-center mt-4">Food</p>
            </div>
            <div className="flex-1 max-w-xs">
              <Pie data={{...data, datasets: [{ ...data.datasets[0], data: [30, 20, 50] }] }} />
              <p className="text-center mt-4">Transport</p>
            </div>
            <div className="flex-1 max-w-xs">
              <Pie data={{...data, datasets: [{ ...data.datasets[0], data: [20, 50, 30] }] }} />
              <p className="text-center mt-4">Entertainment</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ExpensesTracking;
