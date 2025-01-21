import React from 'react';

function Widget({ title, value }) {
  return (
    <div className="widget bg-white shadow rounded-lg p-4">
      <h3 className="text-lg font-medium text-gray-600">{title}</h3>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
    </div>
  );
}

export default Widget;

