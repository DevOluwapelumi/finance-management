import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BudgetAndGoals = () => {
  // const [goals, setGoals] = useState([]);
  const [newGoal, setNewGoal] = useState({ date: '', category: '', amountb: '', amounts: '' });
  const currentUser = localStorage.userId;

  const getUserInfo = async () => {
    try {
      // const response = await axios.post('http://localhost:5000/api/users/userDetails', { currentUser });
      const response = await axios.post('https://tracker-server-two.vercel.app/api/users/userDetails', { currentUser });
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  };

   const [userGoals, setUserGoals] = useState([]);
  const fetchGoals = async () => {
    if (currentUser) {
      try {
        // const response = await axios.post('http://localhost:5000/api/budgetAndGoals/fetchgoal', { currentUser });
        const response = await axios.post('https://tracker-server-two.vercel.app/api/budgetAndGoals/fetchgoal', { currentUser });
        const data = response.data;
        setUserGoals(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching Goals:', error);
        if (error.response) {
          console.error('Data:', error.response.data);
          console.error('Status:', error.response.status);
          console.error('Headers:', error.response.headers);
        } else if (error.request) {
          console.error('Request:', error.request);
        } else {
          console.error('Error message:', error.message);
        }
      }
    }
  };

  useEffect(() => {
    getUserInfo();
    fetchGoals();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewGoal({ ...newGoal, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!newGoal.date || !newGoal.category || !newGoal.amountb || !newGoal.amounts) {
      alert('Please fill in all fields');
      return;
    }
    const goal = {
      ...newGoal,
      amountb: parseFloat(newGoal.amountb),
      amounts: parseFloat(newGoal.amounts),
      userId: currentUser,
    };

    setNewGoal({ date: '', category: '', amountb: '', amounts: '' });

    try {
      // const response = await axios.post('http://localhost:5000/api/budgetAndGoals', goal);
      const response = await axios.post('https://tracker-server-two.vercel.app/api/budgetAndGoals', goal);
      const data = response.data;
      console.log(data);

      fetchGoals(); // Update Goals after adding

      if (data.status === false) {
        toast.error('Error saving goal');
      } else {
        toast.success('Goal saved successfully');
      }
    } catch (error) {
      console.error('Error adding goal:', error);
    }
  };

  const handleDeleteGoal = async (id) => {
    try {
      // await axios.post('http://localhost:5000/api/budgetAndGoals/delete', { goalid: id });
      await axios.post('https://tracker-server-two.vercel.app/api/budgetAndGoals/delete', { goalid: id });
      toast.success('Goal deleted');
      fetchGoals(); // Update Goals after deleting
    } catch (error) {
      console.error('Error deleting goal:', error.message);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow p-2 md:ml-60 mt-[70px]">
        <div className="container mx-auto py-6 px-4 md:px-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-4">Set Budgets & Goals</h2>
            <form className="flex flex-wrap space-x-0 md:space-x-4 space-y-4 md:space-y-0" onSubmit={handleFormSubmit}>
              <input
                type="date"
                name="date"
                value={newGoal.date}
                onChange={handleInputChange}
                className="border border-gray-300 rounded p-2 flex-1 min-w-full md:min-w-0"
              />
                        <select
              name="category"
              onChange={handleInputChange}
              value={newGoal.category}
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
              <option value="Travel">Travel</option>
              <option value="Fitness">Fitness</option>
              <option value="Investments">Investments</option>
              <option value="Charity">Charity</option>
            </select>

              <input
                type="number"
                name="amountb"
                onChange={handleInputChange}
                value={newGoal.amountb}
                placeholder="Budget Amount"
                className="border border-gray-300 rounded p-2 flex-1 min-w-full md:min-w-0"
              />
              <input
                type="number"
                name="amounts"
                onChange={handleInputChange}
                value={newGoal.amounts}
                placeholder="Saving Goal"
                className="border border-gray-300 rounded p-2 flex-1 min-w-full md:min-w-0"
              />
              <button type="submit" className="bg-red-900 text-white p-2 rounded min-w-full md:min-w-0">
                Save
              </button>
            </form>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-lg font-bold mb-4">Budgets & Goals</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b">Category</th>
                    <th className="py-2 px-4 border-b">Date</th>
                    <th className="py-2 px-4 border-b">Budget</th>
                    <th className="py-2 px-4 border-b">Saving Goal</th>
                    <th className="py-2 px-4 border-b">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {userGoals.length > 0 ? (
                    userGoals.map((goal) => (
                      <tr key={goal._id}>
                        <td className="py-2 px-4 border-b">{goal.category}</td>
                        <td className="py-2 px-4 border-b">{goal.date}</td>
                        <td className="py-2 px-4 border-b">${(goal.amountb || 0).toFixed(2)}</td>
                        <td className="py-2 px-4 border-b">${(goal.amounts || 0).toFixed(2)}</td>
                        <td className="py-2 px-4 border-b">
                          <button
                            onClick={() => handleDeleteGoal(goal._id)}
                            className="bg-red-500 text-white p-1 rounded"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="text-center py-2 px-4 border-b">
                        No goals, add some goals above
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      <Footer className="mt-auto" />
      <ToastContainer />
    </div>
  );
};

export default BudgetAndGoals;
