const asyncHandler = require("express-async-handler");
const { registerUser, authenticateUser } = require("../services/userService");

const register = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  const user = await registerUser(username, password);

  res.status(201).json(user);
});

const login = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  const user = await authenticateUser(username, password);

  res.json(user);
});

module.exports = {
  register,
  login,
};
