import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const verifyToken = (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) return res.status(401).json({ message: 'No token found' });
  try {
    const { userId } = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: userId  };
    next();
  } catch {
    return res.status(401).json({ message: 'Invalid token' });
  }
};