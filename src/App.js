import React, { useState } from "react";
import Admin from "./components/Admin";
import Employee from "./components/Employee";
import Navbar from "./components/Navbar";

const App = () => {
  const [role, setRole] = useState("admin"); // Default to "admin"

  return (
    <div>
      <Navbar setRole={setRole} />
      <main style={{ padding: "20px" }}>
        {role === "admin" ? <Admin /> : <Employee />}
      </main>
    </div>
  );
};

export default App;
