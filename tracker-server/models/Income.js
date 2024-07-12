// models/Expense.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const incomeSchema = new Schema({
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
    type:String,
    ref: 'User',
    required: true,
  },
});

module.exports = mongoose.model('Income', incomeSchema);
