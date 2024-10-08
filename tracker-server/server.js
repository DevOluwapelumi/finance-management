// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/user');
require('dotenv').config(); 
const userExpense = require('./routes/expense');
const userGoal = require('./routes/budegetAndGoals');
const userIncome = require('./routes/income');

const app = express();
const port = process.env.PORT || 5000;


// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/expense', userExpense);
app.use('/api/income', userIncome);
app.use('/api/budgetAndGoals', userGoal);



// Database connection
// mongoose.connect('mongodb://localhost:27017/auth-db', { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

