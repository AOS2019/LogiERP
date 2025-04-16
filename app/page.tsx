// pages/index.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import DashboardSection from '../components/DashboardSection';

const Dashboard = () => {
  // Define each ERP module with its title and description
  const modules = [
    {
      title: "Sales & Customer Management",
      description:
        "Track new client inquiries, convert to active accounts, and manage a ticket-based support system.",
    },
    {
      title: "Fleet & Shipment Management",
      description:
        "Assign vehicles and drivers to jobs, integrate GPS tracking (via Google Maps or MapMyIndia API).",
    },
    {
      title: "Billing, Invoicing & Accounting",
      description:
        "Auto-generate invoices based on completed shipments, integrate bank feeds, payment gateways, and capture expenses like tolls, fuel, etc.",
    },
    {
      title: "Warehouse & Inventory",
      description:
        "Track stock levels and shipments; scan goods to update inventory in real time.",
    },
    {
      title: "HR & Payroll",
      description:
        "Manage roles, attendance, time-off, and automate salary, benefits, and country‑specific tax calculations.",
    },
    {
      title: "Analytics & Reporting",
      description:
        "Monitor real‑time KPIs such as delivery times, vehicle usage, revenue; drill down by client, route, driver, etc.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="p-6">
        <h1 className="text-3xl font-bold text-center mb-8">LogiERP Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modules.map((module, idx) => (
            <DashboardSection
              key={idx}
              title={module.title}
              description={module.description}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
