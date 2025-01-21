import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  const menuItems = [
    { name: 'Dashboard', path: '/' },
    { name: 'HRM', path: '/hrm' },
    { name: 'CRM', path: '/crm' },
  ];

  return (
    <div className="sidebar bg-gray-800 text-white w-64 h-screen p-4">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <ul>
        {menuItems.map((item) => (
          <li key={item.name} className="mb-4">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? 'text-blue-500' : 'text-white'
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;

