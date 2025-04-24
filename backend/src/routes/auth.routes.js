import express from 'express'
import { AuthController } from '../controllers/auth.controller.js';
import { verifyToken } from '../middleware/verifyToken.js'

const router = express.Router();

router.post('/signup', AuthController.signup);
router.post('/login', AuthController.login);
router.post('/logout', AuthController.logout);

router.get('/me', verifyToken, AuthController.me);

export default router;