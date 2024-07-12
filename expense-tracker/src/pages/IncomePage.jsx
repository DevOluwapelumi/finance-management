import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const IncomePage = () => {
  const [newIncome, setNewIncome] = useState({ date: '', category: '', amount: '' });
  const [userIncomes, setUserIncomes] = useState([]);
  const currentUser = localStorage.userId;

  const getUserInfo = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/users/userDetails', { currentUser });
      // const response = await axios.post('https://tracker-server-two.vercel.app/api/users/userDetails', { currentUser });
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  };

  const fetchIncomes = async () => {
    if (currentUser) {
      try {
        const response = await axios.post('http://localhost:5000/api/income/fetchincome', { currentUser });
        // const response = await axios.post('https://tracker-server-two.vercel.app/api/income/fetchincome', { currentUser });
        const data = response.data;
        setUserIncomes(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching incomes:', error);
      }
    }
  };

  useEffect(() => {
    getUserInfo();
    fetchIncomes();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewIncome({ ...newIncome, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!newIncome.date || !newIncome.category || !newIncome.amount) {
      alert('Please fill in all fields');
      return;
    }
    const income = {
      ...newIncome,
      amount: parseFloat(newIncome.amount),
      userId: currentUser,
    };

    setNewIncome({ date: '', category: '', amount: '' });

    try {
      const response = await axios.post('http://localhost:5000/api/income', income);
      // const response = await axios.post('https://tracker-server-two.vercel.app/api/income', income);
      const data = response.data;
      console.log(data);

      fetchIncomes(); // Update incomes after adding

      if (data.status === false) {
        toast.error(`Insufficient funds`);
      } else {
        toast.success('Income saved successfully');
      }
    } catch (error) {
      console.error('Error adding income:', error);
    }
  };

  const handleDeleteIncome = async (id) => {
    try {
      await axios.post(`http://localhost:5000/api/income/delete`, { incomeid: id });
      // await axios.post(`https://tracker-server-two.vercel.app/api/income/delete`, { incomeid: id });
      toast.error(`Income deleted`);
      fetchIncomes(); // Update incomes after deleting
    } catch (error) {
      console.error('Error deleting income:', error.message);
    }
  };

  const getChartData = () => {
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

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <ToastContainer />
      <main className="flex-grow p-2 md:ml-60 mt-10">
        <div className="container mx-auto py-6 px-4 md:px-6">
          <div className="bg-white p-4 rounded-lg shadow-md mb-6">
            <h2 className="text-lg font-bold mb-4">Add New Income</h2>
            <form
              className="flex flex-wrap space-x-0 md:space-x-4 space-y-4 md:space-y-0"
              onSubmit={handleFormSubmit}
            >
              <input
                type="date"
                name="date"
                value={newIncome.date}
                onChange={handleInputChange}
                className="border border-gray-300 rounded p-2 flex-1 min-w-full md:min-w-0"
              />
              <select
                name="category"
                value={newIncome.category}
                onChange={handleInputChange}
                className="border border-gray-300 rounded p-2 flex-1 min-w-full md:min-w-0"
              >
                <option value="">Select Category</option>
                <option value="Food">Food</option>
                <option value="Transport">Transport</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Salary">Salary</option>
                <option value="Savings">Savings</option>
              </select>
              <input
                type="number"
                name="amount"
                value={newIncome.amount}
                onChange={handleInputChange}
                placeholder="Amount"
                className="border border-gray-300 rounded p-2 flex-1 min-w-full md:min-w-0"
              />
              <button
                type="submit"
                className="bg-red-900 text-white p-2 rounded min-w-full md:min-w-0"
              >
                Add Income
              </button>
            </form>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-lg font-bold mb-4">Incomes</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b">Category</th>
                    <th className="py-2 px-4 border-b">Date</th>
                    <th className="py-2 px-4 border-b">Amount</th>
                    <th className="py-2 px-4 border-b">Actions</th>
                  </tr>
                </thead>
                {userIncomes.length > 0 ? (
                  <tbody>
                    {userIncomes.map((income) => (
                      <tr key={income._id}>
                        <td className="py-2 px-4 border-b">{income.category}</td>
                        <td className="py-2 px-4 border-b">{income.date}</td>
                        <td className="py-2 px-4 border-b">${(income.amount || 0).toFixed(2)}</td>
                        <td className="py-2 px-4 border-b">
                          <button
                            onClick={() => handleDeleteIncome(income._id)}
                            className="bg-red-500 text-white p-1 rounded"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                ) : (
                  <tbody>
                    <tr>
                      <td colSpan="4" className="text-center py-2">
                        No income, add incomes at the top
                      </td>
                    </tr>
                  </tbody>
                )}
              </table>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-4">Income by Category</h2>
            <div className="flex justify-center">
              <div className="max-w-xs">
                <Pie data={getChartData()} />
                <p className="text-center mt-4">Income by Category</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default IncomePage;
