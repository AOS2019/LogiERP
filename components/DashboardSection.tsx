// components/DashboardSection.tsx
import React from 'react';
import Link from 'next/link';

interface DashboardSectionProps {
  title: string;
  description: string;
  href: string;
}

const DashboardSection: React.FC<DashboardSectionProps> = ({ title, description, href }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300 flex flex-col">
      <h2 className="text-2xl font-semibold mb-2 text-blue-700">{title}</h2>
      <p className="text-gray-600 flex-grow">{description}</p>
      <Link href={href} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300 text-center">
          View Details
      </Link>
    </div>
  );
};

export default DashboardSection;
