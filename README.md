CRM Lead Managemennt Dashboard
A full-stack CRM application for managing leads with authentication, analytics, and advanced filtering capabilities.

🚀 Live Demo
Deployed Application URL: https://crm-style-dashboard.vercel.app/

📋 Features
User Authentication - Secure login/signup with JWT

Lead Management - operations for leads

Advanced Filtering - Search, filter by status/source, pagination

Analytics Dashboard -

Responsive Design - Mobile-friendly interface

Real-time Updates - Smooth search with debouncing

🛠️ Tech Stack
Frontend
React 

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
Frontend: Vercel

Backend: Render

📁 Project Structure
```
crm-project/
backend/
   ├── config/
   │   └── db.js
   ├── controllers/
   │   ├── auth.controller.js
   │   └── lead.controller.js
   ├── controllers/
   │   └── auth.middleware.js
   │
   ├── models/
   │   ├── Lead.model.js
   │   └── User.model.js
   ├── routes/
   │   ├── auth.routes.js
   │   └── lead.routes.js
   ├── scripts/
   │   └── seedLeads.js
   ├── .env
   └── index.js



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

```
⚡ Quick Start
Prerequisites
Node.js 

npm 

MongoDB Atlas account

Installation
1. Clone the Repository
git clone https://github.com/Devsingh0123/CRM-style-dashboard.git
2. Backend Setup
cd backend
npm install
3. Frontend Setup

cd ../frontend
npm install
🔧 Environment Variables
Backend (.env)
PORT=5000
MONGO_URI=
JWT_SECRET=


Frontend (.env)
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
cd backend
npm run dev
Server runs at: http://localhost:5000

Start Frontend:
cd frontend
npm run dev
Frontend runs at: http://localhost:5173


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
GET	/api/leads/analytics	Get analytics data


🔐 Authentication Flow
User registers/signs up

Backend validates credentials and creates user

JWT token generated and stored in HTTP-only cookie

Protected routes check for valid token

Token automatically sent with each request via cookies

📊 Features Details
Lead Management
View all leads in paginated table

Advanced search (name, email, status)

Filter by status (new, contacted, qualified, converted, lost)

Responsive design works on mobile/tablet/desktop

Analytics Dashboard
Total leads count








Performance Optimizations
Debounced search (500ms delay)

Efficient pagination

Server-side filtering

Optimized database queries

Cached API responses

🚢 Deployment
Backend Deployment (Render)
Push backend code to GitHub

Connect repository to Render

Add environment variables

Deploy

Frontend Deployment (Vercel)
Push frontend code to GitHub


# Backend
npm run dev      # Start development server
npm run seed     # Seed database with dummy data
npm start        # Start production server

# Frontend
npm run dev      # Start development server
npm run build    # Create production build
npm run preview  # Preview production build

 Email-iamdevsingh123@gmail.com

Project Link: (https://crm-style-dashboard.vercel.app/)



