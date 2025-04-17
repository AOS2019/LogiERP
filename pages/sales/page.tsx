// pages/sales/page.tsx
import React from 'react';
import Navbar from '../../components/Navbar';

const SalesPage = () => (
  <div className="min-h-screen bg-gray-100">
    <Navbar />
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Sales &amp; Customer Management</h1>
      <p>Track new client inquiries, convert to active accounts, and manage ticket-based support.</p>
      {/* TODO: Add sales dashboards, tables, forms, etc. */}
    </main>
  </div>
);

export default SalesPage;
