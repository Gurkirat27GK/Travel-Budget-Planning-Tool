import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";

function Home() {
  const navigate = useNavigate();

  const navigateToReports = () => {
    navigate("/report"); 
  };

  return (
    <div className="home-container">
      <div className="hero">
        <h1 className="title">Travel Budget Planner</h1>
        <p className="subtitle">
          Plan smart, travel far. Manage your travel expenses with ease.
        </p>

        <a href="/budget" className="cta-button">Start Planning</a>
      </div>

      <section className="features">
        <div className="feature-card">
          <img src="https://img.icons8.com/ios-filled/100/compass.png" alt="Plan" />
          <h3>Plan</h3>
          <p>Set your budget goals before you travel.</p>
        </div>
        <div className="feature-card">
          <img src="https://img.icons8.com/ios-filled/100/wallet.png" alt="Track" />
          <h3>Track</h3>
          <p>Record and monitor your travel expenses in real-time.</p>
        </div>
        <div className="feature-card">
          <img src="https://img.icons8.com/ios-filled/100/pie-chart.png" alt="Report" />
          <h3>Report</h3>
          <p>Visualize where your money goes with charts.</p>

          {/* Button to navigate to Report */}
          <button onClick={navigateToReports} className="cta-button">See Reports</button>
        </div>
      </section>
    </div>
  );
}

export default Home;