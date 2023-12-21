const jwt = require('jsonwebtoken');

const jwtMiddleware = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Authorization token is missing',
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({
      success: false,
      message: 'Invalid token',
    });
  }
};

module.exports = jwtMiddleware;
