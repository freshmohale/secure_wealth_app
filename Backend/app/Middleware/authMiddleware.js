const { verifyJWT } = require('../Utils/authUtils');

const authenticateJWT = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Authentication token missing' });
  }

  try {
    const decodedToken = verifyJWT(token);
    req.user = decodedToken;
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Invalid token' });
  }
};

module.exports = {
  authenticateJWT,
};
