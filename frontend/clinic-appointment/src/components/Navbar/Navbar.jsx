import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar-container">
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
      <ul className={`nav-menu ${isOpen ? "open" : ""}`}>
        <li>
          <Link className="nav-links" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-links" to="/ViewDoctor">
            View Doctor
          </Link>
        </li>
        <li>
          <Link className="nav-links" to="/login">
            Login
          </Link>
        </li>
        <li>
          <Link className="nav-links" to="/signup">
            Sign up
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
