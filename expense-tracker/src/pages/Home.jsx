// import React from 'react';
import { Doughnut, Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';
import 'flowbite';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import Sidebar from '../components/Sidebar';
// import Nav from '../components/Nav';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  BarElement
);

const Home = () => {
  return (
    <>
      <Header />
    {/* <Nav/> */}
    <div className="flex flex-col mt-[35px] min-h-screen">

      {/* <div className="flex flex-grow"> */}
        {/* <Sidebar className="hidden md:block md:w-1/4 lg:w-1/5" /> */}

        <main className="flex-grow p-2 md:ml-60 mt-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-white p-4 rounded-lg shadow-md mt-5">
              <h2 className="text-lg font-bold">Account Balance</h2>
              <p className="text-2xl">$12,345.67</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md mt-5">
              <h2 className="text-lg font-bold">Monthly Spending</h2>
              <p className="text-2xl">$2,456.78</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md mt-5">
              <h2 className="text-lg font-bold">Saving Goals</h2>
              <p className="text-2xl">$8,900.00</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <h2 className="text-lg font-bold mb-2">Recent Transactions</h2>
            <ul className="space-y-1">
              <li className="flex justify-between">
                <span>Grocery Store</span>
                <span>$45.67</span>
              </li>
              <li className="flex justify-between">
                <span>Electricity Bill</span>
                <span>$123.45</span>
              </li>
              <li className="flex justify-between">
                <span>Restaurant</span>
                <span>$67.89</span>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
            <div className="bg-white p-5 rounded-lg shadow-md">
              <h2 className="text-lg font-bold mb-2">Spending Categories</h2>
              <Doughnut
                data={{
                  labels: ['Category 1', 'Category 2', 'Category 3'],
                  datasets: [
                    {
                      data: [300, 50, 100],
                      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                    },
                  ],
                }}
              />
            </div>
            <div className="bg-white p-5 rounded-lg shadow-md">
              <h2 className="text-lg font-bold mb-2">Monthly Spending Trend</h2>
              <Line
                data={{
                  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                  datasets: [
                    {
                      label: 'Spending',
                      data: [65, 59, 80, 81, 56, 55, 40],
                      fill: false,
                      backgroundColor: 'rgba(75,192,192,0.4)',
                      borderColor: 'rgba(75,192,192,1)',
                    },
                  ],
                }}
              />
            </div>
            <div className="bg-white p-5 rounded-lg shadow-md">
              <h2 className="text-lg font-bold mb-2">Income vs Expenses</h2>
              <Bar
                data={{
                  labels: ['Income', 'Expenses'],
                  datasets: [
                    {
                      label: 'Amount',
                      data: [5000, 4000],
                      backgroundColor: ['#36A2EB', '#FF6384'],
                    },
                  ],
                }}
              />
            </div>
          </div>
          <Footer />
        </main>
      </div>
    {/* </div> */}
    </>
  );
};

export default Home;
