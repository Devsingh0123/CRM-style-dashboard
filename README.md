backend/
├── package.json
├── .env
├── index.js
├── config/
│   └── db.js
├── models/
│   ├── User.model.js
│   └── Lead.model.js
├── routes/
│   ├── auth.routes.js
│   └── lead.routes.js
├── controllers/
│   ├── auth.controller.js
│   ├── lead.controller.js
│   └── seed.controller.js
├── middleware/
│   └── auth.middleware.js
└── seedLeads.js
    




    src/
├── components/
│   ├── common/
│   │   ├── Header.jsx
│   │   ├── Sidebar.jsx
│   │   └── LoadingSpinner.jsx
│   ├── leads/
│   │   ├── LeadsTable.jsx
│   │   ├── LeadCard.jsx
│   │   ├── LeadForm.jsx
│   │   └── AnalyticsCards.jsx
│   └── auth/
│       ├── LoginForm.jsx
│       └── RegisterForm.jsx
├── pages/
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Dashboard.jsx
│   ├── Leads.jsx
│   └── Profile.jsx
├── redux/
│   ├── store.js
│   ├── slices/
│   │   ├── authSlice.js
│   │   └── leadSlice.js
│   └── api/
│       └── api.js
├── utils/
│   ├── constants.js
│   └── helpers.js
├── hooks/
│   └── useAuth.js
└── App.jsx





CRM/frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── Dashboard.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── .env
├── package.json
└── vite.config.js