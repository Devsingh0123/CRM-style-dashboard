import jwt from 'jsonwebtoken';

const authMiddleware = async (req, res, next) => {
  try {
    // Token को cookie से लें
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Not authorized, Login with valied credentials'
      });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // req में user ID add करें
    req.userId = decoded.userId;
    
    next();
  } catch (error) {
    console.error('Auth middleware error:', error);
    
    res.status(500).json({
      success: false,
      message:{'Auth middleware error:': error}
    });
  }
};

export default authMiddleware;