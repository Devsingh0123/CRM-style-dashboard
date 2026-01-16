// Dashboard.jsx का structure:
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import AnalyticsCards from './AnalyticsCards';
import LeadsTable from './LeadsTable';
import axios from 'axios';
import toast from 'react-hot-toast';

const Dashboard = () => {
  const navigate = useNavigate();
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_BASE = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetchAnalytics();
    checkAuth();
  }, []);

  const checkAuth = async () => {
  try {
     const response= await axios.get(`${API_BASE}/api/auth/me`, {
      withCredentials: true,
    });
    console.log(response);
    
  } catch (error) {
    navigate("/login");
     toast.error(error?.response?.data.message);
  }
};


  const fetchAnalytics = async () => {
    try {
      const response = await axios.get(`${API_BASE}/api/leads/analytics`, {
        withCredentials: true
      });
      setAnalytics(response.data.data);
    } catch (error) {
      toast.error('Failed to fetch analytics');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <Navbar />
      <div className="p-4 md:p-6 pt-20">
        {/* Analytics Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Dashboard</h2>
          <AnalyticsCards data={analytics} />
        </div>
        
        {/* Leads Section */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-4 border-b">
            <h3 className="text-lg font-semibold">Leads Management</h3>
          </div>
          <LeadsTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;