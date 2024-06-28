// routes/user.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { register } = require('../controllers/user');

const router = express.Router();

// Register
router.post('/register', register)

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log(`Login request received: Email: ${email}, Password: ${password}`);
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }
    const payload = { userId: user.id };
    const token = jwt.sign(payload, 'secret', { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
