import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from '../models/User.js'
import { cookieOptions, generateTokenAndSetCookie } from '../lib/utils/generateToken.js'

export class AuthController {
  static async signup (req, res) {
    try {
      const { fullname, username, email, password } = req.body;

      if (!fullname || !username || !email || !password) {
        return res.status(400).json({ message: 'Please provide all fields'})
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({ message: 'Invalid email format' });
      }

      if (fullname.length > 40) {
        return res.status(400).json({ message: 'Full name must be less than 40 characters' });
      }

      if (username.length > 10) {
        return res.status(400).json({ message: 'Username must be less than 10 characters' });
      }

      if (password.length < 6) {
        return res.status(400).json({ message: 'Password must be at least 6 characters long' });
      }

      const [existingUser, existingEmail] = await Promise.all([
        User.findOne({ where: { username } }),
        User.findOne({ where: { email } })
        ]);
        
      if (existingUser) {
        return res.status(400).json({ message: 'Username is already taken' });
      }
      if (existingEmail) {
        return res.status(400).json({ message: 'Email is already taken' });
      }

      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(password, salt)

      const newUser = await User.create({
        fullname,
        username,
        email,
        password: hashed
      });

      generateTokenAndSetCookie(newUser.id, res);

      return res.status(201).json({
        id: newUser.id,
        fullname: newUser.fullname,
        username: newUser.username,
        email: newUser.email
      });
    } catch (error) {
      console.log('Error in signup:', error)
      return res.status(500).json({ message: 'Internal server error'})
    }
  }

  static async login(req, res) {
    try {
      const { username, password } = req.body;
      if (!username || !password) {
        return res.status(400).json({ message: 'Please provide all fields' });
      }

      const user = await User.findOne({ where: { username } });
      if (!user) {
        return res.status(400).json({ message: 'Invalid username or password' });
      }

      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return res.status(400).json({ message: 'Invalid username or password' });
      }

      generateTokenAndSetCookie(user.id, res);

      return res.json({
        id:        user.id,
        fullname:  user.fullname,
        username:  user.username,
        email:     user.email
      });
    } catch (error) {
      console.error('Error in login:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  static async logout(req, res) {
    try {
      res.clearCookie('jwt', cookieOptions);
      return res.json({ message: 'Logged out successfully' });
    } catch (error) {
      console.error('Error in logout:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  static async me(req, res) {
    // Aquí, verifyToken ya puso `req.user` --++
    return res.json(req.user);
  }
}