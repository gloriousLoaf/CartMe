/* USER CONTROLLER */
import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';
import User from '../models/userModel.js';

/**
 * @desc      Auth user & get token
 * @route     POST /api/users/login
 * @access    Public
 */
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  // if user exists & password match
  user && (await user.matchPassword(password))
    ? res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      })
    : res.status(401);
  throw new Error('Invalid email or password');
});

/**
 * @desc      Register new user
 * @route     POST /api/users
 * @access    Public
 */
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  // is user already in db?
  const userExists = await User.findOne({ email });
  // new user obj
  const user = await User.create({
    name,
    email,
    password,
  });
  // create user
  const createUser = () => {
    user
      ? res.status(201).json({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user._id),
        })
      : res.status(400);
    throw new Error('Invalid user data.');
  };

  // if they don't alread exist, create new user
  !userExists ? createUser() : res.status(400);
  throw new Error('Account already exists for this email.');
});

/**
 * @desc      Get user profile
 * @route     GET /api/users/profile
 * @access    Private
 */
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

export { authUser, registerUser, getUserProfile };
