// AnalyticsCards.jsx
import React from 'react';

const AnalyticsCards = ({ data }) => {
  const { totalLeads, leadsByStatus, leadsBySource } = data;
  
  const convertedLeads = leadsByStatus.find(item => item._id === 'converted')?.count || 0;
  const newLeads = leadsByStatus.find(item => item._id === 'new')?.count || 0;

  const cards = [
    {
      title: 'Total Leads',
      value: totalLeads,
      color: 'bg-blue-500',
      icon: '👥'
    },
    {
      title: 'Converted Leads',
      value: convertedLeads,
      color: 'bg-green-500',
      icon: '✅'
    },
    {
      title: 'New Leads',
      value: newLeads,
      color: 'bg-purple-500',
      icon: '🆕'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {cards.map((card, index) => (
        <div key={index} className={`${card.color} text-white rounded-xl p-6`}>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm opacity-90">{card.title}</p>
              <p className="text-3xl font-bold mt-2">{card.value}</p>
            </div>
            <span className="text-4xl">{card.icon}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnalyticsCards;