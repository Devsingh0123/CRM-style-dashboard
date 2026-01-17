import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';

// Routes imports
import authRoutes from './routes/auth.routes.js';
import leadRoutes from './routes/lead.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({
  origin: ['http://localhost:5173',"https://crm-style-dashboard.vercel.app/"],
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/leads', leadRoutes);

// Health check
app.get('/', (req, res) => {
  res.send("hello CRM");
});



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  
});