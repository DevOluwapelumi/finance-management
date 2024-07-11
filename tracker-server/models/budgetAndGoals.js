// models/budgetAndGoal.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const expenseSchema = new Schema({
  category: {
    type: String,
    required: true,
  },
  budgetAmount: {
    type: Number,
    required: true,
  },
  savingGoal: {
    type: Number,
    required: true,
  },
  userId: {
    type:String,
    ref: 'User',
    required: true,
  },
});

module.exports = mongoose.model('budget', budgetSchema);
