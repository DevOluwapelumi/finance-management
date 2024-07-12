const express = require('express');
const Goal = require('../models/budgetAndGoals'); // Adjust the path as necessary
const auth = require('../middleware/auth');
const router = express.Router();
const User = require('../models/User');

// GET all Goals for the logged-in user
router.get('/', auth, async (req, res) => {
  try {
    const goals = await Goal.find({ userId: req.user.id });
    res.json(goals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new Goal
router.post('/', async (req, res) => {
  console.log("now in saving goals");
  const { category, date, amountb, amounts, userId } = req.body;

  try {
    const currentUser = await User.findById(userId);
    if (!currentUser) {
      return res.status(404).json({ status: false, message: "User not found" });
    }

    const newGoal = new Goal({
      category,
      date,
      amountb,
      amounts,
      userId,
    });

    console.log("Received data:", req.body);

    currentUser.savingGoal += amounts; // Add the amounts to savingGoal
    await currentUser.save();

    const savedGoal = await newGoal.save();
    res.json({ status: true, message: "Goal saved successfully", goal: savedGoal });

  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Fetch user Goals
router.post('/fetchgoal', async (req, res) => {
  const { currentUser } = req.body;

  try {
    const userGoals = await Goal.find({ userId: currentUser });
    res.json(userGoals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE a Goal
router.post('/delete', async (req, res) => {
  try {
    const goal = await Goal.findOneAndDelete({ _id: req.body.goalid });
    if (goal) {
      res.status(200).json({ message: 'Goal deleted' });
    } else {
      res.json({ message: 'Goal not found or already deleted' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
