const mongoose = require("mongoose");

const teacherSchema = mongoose.Schema({
  name: String,
  contactNumber: String,
  addrerss: String,
  doj: String,
  subject: String,
});

module.exports = mongoose.model("Teacher", teacherSchema);
