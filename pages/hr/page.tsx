// pages/hr/page.tsx
import React from 'react';
import Navbar from '../../components/Navbar';

const HRPage = () => (
  <div className="min-h-screen bg-gray-100">
    <Navbar />
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">HR &amp; Payroll</h1>
      <p>Manage roles, attendance, time-off, and automate payroll with country-specific rules.</p>
      {/* TODO: Employee directory, time-off forms, payroll run UI, etc. */}
    </main>
  </div>
);

export default HRPage;
