// // src/components/Header.js
// import React from "react";
// import { Link } from "react-router-dom";
// import "../styles/header.css";  // Make sure this exists and is styled
// import Logo from "../assets/Logo.png";

// function Header() {
//   return (
//     <header className="header-container">
//       <div className="logo-container">
//         <img src={Logo} alt="Travel Budgeting Logo" />
//       </div>

//       {/* Navigation and Auth Links */}
//       <div className="auth-links">
//         <Link to="/signup" className="auth-btn">Sign Up</Link>
//         <Link to="/login" className="auth-btn">Login</Link>
//         <Link to="/profile" className="auth-btn profile-btn">Profile</Link>
//       </div>
//     </header>
//   );
// }

// export default Header;

// // // src/components/Header.js
// // import React from "react";
// // import { Link } from "react-router-dom";
// // import "../styles/header.css";  // Add this file for styling
// // import Logo from "../assets/Logo.png"

// // function Header() {
// //   return (
// //     <header className="header-container">
// //       <div className="logo-container">
// //       <img src={Logo} alt="Travel Budgetting LOGO"/>
        
// //       </div>

// //       {/* Sign Up and Login Links */}
// //       <div className="auth-links">
// //         <Link to="/signup" className="auth-btn">Sign Up</Link>
// //         <Link to="/login" className="auth-btn">Login</Link>
// //       </div>
// //     </header>
// //   );
// // }

// // export default Header;



// src/components/Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import Logo from "../assets/Logo.png";

function Header() {
  const [showFeatures, setShowFeatures] = useState(false);

  const toggleFeatures = () => {
    setShowFeatures(!showFeatures);
  };

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
        <Link to="/signup" className="auth-btn">Sign Up</Link>
        <Link to="/login" className="auth-btn">Login</Link>
        <Link to="/profile" className="auth-btn profile-btn">Profile</Link>
      </div>
    </header>
  );
}

export default Header;
