import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <h2>Welcome to the React App</h2>
        <p>This is a simple React project with a modular component structure.</p>
      </main>
      <Footer />
    </div>
  );
};

export default App;
