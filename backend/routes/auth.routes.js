import express from 'express';
import { signup, login, logout, getCurrentUser } from '../controllers/auth.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';


const router = express.Router();

// Public routes
router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);

// Protected route (auth required)
router.get('/me', authMiddleware, getCurrentUser);

export default router;