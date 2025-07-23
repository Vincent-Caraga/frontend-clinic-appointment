import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div>
        <ul className="nav-menu">
          <li>
            <Link className="nav-links" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-links" to="/">
              View Doctor
            </Link>
          </li>
          <li>
            <Link className="nav-links">Login</Link>
          </li>
          <li>
            <Link className="nav-links">Sign up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
