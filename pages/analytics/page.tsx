// pages/analytics/page.tsx
import React from 'react';
import Navbar from '../../components/Navbar';
import AnalyticsDashboard from '../../components/AnalyticsDashboard';

const AnalyticsPage = () => (
  <div className="min-h-screen bg-gray-100">
    <Navbar />
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-8">Analytics &amp; Reporting</h1>
      <AnalyticsDashboard />
    </main>
  </div>
);

export default AnalyticsPage;
