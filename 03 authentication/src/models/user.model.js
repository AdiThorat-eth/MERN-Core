const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  // unique true avoid multiple users with same email id
  email: {
    type: String,
    unique: true,
  },
  password: String,
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
