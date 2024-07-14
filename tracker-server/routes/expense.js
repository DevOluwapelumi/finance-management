const express = require('express');
const Expense = require('../models/Expense'); // Adjust the path as necessary
const User = require('../models/User'); // Adjust the path as necessary

const router = express.Router();

// GET all expenses for the logged-in user
router.get('/', async (req, res) => {
  try {
    const expenses = await Expense.find({ userId: req.user.id });
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new expense
router.post('/', async (req, res) => {
  console.log("now in saving expense");
  const { category, date, amount, userId } = req.body;

  try {
    const currentUser = await User.findById(userId);

    if (!currentUser) {
      return res.status(404).send({ status: false, message: "User not found" });
    }

    console.log(amount, currentUser.balance);

    if (currentUser.balance === 0) {
      return res.send({ status: false, message: "Insufficient Funds" });
    } else if (amount > currentUser.balance) {
      return res.send({ status: false, message: "Insufficient Funds" });
    } else {
      const newExpense = new Expense({
        category,
        date,
        amount,
        userId,
      });
      console.log("Received data:", req.body);

      // Update user balance and monthlySpd
      currentUser.balance -= amount;
      // const expenseMonth = new Date(date).getMonth(); 
      // currentUser.monthlySpd[expenseMonth] += amount;
      currentUser.monthlySpd += amount;

      await currentUser.save();
      console.log("Updated user data:", currentUser);

      const savedExpense = await newExpense.save();
      if (savedExpense) {
        res.send({ status: true, message: "Expense saved successfully" });
      } else {
        res.send({ status: false, message: "Error: Unable to save expense" });
      }
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

// Fetch user expenses
router.post('/fetchexpense', async (req, res) => {
  const { currentUser } = req.body;

  try {
    const getUserExpense = await Expense.find({ userId: currentUser });
    res.json(getUserExpense);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE an expense
router.post('/delete', async (req, res) => {
  try {
    const expense = await Expense.findOneAndDelete({ _id: req.body.expenseid });
    if (expense) {
      return res.status(200).json({ message: 'Expense deleted' });
    } else {
      res.json({ message: 'Expense not found or deleted' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
