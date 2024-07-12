// models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        // required: [true, "FirstName is required"]
    },
    lastName: {
        type: String,
        // required: [true, "LastName is required"]
    },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  balance:{type:Number, default:0},
  monthlySpd:{type:Number, default:0},
  savingGoal:{type:Number, default:0},

});

UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const registerSchema = mongoose.model('User', UserSchema);
module.exports = registerSchema;
