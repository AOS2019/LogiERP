// components/DashboardSection.tsx
import React from 'react';

interface DashboardSectionProps {
  title: string;
  description: string;
}

const DashboardSection: React.FC<DashboardSectionProps> = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
      <h2 className="text-2xl font-semibold mb-2 text-blue-700">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300">
        View Details
      </button>
    </div>
  );
};

export default DashboardSection;
