// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";  // Add this file for styling

function Header() {
  return (
    <header className="header-container">
      <div className="logo-container">
        <span className="logo-text">Travel Budget Planner</span>
      </div>

      {/* Sign Up and Login Links */}
      <div className="auth-links">
        <Link to="/signup" className="auth-btn">Sign Up</Link>
        <Link to="/login" className="auth-btn">Login</Link>
      </div>
    </header>
  );
}

export default Header;