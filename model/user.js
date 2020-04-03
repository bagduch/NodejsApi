const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 25
  },
  email: {
    type: String,
    required: true,
    min: 10,
    max: 25
  },
  password: {
    type: String,
    required: true,
    min: 10,
    max: 25
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("User",userSchema);
