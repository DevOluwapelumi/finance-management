import { useEffect, useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
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
import axios from 'axios';
import 'flowbite';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
  const currentUser = localStorage.userId;
  const [userDetails, setUserDetails] = useState({});
  const [userIncomes, setUserIncomes] = useState([]);
  const [userExpenses, setUserExpenses] = useState([]);

  const getUserInfo = async () => {
    const response = await axios.post('http://localhost:5000/api/users/userDetails', { currentUser });
    setUserDetails(response.data.user);
  };

  const getUserIncomes = async () => {
    const response = await axios.get('http://localhost:5000/api/incomes', { params: { userId: currentUser } });
    setUserIncomes(response.data.incomes);
  };

  const getUserExpenses = async () => {
    const response = await axios.get('http://localhost:5000/api/expenses', { params: { userId: currentUser } });
    setUserExpenses(response.data.expenses);
  };

  useEffect(() => {
    getUserInfo();
    getUserIncomes();
    getUserExpenses();
    getIncomeChartData();
    getExpensesChartData();
  }, []);

  const getIncomeChartData = () => {
    const categories = Array.from(new Set(userIncomes.map(income => income.category)));
    const data = categories.map(
      (category) =>
        userIncomes
          .filter((income) => income.category === category)
          .reduce((total, income) => total + (income.amount || 0), 0)
    );

    return {
      labels: categories,
      datasets: [
        {
          data,
          backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0', '#9966ff', '#ff9f40'],
          hoverBackgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0', '#9966ff', '#ff9f40'],
        },
      ],
    };
  };

  const getExpensesChartData = () => {
    const categories = Array.from(new Set(userExpenses.map(expense => expense.category)));
    const data = categories.map(
      (category) =>
        userExpenses
          .filter((expense) => expense.category === category)
          .reduce((total, expense) => total + (expense.amount || 0), 0)
    );

    return {
      labels: categories,
      datasets: [
        {
          data,
          backgroundColor: ['#ff6384', '#36a2eb', '#ffce56'],
          hoverBackgroundColor: ['#ff6384', '#36a2eb', '#ffce56'],
        },
      ],
    };
  };

  const getMonthlySpendingTrendData = () => {
    return {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'Spending',
          data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40],
          fill: false,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
        },
      ],
    };
  };

  const getIncomeVsExpensesVsGoalsData = () => {
    return {
      labels: ['Income', 'Expenses', 'Goals'],
      datasets: [
        {
          label: 'Amount',
          data: [userDetails.income || 0, userDetails.expenses || 0, userDetails.savingGoal || 0],
          backgroundColor: ['#36A2EB', '#FF6384', '#ffce56'],
        },
      ],
    };
  };

  return (
    <>
      <Header />
      <div className="flex flex-col mt-[35px] min-h-screen">
        <main className="flex-grow p-2 md:ml-60">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-white p-4 rounded-lg shadow-md mt-5">
              <h2 className="text-lg font-bold">Account Balance</h2>
              <p className="text-2xl">{userDetails.balance}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md mt-5">
              <h2 className="text-lg font-bold">Monthly Spending</h2>
              <p className="text-2xl">{userDetails.monthlySpd}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md mt-5">
              <h2 className="text-lg font-bold">Saving Goals</h2>
              <p className="text-2xl">{userDetails.savingGoal}</p>
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
              <h2 className="text-lg font-bold mb-2">Monthly Spending Trend</h2>
              <Line data={getMonthlySpendingTrendData()} />
            </div>
            <div className="bg-white p-5 rounded-lg shadow-md">
              <h2 className="text-lg font-bold mb-2">Income vs Expenses vs Goals</h2>
              <Bar data={getIncomeVsExpensesVsGoalsData()} />
            </div>
          </div>
          <Footer />
        </main>
      </div>
    </>
  );
};

export default Home;
