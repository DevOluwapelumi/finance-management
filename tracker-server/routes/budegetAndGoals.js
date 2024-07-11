// routes/budgetAndGoals.js
const express = require('express');
const budget = require('../models/Expense'); // Adjust the path as necessary
const auth = require('../middleware/auth');
const user = require('../models/User')

const router = express.Router();

// GET all expenses for the logged-in user
router.get('/', auth, async (req, res) => {
  try {
    const expenses = await Expense.find({ userId: req.user.id });
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// POST route to save budget and goal
router.post('/api/budgetAndGoals/save', async (req, res) => {
  const { category, budgetAmount, savingGoal, userId } = req.body;

  try {
    // Create new BudgetGoal document
    const budgetGoal = new BudgetGoal({
      category,
      budgetAmount,
      savingGoal,
      userId,
    });

    // Save to database
    await budgetGoal.save();

    res.status(201).json({ message: 'Budget and goal saved successfully' });
  } catch (error) {
    console.error('Error saving budget and goal:', error);
    res.status(500).json({ error: 'Failed to save budget and goal' });
  }
});

module.exports = router;
