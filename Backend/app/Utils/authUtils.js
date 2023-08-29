const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const saltRounds = 10;
const secretKey = 'your-secret-key';

const generateHash = async (password) => {
  const salt = await bcrypt.genSalt(saltRounds);
  return bcrypt.hash(password, salt);
};

const compareHash = async (password, hash) => {
  return bcrypt.compare(password, hash);
};

const generateJWT = (user) => {
  const payload = { id: user.id, email: user.email };
  return jwt.sign(payload, secretKey, { expiresIn: '1h' });
};

const verifyJWT = (token) => {
  return jwt.verify(token, secretKey);
};

module.exports = {
  generateHash,
  compareHash,
  generateJWT,
  verifyJWT,
};
