const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

const registerUser = async (username, password) => {
  const userExists = await User.findOne({ username });

  if (userExists) {
    throw new Error("User already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    username,
    password: hashedPassword,
  });

  if (user) {
    return {
      _id: user._id,
      username: user.username,
    };
  } else {
    throw new Error("Invalid user data");
  }
};

const authenticateUser = async (username, password) => {
  const user = await User.findOne({ username });

  if (user && (await bcrypt.compare(password, user.password))) {
    return {
      _id: user._id,
      username: user.username,
    };
  } else {
    throw new Error("Invalid username or password");
  }
};

module.exports = {
  registerUser,
  authenticateUser,
};
