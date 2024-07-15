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
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

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
  const [userGoals, setUserGoals] = useState([]);

  const getUserInfo = async () => {
    // const response = await axios.post('http://localhost:5000/api/users/userDetails', { currentUser });
    const response = await axios.post('https://tracker-server-two.vercel.app/api/users/userDetails', { currentUser });
    setUserDetails(response.data.user);
  };

  const getUserIncomes = async () => {
    // const response = await axios.get('http://localhost:5000/api/income', { params: { userId: currentUser } });
    const response = await axios.get('https://tracker-server-two.vercel.app/api/income', { params: { userId: currentUser } });
    setUserIncomes(response.data.incomes);
  };

  const getUserExpenses = async () => {
    // const response = await axios.get('http://localhost:5000/api/expense', { params: { userId: currentUser } });
    const response = await axios.get('https://tracker-server-two.vercel.app/api/expense', { params: { userId: currentUser } });
    setUserExpenses(response.data.expenses);
  };

  const getUserGoals = async () => {
    // const response = await axios.get('http://localhost:5000/api/budgetAndGoals', { params: { userId: currentUser } });
    const response = await axios.get('https://tracker-server-two.vercel.app/api/budgetAndGoals', { params: { userId: currentUser } });
    setUserGoals(response.data.goals);
  };

  const [recentTransactions, setRecentTransactions] = useState([]);

  const fetchRecentTransactions = async () => {
    if (currentUser) {
      try {
        const [expensesResponse, incomesResponse, goalsResponse] = await Promise.all([
          axios.post('https://tracker-server-two.vercel.app/api/expense/fetchexpense', { currentUser }),
          axios.post('https://tracker-server-two.vercel.app/api/income/fetchincome', { currentUser }),
          axios.post('https://tracker-server-two.vercel.app/api/budgetAndGoals/fetchgoal', { currentUser })
          // axios.post('http://localhost:5000/api/expense/fetchexpense', { currentUser }),
          // axios.post('http://localhost:5000/api/income/fetchincome', { currentUser }),
          // axios.post('http://localhost:5000/api/budgetAndGoals/fetchgoal', { currentUser })
        ]);

        const expenses = expensesResponse.data.map(expense => ({ ...expense, type: 'Expense' }));
        const incomes = incomesResponse.data.map(income => ({ ...income, type: 'Income' }));
        const goals = goalsResponse.data.map(goal => ({ 
          ...goal, 
          type: 'Budget/Goal',
          amount: goal.amountb
        }));

        const allTransactions = [...expenses, ...incomes, ...goals];
        
        // Sort transactions by date in descending order
        allTransactions.sort((a, b) => new Date(b.date) - new Date(a.date));

        // Get only the three most recent transactions
        const threeRecentTransactions = allTransactions.slice(0, 3);

        setRecentTransactions(threeRecentTransactions);
      } catch (error) {
        console.error('Error fetching recent transactions:', error);
        toast.error('Error fetching recent transactions');
      }
    }
  };

  useEffect(() => {
    fetchRecentTransactions();
  }, []);

  const formatAmount = (transaction) => {
    if (transaction.type === 'Budget/Goal') {
      return `₦${transaction.amountb.toFixed(2)} / $${transaction.amounts.toFixed(2)}`;
    }
    return `₦${transaction.amount.toFixed(2)}`;
  };
  useEffect(() => {
    getUserInfo();
    getUserIncomes();
    getUserExpenses();
    getUserGoals();
    fetchRecentTransactions();
  }, []);

  useEffect(() => {
    console.log('User Expenses:', userExpenses);
    console.log('User Incomes:', userIncomes);
    console.log('User Goals:', userGoals);
  }, [userExpenses, userIncomes, userGoals]);
  
  // In your JSX, before the table:
 

  useEffect(() => {
    getIncomeChartData();
    getExpensesChartData();
    getMonthlySpendingTrendData();
  }, [userIncomes, userExpenses, userDetails]);

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
    const monthlySpd = Array(12).fill(0);
    userExpenses.forEach(expense => {
      const month = new Date(expense.date).getMonth();
      monthlySpd[month] += expense.amount;
    });

    if (userDetails.monthlySpd) {
      const currentMonth = new Date().getMonth();
      monthlySpd[currentMonth] += userDetails.monthlySpd;
    }

    return {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'Spending',
          data: monthlySpd,
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
          data: [userDetails.balance || 0, userDetails.monthlySpd || 0, userDetails.savingGoal || 0],
          backgroundColor: ['#36A2EB', '#FF6384', '#ffce56'],
        },
      ],
    };
  };




  return (
    <>
      <Header />
      <ToastContainer />
      <div className="flex flex-col mt-[35px] min-h-screen">
        <main className="flex-grow p-2 md:ml-60">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-white p-4 rounded-lg shadow-md mt-5">
              <h2 className="text-lg font-bold">Account Balance</h2>
              <p className="text-2xl">₦{userDetails.balance}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md mt-5">
              <h2 className="text-lg font-bold">Monthly Spending</h2>
              <p className="text-2xl">₦{userDetails.monthlySpd}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md mt-5">
              <h2 className="text-lg font-bold">Saving Goals</h2>
              <p className="text-2xl">₦{userDetails.savingGoal}</p>
            </div>
          </div>


        <div className="container mx-auto py-6 px-4 md:px-6">
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <div className="card-header">
    <div className="float-end">
      <Link to="/transaction" className="btn btn-sm btn-primary bg-red-900">See All</Link>
    </div>
    <h2 className="text-lg font-bold mb-4">Recent Transactions</h2>
  </div>  
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b">Date</th>
                    <th className="py-2 px-4 border-b">Type</th>
                    <th className="py-2 px-4 border-b">Category</th>
                    <th className="py-2 px-4 border-b">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {recentTransactions.length > 0 ? (
                    recentTransactions.map((transaction) => (
                      <tr key={transaction._id}>
                        <td className="py-2 px-4 border-b">{transaction.date}</td>
                        <td className="py-2 px-4 border-b">{transaction.type}</td>
                        <td className="py-2 px-4 border-b">{transaction.category}</td>
                        <td className="py-2 px-4 border-b">{formatAmount(transaction)}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="text-center py-2 px-4 border-b">
                        No recent transactions found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
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
