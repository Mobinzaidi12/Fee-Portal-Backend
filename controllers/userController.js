const { insertMany } = require("../models/User");
const User = require("../models/User");

const registerUser = async (req, res) => {
  let user = await new User(req.body);
  let result = user.save();
  res.send(user);
};

module.exports = { registerUser };
