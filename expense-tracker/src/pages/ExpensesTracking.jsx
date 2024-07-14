import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const ExpensesTracking = () => {
  // const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({ date: '', category: '', amount: '' });
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

  const [userExpenses, setUserExpenses] = useState([]);
  const fetchExpenses = async () => {
    if (currentUser) {
      try {
        const response = await axios.post('http://localhost:5000/api/expense/fetchexpense', { currentUser });
        // const response = await axios.post('https://tracker-server-two.vercel.app/api/expense/fetchexpense', { currentUser });
        const data = response.data;
        setUserExpenses(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching expenses:', error);
      }
    }
  };

  useEffect(() => {
    getUserInfo();
    fetchExpenses();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExpense({ ...newExpense, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!newExpense.date || !newExpense.category || !newExpense.amount) {
      alert('Please fill in all fields');
      return;
    }
    const expense = {
      ...newExpense,
      amount: parseFloat(newExpense.amount),
      userId: currentUser,
    };

    setNewExpense({ date: '', category: '', amount: '' });

    try {
      const response = await axios.post('http://localhost:5000/api/expense', expense);
      // const response = await axios.post('https://tracker-server-two.vercel.app/api/expense', expense);
      const data = response.data;
      console.log(data);

      fetchExpenses(); // Update expenses after adding

      if (data.status === false) {
        toast.error(`Insufficient funds`);
      } else {
        toast.success('Expense saved successfully');
      }
    } catch (error) {
      console.error('Error adding expense:', error);
    }
  };

  const handleDeleteExpense = async (id) => {
    try {
      await axios.post(`http://localhost:5000/api/expense/delete`, {expenseid:id});
      // await axios.post(`https://tracker-server-two.vercel.app/api/expense/delete`, {expenseid:id});
      toast.error(`Expense deleted`);
      fetchExpenses(); // Update expenses after deleting
    } catch (error) {
      console.error('Error deleting expense:', error.message);
    }
  };

  const getChartData = () => {
    const categories = ['Food', 'Transport', 'Entertainment'];
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

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <ToastContainer />
      <main className="flex-grow p-2 md:ml-60 mt-10">
        <div className="container mx-auto py-6 px-4 md:px-6">
          <div className="bg-white p-4 rounded-lg shadow-md mb-6">
            <h2 className="text-lg font-bold mb-4">Add New Expense</h2>
            <form
              className="flex flex-wrap space-x-0 md:space-x-4 space-y-4 md:space-y-0"
              onSubmit={handleFormSubmit}
            >
              <input
                type="date"
                name="date"
                value={newExpense.date}
                onChange={handleInputChange}
                className="border border-gray-300 rounded p-2 flex-1 min-w-full md:min-w-0"
              />
             
                        <select
              name="category"
              value={newExpense.category}
              onChange={handleInputChange}
              className="border border-gray-300 rounded p-2 flex-1 min-w-full md:min-w-0"
            >
              <option value="">Select Category</option>
              <option value="Food">Food</option>
              <option value="Transport">Transport</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Housing">Housing</option>
              <option value="Utilities">Utilities</option>
              <option value="Insurance">Insurance</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Debt Repayment">Debt Repayment</option>
              <option value="Education">Education</option>
              <option value="Personal Care">Personal Care</option>
              <option value="Miscellaneous">Miscellaneous</option>
            </select>

              <input
                type="number"
                name="amount"
                value={newExpense.amount}
                onChange={handleInputChange}
                placeholder="Amount"
                className="border border-gray-300 rounded p-2 flex-1 min-w-full md:min-w-0"
              />
              <button
                type="submit"
                className="bg-red-900 text-white p-2 rounded min-w-full md:min-w-0"
              >
                Add Expense
              </button>
            </form>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-lg font-bold mb-4">Expenses</h2>
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
                {
                  userExpenses.length>0?
                  <tbody>
                  {
                  userExpenses.map((expense) => (
                    <tr key={expense._id}>
                      <td className="py-2 px-4 border-b">{expense.category}</td>
                      <td className="py-2 px-4 border-b">{expense.date}</td>
                      <td className="py-2 px-4 border-b">${(expense.amount || 0).toFixed(2)}</td>
                      <td className="py-2 px-4 border-b">
                        <button
                          onClick={() => handleDeleteExpense(expense._id)}
                          className="bg-red-500 text-white p-1 rounded"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))

                }
                </tbody>
                :<tbody className="text-center w-100">No expense, add expenses at the top</tbody>

                }
               
              </table>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-4">Spending by Category</h2>
            <div className="flex justify-center">
              <div className="max-w-xs">
                <Pie data={getChartData()} />
                <p className="text-center mt-4">Expenses by Category</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default ExpensesTracking;
