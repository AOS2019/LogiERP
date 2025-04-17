// components/AnalyticsDashboard.tsx
import React, { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchKPIData } from '../features/analytics/analyticsSlice';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AnalyticsDashboard: React.FC = () => {
  const dispatch = useAppDispatch();
  const { kpiData, status, error } = useAppSelector((state) => state.analytics);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchKPIData());
    }
  }, [status, dispatch]);

  // Prepare chart data if kpiData is available
  const data = {
    labels: ['Delivery Time', 'Vehicle Usage', 'Revenue'],
    datasets: [
      {
        label: 'KPIs',
        data: kpiData ? [kpiData.deliveryTime, kpiData.vehicleUsage, kpiData.revenue] : [0, 0, 0],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Real-Time KPI Dashboard',
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      {status === 'loading' && <p className="text-gray-500">Loading KPI data...</p>}
      {status === 'failed' && <p className="text-red-500">Error: {error}</p>}
      {status === 'succeeded' && kpiData && (
        <>
          <Bar data={data} options={options} />
          {/* You can add additional drill-down components or buttons here */}
          <div className="mt-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300">
              Drill Down by Client
            </button>
            <button className="ml-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition duration-300">
              Drill Down by Route
            </button>
            <button className="ml-2 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition duration-300">
              Drill Down by Driver
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AnalyticsDashboard;
