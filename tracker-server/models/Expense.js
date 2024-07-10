// models/Expense.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const expenseSchema = new Schema({
  category: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

module.exports = mongoose.model('Expense', expenseSchema);
