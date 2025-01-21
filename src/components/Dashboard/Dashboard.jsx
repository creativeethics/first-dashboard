import React from 'react';
import Widget from './Widget';
import AnalyticsCard from './AnalyticsCard';

function Dashboard() {
  return (
    <div className="dashboard px-6 py-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Widget title="Sales Overview" value="$45,000" />
        <Widget title="New Customers" value="150" />
        <Widget title="Deals Closed" value="24" />
        <Widget title="Customer Satisfaction" value="98%" />
      </div>
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AnalyticsCard title="Sales Overview" />
        <AnalyticsCard title="Customer Satisfaction" />
      </div>
    </div>
  );
}

export default Dashboard;

