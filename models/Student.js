const mongoose = require("mongoose");

const studentScheme = mongoose.Schema({
  grNumber: String,
  name: String,
  fatherName: String,
  contactNumber: String,
  address: String,
  className: String,
  dob: String,
  group: String,
  gender: String,
  fatherContactNumber: String,
});

module.exports = mongoose.model("Student", studentScheme);
