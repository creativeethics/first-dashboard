import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <main style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<h2>Welcome to My CRM</h2>} />
            <Route path="/dashboard" element={<h2>Dashboard</h2>} />
            <Route path="/about" element={<h2>About Us</h2>} />
            <Route path="/contact" element={<h2>Contact Us</h2>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
