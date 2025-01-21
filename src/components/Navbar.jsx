import React from "react";

const Navbar = ({ setRole }) => {
  return (
    <nav style={{ backgroundColor: "#007bff", padding: "10px", color: "white" }}>
      <h1 style={{ margin: 0 }}>Company Dashboard</h1>
      <div style={{ marginTop: "10px" }}>
        <button
          style={{ marginRight: "10px" }}
          onClick={() => setRole("admin")}
        >
          Admin View
        </button>
        <button onClick={() => setRole("employee")}>Employee View</button>
      </div>
    </nav>
  );
};

export default Navbar;

