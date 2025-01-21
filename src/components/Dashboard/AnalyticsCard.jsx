import React from 'react';

function AnalyticsCard({ title }) {
  return (
    <div className="analytics-card bg-white shadow rounded-lg p-4">
      <h3 className="text-lg font-medium text-gray-600 mb-4">{title}</h3>
      <div className="chart-placeholder h-32 bg-gray-200 rounded"></div>
    </div>
  );
}

export default AnalyticsCard;

