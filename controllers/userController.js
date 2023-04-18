const { insertMany } = require("../models/User");
const User = require("../models/User");

const registerUser = async (req, res) => {
  let user = await new User(req.body);
  let result = user.save();
  res.send(user);
  console.log("mobin");
};

module.exports = { registerUser };
