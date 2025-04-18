import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../styles/header.css";
import Logo from "../assets/Logo.png";
import { useAuth } from "../firebase/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";


function Header() {

  const [showFeatures, setShowFeatures] = useState(false);

  const toggleFeatures = () => {
    setShowFeatures(!showFeatures);
  };

  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  const getInitials = (email) => {
    const name = email?.split("@")[0] || "U";
    return name.substring(0, 2).toUpperCase();
  };

  const avatarURL = user
    ? `https://api.dicebear.com/7.x/initials/svg?seed=${getInitials(user.email)}`
    : "";

  return (
    <header className="header-container">
      <div className="logo-container">
        <img src={Logo} alt="Travel Budgeting Logo" />
      </div>


      {/* Features Dropdown */}
      <div className="features-dropdown">
        <button onClick={toggleFeatures} className="features-btn">
          Features ▼
        </button>
        {showFeatures && (
          <div className="dropdown-menu">
            <Link to="/planner" onClick={() => setShowFeatures(false)}>Plan</Link>
            <Link to="/budget" onClick={() => setShowFeatures(false)}>Track</Link>
            <Link to="/reports" onClick={() => setShowFeatures(false)}>Report</Link>
            <Link to="/converter" onClick={() => setShowFeatures(false)}>Converter</Link>
            <Link to="/collaborative-budget" onClick={() => setShowFeatures(false)}>Collaborative Budgeting</Link>
          </div>
        )}
      </div>

      {/* Navigation and Auth Links */}
<div className="auth-links">
        {!user ? (
          <>
            <Link to="/signup" className="auth-btn">Sign Up</Link>
            <Link to="/login" className="auth-btn">Login</Link>
          </>
        ) : (
          <>
            <img
              src={avatarURL}
              alt="User Avatar"
              className="profile-avatar pt"
              onClick={() => navigate("/profile")}
              style={{ cursor: "pointer", width: "40px", height: "40px", borderRadius: "50%" }}
            />
            <button onClick={handleLogout} className="auth-btn pt">Logout</button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
