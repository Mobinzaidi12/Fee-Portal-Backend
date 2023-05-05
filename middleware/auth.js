const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authMiddleware = async (req, res, next) => {
  // Check if the request has an authorization header
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  // Verify the JWT token in the authorization header
  const token = authorization.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.user._id;

    // Retrieve the user from the database
    const user = await User.findById(userId);
    if (!user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // Attach the user object to the request for future use
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized" });
  }
};

module.exports = authMiddleware;
