// pages/billing/page.tsx
import React from 'react';
import Navbar from '../../components/Navbar';

const BillingPage = () => (
  <div className="min-h-screen bg-gray-100">
    <Navbar />
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Billing, Invoicing &amp; Accounting</h1>
      <p>Auto-generate invoices, integrate bank feeds, gateways, and track expenses.</p>
      {/* TODO: Invoice tables, payment integration UIs, expense trackers, etc. */}
    </main>
  </div>
);

export default BillingPage;
