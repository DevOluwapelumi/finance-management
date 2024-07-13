const express = require('express');
const Income = require('../models/Income'); // Adjust the path as necessary
const auth = require('../middleware/auth');
const router = express.Router();
const User = require('../models/User');


// GET all incomes for the logged-in user
router.get('/', auth, async (req, res) => {
  try {
    const incomes = await Income.find({ userId: req.user.id });
    res.json(incomes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new income
router.post('/', async (req, res) => {
  console.log("now in saving income");
  const { category, date, amount, userId } = req.body;

  try {
    const currentUser = await User.findById(userId);
    if (!currentUser) {
      return res.status(404).json({ status: false, message: "User not found" });
    }

    const newIncome = new Income({
      category,
      date,
      amount,
      userId,
    });
    console.log("Received data:", req.body);

    currentUser.balance += amount;
    await currentUser.save();

    const savedIncome = await newIncome.save();
    res.json({ status: true, message: "Income saved successfully", income: savedIncome });

  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Fetch user incomes
router.post('/fetchincome', async (req, res) => {
  const { currentUser } = req.body;

  try {
    const getUserIncome = await Income.find({ userId: currentUser });
    res.json(getUserIncome);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE an income
router.post('/delete', async (req, res) => {
  try {
    const income = await Income.findOneAndDelete({ _id: req.body.incomeid });
    if (income) {
      return res.status(200).json({ message: 'Income deleted' });
    } else {
      res.json({ message: 'Income not found or deleted' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
