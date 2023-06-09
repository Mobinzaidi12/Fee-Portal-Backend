const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  userName: { type: String, unique: true },
  password: String,
});

module.exports = mongoose.model("User", userSchema);
