import React from 'react';

function Navbar() {
  return (
    <div className="navbar bg-white shadow px-4 py-2 flex justify-between items-center">
      <h2 className="text-xl font-bold">Welcome Back!</h2>
      <div className="profile">
        <img
          src="https://via.placeholder.com/40"
          alt="User"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </div>
  );
}

export default Navbar;

