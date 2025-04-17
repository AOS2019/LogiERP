// pages/fleet/page.tsx
import React from 'react';
import Navbar from '../../components/Navbar';

const FleetPage = () => (
  <div className="min-h-screen bg-gray-100">
    <Navbar />
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Fleet &amp; Shipment Management</h1>
      <p>Assign vehicles/drivers, integrate GPS, and visualize routes via map APIs.</p>
      {/* TODO: Embed map, fleet tables, assignment UI, etc. */}
    </main>
  </div>
);

export default FleetPage;
