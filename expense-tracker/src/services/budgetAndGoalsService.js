// services/budgetAndGoalsService.js

import axios from 'axios';

const saveBudgetAndGoals = async (budgetGoalData) => {
  try {
    const response = await axios.post('http://localhost:5000/api/budgetAndGoals/save', budgetGoalData);
    return response.data;
  } catch (error) {
    console.error('Error saving budget and goals:', error);
    throw error;
  }
};

export { saveBudgetAndGoals };
