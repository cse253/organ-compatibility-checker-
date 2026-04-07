// This file will handle user authentication, registration, and login logic

// const User = require('../models/User');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
const registerUser = async (req, res) => {
  // 1. Check if user exists
  // 2. Hash password
  // 3. Create user
  // 4. Generate token
  res.status(200).json({ message: 'Register User Route Setup' });
};

// @desc    Authenticate user & get token
// @route   POST /api/auth/login
// @access  Public
const loginUser = async (req, res) => {
  // 1. Find user by email
  // 2. Verify password
  // 3. Generate token
  res.status(200).json({ message: 'Login User Route Setup' });
};

module.exports = {
  registerUser,
  loginUser,
};
