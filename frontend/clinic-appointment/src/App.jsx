import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { assets } from "./assets/assets";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import ViewDoctor from "./pages/ViewDoctor/ViewDoctor";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ViewDoctor" element={<ViewDoctor />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
