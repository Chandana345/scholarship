// components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Scholarship Tracker
        </Link>
        <ul className="navbar-menu">
          <li>
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/login" className="navbar-link">
              Login
            </Link>
          </li>
          <li>
            <Link to="/signup" className="navbar-link">
              Sign Up
            </Link>
          </li>
          <li>
            <a href="/contactUs" className="navbar-link">
              Contact Us
            </a>
          </li>
          <li>
            <a href="/Feedback" className="navbar-link">
              Feedback
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
