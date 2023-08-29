const User = require('../Models/userModel');
const { generateHash, compareHash, generateJWT } = require('../Utils/authUtils');


// Auth controller
const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password, confirmPassword } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }

    const hashedPassword = await generateHash(password);
    const user = await User.create({ firstName, lastName, email, password: hashedPassword });
    const token = generateJWT(user);

    return res.status(201).json({ user, token });
  } catch (err) {
    return res.status(500).json({ message: 'Server error register' });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordValid = await compareHash(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    const token = generateJWT(user);

    return res.status(200).json({ user, token });
  } catch (err) {
    return res.status(500).json({ message: 'Server error' });
  }
};

// User controller (Example: get all users)
const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    if (users.length === 0) {
      return res.status(404).json({ message: 'No users found' });
    }
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json({ message: 'Server error' });
  }
};

const getOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({ message: 'Server error' });
  }
};







module.exports = {
  registerUser,
  loginUser,
  getAllUsers,
  getOneUser,
};
