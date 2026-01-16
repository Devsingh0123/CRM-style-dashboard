import express from 'express';
import { getAllLeads, getAnalytics } from '../controllers/lead.controller.js';
// import authMiddleware from '../middleware/auth.middleware.js';

const router = express.Router();

// Protected routes (auth required)
router.get('/', getAllLeads);
router.get('/analytics', getAnalytics);


export default router;