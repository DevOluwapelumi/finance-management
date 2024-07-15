// home.js

const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Assuming you have a User model
const Income = require('../models/Income'); // Assuming you have an Income model
const Expense = require('../models/Expense'); // Assuming you have an Expense model
const Goal = require('../models/budgetAndGoals'); // Assuming you have a Goal model
const Transaction = require('../models/Transaction'); // Assuming you have a Transaction model

// Get user details
router.post('/api/users/userDetails', async (req, res) => {
  try {
    const { currentUser } = req.body;
    const user = await User.findById(currentUser);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ user });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get user incomes
router.get('/api/incomes', async (req, res) => {
  try {
    const { userId } = req.query;
    const incomes = await Income.find({ userId });
    res.json({ incomes });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get user expenses
router.get('/api/expenses', async (req, res) => {
  try {
    const { userId } = req.query;
    const expenses = await Expense.find({ userId });
    res.json({ expenses });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get user goals
router.get('/api/budgetAndGoals', async (req, res) => {
  try {
    const { userId } = req.query;
    const goals = await Goal.find({ userId });
    res.json({ goals });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get recent transactions
router.post('/api/transactions/recent', async (req, res) => {
  try {
    const { currentUser, limit } = req.body;
    const transactions = await Transaction.find({ userId: currentUser })
      .sort({ date: -1 })
      .limit(limit);
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;