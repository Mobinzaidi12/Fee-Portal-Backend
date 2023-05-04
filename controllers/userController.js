const { insertMany } = require("../models/User");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const jwtKey = "portal";

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
    jwt.sign({ user }, jwtKey, { expiresIn: "2h" }, (error, token) => {
      if (error) {
        res.json({ status: false, message: "user not found" });
      } else {
        res.send({ user, auth: token });
      }
    });
  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { userName, password } = req.body;

    if (!userName || !password) {
      return res.json({
        status: false,
        message: "please provide username or password",
      });
    }

    let user = await User.findOne({ userName, password }).select("-password");

    if (!user) {
      return res.json({ status: false, message: "user not found" });
    }

    jwt.sign({ user }, jwtKey, { expiresIn: "2hr" }, (error, token) => {
      if (error) {
        return res.json({ status: false, message: "user not found" });
      }
      return res.json({ status: true, user, auth: token });
    });
  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};

module.exports = { registerUser, loginUser };
