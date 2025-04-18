import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";
import planner from "./Planner"
import Budget from "./budget";


function Home() {
  const navigate = useNavigate();

  const navigateToReports = () => {
    navigate("/reports"); 
  };

  const navigateToStartPlanning = () => {
    navigate("/Planner"); 
  };

  const navigateToTrack = () => {
    navigate("/Budget"); 
  };

  const navigateToCollaborativeBudget = () => {
    navigate("/CollaborativeBudget");
  };

  const navigateToCurrencyConverter = () => {
    navigate("/CurrencyConverter");
  };

  return (
    <div className="home-container">
      <div className="hero">
        <h1 className="title">Travel Budget Planner</h1>
        <p className="subtitle">
          Plan smart, travel far. Manage your travel expenses with ease.
        </p>
      
      </div>

      {/* First Row - 3 Cards */}
      <section className="features">
        <div className="feature-card">
          <img src="https://img.icons8.com/?size=100&id=9733&format=png&color=14089b" alt="Plan" />
          <h3>Plan</h3>
          <p>Set your budget goals before you travel.</p>
          <button onClick={navigateToStartPlanning} className="cta-button">Start Planning</button>
        </div>
        <div className="feature-card">
          <img src="https://img.icons8.com/?size=100&id=7991&format=png&color=14089b" alt="Track" />
          <h3>Track</h3>
          <p>Record and monitor your travel expenses in real-time.</p>
          <button onClick={navigateToTrack} className="cta-button">See Track</button>
        </div>
        <div className="feature-card">
          <img src="https://img.icons8.com/?size=100&id=4GO5zf5NNU2k&format=png&color=14089b" alt="Report" />
          <h3>Report</h3>
          <p>Visualize where your money goes with charts.</p>
          <button onClick={navigateToReports} className="cta-button">See Reports</button>
        </div>
      </section>

      {/* Second Row - 2 Cards */}
      <section className="features">
        <div className="feature-card">
          <img src="https://img.icons8.com/ios-filled/100/currency-exchange.png" alt="Converter" />
          <h3>Currency Converter</h3>
          <p>Convert your expenses in real-time with accurate exchange rates.</p>
          <button onClick={navigateToCurrencyConverter} className="cta-button">Convert Now</button>
        </div>
        <div className="feature-card">
          <img src="https://img.icons8.com/ios-filled/100/group-foreground-selected.png" alt="Collaborate" />
          <h3>Collaborative Budgeting</h3>
          <p>Work together with your travel companions to track shared expenses.</p>
          <button onClick={navigateToCollaborativeBudget} className="cta-button">Collaborate</button>
        </div>
      </section>
    </div>
  );
}

export default Home;
