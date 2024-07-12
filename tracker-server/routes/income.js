const express = require('express');
const Income = require('../models/Income'); // Adjust the path as necessary
const auth = require('../middleware/auth');
const user = require('../models/User')

const router = express.Router();

// GET all incomes for the logged-in user
router.get('/', async (req, res) => {
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
  user.findOne({_id:userId}).then( async(currentUser)=>{
    console.log(amount, currentUser.balance)
    if(currentUser.balance==0){
      res.send({status:false, message:"Insuffiecient Funds"})
    }else if(amount>currentUser.balance){
    
      res.send({status:false, message:"Insuffiecient Funds" })
      console.log("ddd")
    }else if(currentUser.balance>amount){
      const newIncome = new Income({
        category,
        date,
        amount,
        userId,
      });
      console.log("Received data:", req.body);
      try {
        currentUser.balance= currentUser.balance+amount
        currentUser.save()
        console.log(currentUser)
        const savedIncome = await newIncome.save();
        if (savedIncome) {
          res.send({ status: true, message: "Income saved successfully" });
        } else {
          res.send({ status: false, message: "Error: Unable to save income" });
        }
      } catch (err) {
        res.status(400).json({ message: err.message });
      }     
    }
  }).catch(err=>{
    console.log(err)
  })
 
});

// Fetch user incomes
router.post('/fetchincome', async (req, res) => {
  const { currentUser } = req.body;

  try {
    const getUserIncome = await Income.find({ userId: currentUser });
    // console.log("Fetched user expenses:", getUserExpense);
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
    }else{
      res.json({ message: 'Income not found or deleted' });
    }
    // await income.remove();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
