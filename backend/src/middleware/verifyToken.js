import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) return res.status(401).json({ message: 'No token found' });

    const { id } = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findByPk(id, {
      attributes: ['id','fullname','username','email']
    });
    if (!user) return res.status(401).json({ message: 'Invalid token' });

    req.user = user;
    next();
  } catch (err) {
    console.error('JWT verification failed:', err);
    return res.status(401).json({ message: 'Unauthorized' });
  }
};