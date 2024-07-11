// pages/BudgetAndGoals.js

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import { saveBudgetAndGoals, fetchBudgetAndGoals, deleteBudgetAndGoal } from '../services/budgetAndGoalsService'; // assuming service functions for API calls

const BudgetAndGoals = () => {
  const [formData, setFormData] = useState({
    category: '',
    budgetAmount: '',
    savingGoal: '',
  });
  const [budgetGoals, setBudgetGoals] = useState([]);

  useEffect(() => {
    fetchBudgetsAndGoals();
  }, []);

  // const fetchBudgetsAndGoals = async () => {
  //   try {
  //     const data = await fetchBudgetAndGoals(localStorage.userId); // Adjust as per your API service function
  //     setBudgetGoals(data);
  //   } catch (error) {
  //     console.error('Error fetching budgets and goals:', error);
  //   }
  // };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleFormSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await saveBudgetAndGoals({ ...formData, userId: localStorage.userId });
  //     await fetchBudgetsAndGoals(); // Refresh data after save
  //     setFormData({
  //       category: '',
  //       budgetAmount: '',
  //       savingGoal: '',
  //     });
  //     console.log('Budget and goals saved successfully');
  //   } catch (error) {
  //     console.error('Error saving budget and goals:', error);
  //   }
  // };

  // const handleDelete = async (id) => {
  //   try {
  //     await deleteBudgetAndGoal(id);
  //     await fetchBudgetsAndGoals(); // Refresh data after delete
  //     console.log('Budget and goal deleted successfully');
  //   } catch (error) {
  //     console.error('Error deleting budget and goal:', error);
  //   }
  // };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow p-2 md:ml-60 mt-[70px]">
        <div className="container mx-auto py-6 px-4 md:px-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-4">Set Budgets & Goals</h2>
            <form
              className="flex flex-wrap space-x-0 md:space-x-4 space-y-4 md:space-y-0"
              onSubmit={handleFormSubmit}
            >
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="border border-gray-300 rounded p-2 flex-1 min-w-full md:min-w-0"
              >
                <option value="">Select Category</option>
                <option value="Food">Food</option>
                <option value="Transport">Transport</option>
                <option value="Entertainment">Entertainment</option>
              </select>
              <input
                type="number"
                name="budgetAmount"
                value={formData.budgetAmount}
                onChange={handleInputChange}
                placeholder="Budget Amount"
                className="border border-gray-300 rounded p-2 flex-1 min-w-full md:min-w-0"
              />
              <input
                type="number"
                name="savingGoal"
                value={formData.savingGoal}
                onChange={handleInputChange}
                placeholder="Saving Goal"
                className="border border-gray-300 rounded p-2 flex-1 min-w-full md:min-w-0"
              />
              <button
                type="submit"
                className="bg-red-900 text-white p-2 rounded min-w-full md:min-w-0"
              >
                Save
              </button>
            </form>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mt-6">
            <h2 className="text-lg font-bold mb-4">Saved Budgets & Goals</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b">Category</th>
                    <th className="py-2 px-4 border-b">Budget Amount</th>
                    <th className="py-2 px-4 border-b">Saving Goal</th>
                    <th className="py-2 px-4 border-b">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {budgetGoals.map((item) => (
                    <tr key={item._id}>
                      <td className="py-2 px-4 border-b">{item.category}</td>
                      <td className="py-2 px-4 border-b">${item.budgetAmount}</td>
                      <td className="py-2 px-4 border-b">${item.savingGoal}</td>
                      <td className="py-2 px-4 border-b">
                        <button
                          onClick={() => handleDelete(item._id)}
                          className="bg-red-500 text-white p-1 rounded"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      <Footer className="mt-auto" />
    </div>
  );
};

export default BudgetAndGoals;
