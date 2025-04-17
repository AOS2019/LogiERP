// pages/warehouse/page.tsx
import React from 'react';
import Navbar from '../../components/Navbar';

const WarehousePage = () => (
  <div className="min-h-screen bg-gray-100">
    <Navbar />
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Warehouse &amp; Inventory</h1>
      <p>Track stock levels, shipments in/out, and scan goods to update inventory.</p>
      {/* TODO: Inventory tables, barcode scanner integration, stock charts, etc. */}
    </main>
  </div>
);

export default WarehousePage;
