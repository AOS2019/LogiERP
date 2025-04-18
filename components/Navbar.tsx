// components/Navbar.tsx
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-blue-600">LogiERP
            </Link>
          </div>
          <div className="flex space-x-4 items-center">
            <Link href="/sales/page" className="text-gray-600 hover:text-blue-600">Sales
            </Link>
            <Link href="/fleet/page" className="text-gray-600 hover:text-blue-600">Fleet
            </Link>
            <Link href="/billing/page" className="text-gray-600 hover:text-blue-600">Billing
            </Link>
            <Link href="/warehouse/page" className="text-gray-600 hover:text-blue-600">Warehouse
            </Link>
            <Link href="/hr/page" className="text-gray-600 hover:text-blue-600">HR
            </Link>
            <Link href="/analytics/page" className="text-gray-600 hover:text-blue-600">Analytics
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
