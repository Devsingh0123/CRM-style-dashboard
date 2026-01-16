nt Dashboard
A full-stack CRM application for managing leads with authentication, analytics, and advanced filtering capabilities.

🚀 Live Demo
Deployed Application URL

📋 Features
User Authentication - Secure login/signup with JWT

Lead Management - CRUD operations for leads

Advanced Filtering - Search, filter by status/source, pagination

Analytics Dashboard - Visual metrics and insights

Responsive Design - Mobile-friendly interface

Real-time Updates - Smooth search with debouncing

🛠️ Tech Stack
Frontend
React 18

React Router DOM

Axios for API calls

Tailwind CSS for styling

React Hot Toast for notifications

React Icons

Backend
Node.js

Express.js

MongoDB with Mongoose

JWT for authentication

Bcrypt for password hashing

Faker.js for seeding data

Database
MongoDB Atlas (Cloud)

Deployment
Frontend: Vercel/Netlify

Backend: Render/Railway

📁 Project Structure
text
crm-project/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   └── lead.controller.js
│   ├── controllers/
│   │   └── auth.middleware.js
│   │
│   ├── models/
│   │   ├── Lead.model.js
│   │   └── User.model.js
│   ├── routes/
│   │   ├── auth.routes.js
│   │   └── lead.routes.js
│   ├── scripts/
│   │   └── seedLeads.js
│   ├── .env
│   └── index.js



frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── Login.jsx
    │   │   ├── Register.jsx
    │   │   ├── Dashboard.jsx
    │   │   ├── LeadsTable.jsx
    │   │   ├── AnalyticsCards.jsx
    │   │   ├── Navbar.jsx
    │   │   └── Pagination.jsx
    │   ├── App.jsx
    │   └── main.jsx
    ├── .env
    └── package.json


⚡ Quick Start
Prerequisites
Node.js (v16 or higher)

npm or yarn

MongoDB Atlas account

Installation
1. Clone the Repository
bash
git clone https://github.com/Devsingh0123/CRM-style-dashboard.git
cd crm-project
2. Backend Setup
bash
cd backend
npm install
3. Frontend Setup
bash
cd ../frontend
npm install
🔧 Environment Variables
Backend (.env)
env
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/crm-db
JWT_SECRET=your_super_strong_jwt_secret_key
Frontend (.env)
env
VITE_API_BASE_URL=http://localhost:5000
🗄️ Database Seeding
Run the seeding script to populate the database with 300+ dummy leads:

bash
cd backend
npm run seed
This will:

Create 300+ sample leads

Generate random data using Faker.js

Clear existing leads collection

🚀 Running the Application
Development Mode
Start Backend Server:
bash
cd backend
npm run dev
Server runs at: http://localhost:5000

Start Frontend:
bash
cd frontend
npm run dev
Frontend runs at: http://localhost:5173

Production Build
bash
cd frontend
npm run build
npm preview
📡 API Endpoints
Authentication
Method	Endpoint	Description
POST	/api/auth/signup	User registration
POST	/api/auth/login	User login
POST	/api/auth/logout	User logout
GET	/api/auth/me	Get current user
Leads
Method	Endpoint	Description
GET	/api/leads	Get all leads (with pagination, search, filters)
GET	/api/leads/:id	Get single lead details
GET	/api/leads/analytics	Get analytics data
Query Parameters for /api/leads
javascript
// Example query
GET /api/leads?page=1&limit=10&search=john&status=new&source=website
🔐 Authentication Flow
User registers/signs up

Backend validates credentials and creates user

JWT token generated and stored in HTTP-only cookie

Frontend stores user data in localStorage

Protected routes check for valid token

Token automatically sent with each request via cookies

📊 Features Details
Lead Management
View all leads in paginated table

Advanced search (name, email, company)

Filter by status (new, contacted, qualified, converted, lost)

Filter by source (website, referral, social, email, other)

Responsive design works on mobile/tablet/desktop

Analytics Dashboard
Total leads count

Converted leads percentage

Leads by status distribution

Leads by source breakdown

Monthly trends (last 6 months)

Performance Optimizations
Debounced search (500ms delay)

Efficient pagination

Server-side filtering

Optimized database queries

Cached API responses

🚢 Deployment
Backend Deployment (Render/Railway)
Push backend code to GitHub

Connect repository to Render/Railway

Add environment variables

Deploy

Frontend Deployment (Vercel/Netlify)
Push frontend code to GitHub

Connect repository to Vercel/Netlify

Set build command: npm run build

Set output directory: dist

Add environment variable: VITE_API_BASE_URL

Deploy

📝 Demo Credentials
text
Email: demo@example.com
Password: demo123
🐛 Troubleshooting
Common Issues
MongoDB Connection Failed

Check MONGO_URI in .env

Verify network access in MongoDB Atlas

Ensure IP is whitelisted

CORS Errors

Verify frontend URL in backend CORS configuration

Check withCredentials setting in axios

Authentication Issues

Clear browser cookies

Check JWT_SECRET in .env

Verify token expiration

Development Commands
bash
# Backend
npm run dev      # Start development server
npm run seed     # Seed database with dummy data
npm start        # Start production server

# Frontend
npm run dev      # Start development server
npm run build    # Create production build
npm run preview  # Preview production build
🤝 Contributing
Fork the repository

Create a feature branch

Commit your changes

Push to the branch

Open a Pull Request

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

🙏 Acknowledgments
Faker.js for dummy data generation

Tailwind CSS for styling

React Hot Toast for notifications

React Icons for icons

📧 Contact
Your Name - @yourtwitter - email@example.com

Project Link: https://github.com/yourusername/crm-project

Made with ❤️ for the fresher hiring assignment

