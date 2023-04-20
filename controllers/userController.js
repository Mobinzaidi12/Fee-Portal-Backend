const { insertMany } = require("../models/User");
const User = require("../models/User");

const registerUser = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const userExist = await User.findOne({ userName });
    if (userExist) {
      return res
        .status(400)
        .send({ status: false, message: "user Already exist" });
    }
    let user = await User.create({ userName, password });
    user = user.toObject();
    delete user.password;
    res.send(user);
  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};

module.exports = { registerUser };
