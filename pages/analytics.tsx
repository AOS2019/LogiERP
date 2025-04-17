// pages/analytics.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import AnalyticsDashboard from '../components/AnalyticsDashboard';

const AnalyticsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="p-6">
        <h1 className="text-3xl font-bold text-center mb-8">Analytics & Reporting</h1>
        <AnalyticsDashboard />
      </main>
    </div>
  );
};

export default AnalyticsPage;
