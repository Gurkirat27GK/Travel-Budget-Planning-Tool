import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";
import MapSection from "../components/MapSection";
import Goals from "./goals";

function Home() {
  const navigate = useNavigate();

  const navigateToReports = () => navigate("/reports");
  const navigateToStartPlanning = () => navigate("/Planner");
  const navigateToTrack = () => navigate("/Budget");
  const navigateToBudget = () => navigate("/Goals");
  const navigateToCurrencyConverter = () => navigate("/CurrencyConverter");

  return (
    <div className="home-container">
      {/* HERO SECTION WITH VIDEO BACKGROUND */}
      <div className="hero">
        <h1 className="title">Travel Budget Planner</h1>
        <p className="subtitle">
          Plan smart, travel far. Manage your travel expenses with ease.
        </p>
        
      </div>

      {/* FEATURE CARDS SECTION 1 */}
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

      {/* FEATURE CARDS SECTION 2 */}
      <section className="features">
        <div className="feature-card">
          <img src="https://img.icons8.com/?size=100&id=7748&format=png&color=14089b" alt="Converter" />
          <h3>Currency Converter</h3>
          <p>Convert your expenses in real-time with accurate exchange rates.</p>
          <button onClick={navigateToCurrencyConverter} className="cta-button">Convert Now</button>
        </div>

        <div className="feature-card">
          <img src="https://img.icons8.com/ios-filled/100/group-foreground-selected.png" alt="Collaborate" />
          <h3>Budget Goals</h3>
          <p>Set Limits, Stay on Track – Budget Smarter for Every Journey.</p>
          <button onClick={navigateToBudget} className="cta-button">Goals</button>
        </div>
      </section>

      {/* MAP SECTION */}
      <MapSection />
    {/* REVIEWS SECTION */}
<section className="reviews">
  <h2 className="section-title">What Travelers Say About TripWise</h2>
  <div className="review-cards">
    <div className="review-card">
      <p className="review-text">
        “TripWise completely transformed the way we planned our travel budget. 
        From pre-trip planning to real-time expense tracking, everything was seamless. 
        The charts were incredibly helpful in identifying where we could cut costs.”
      </p>
      <div className="review-rating">⭐⭐⭐⭐⭐</div>
      <div className="review-author">— Aditi S., Goa Explorer</div>
    </div>

    <div className="review-card">
      <p className="review-text">
        “We were a group of five and the collaborative budgeting feature helped us stay coordinated without the usual money confusion. 
        Splitting bills and managing shared expenses was super easy. Loved it!”
      </p>
      <div className="review-rating">⭐⭐⭐⭐⭐</div>
      <div className="review-author">— Rohan K., Himachal Backpacker</div>
    </div>

    <div className="review-card">
      <p className="review-text">
        “While traveling across Europe, the built-in currency converter saved us so much time. 
        No more Googling rates or doing manual calculations. And the interface? Super clean and intuitive.”
      </p>
      <div className="review-rating">⭐⭐⭐⭐⭐</div>
      <div className="review-author">— Meena T., Eurotrip Enthusiast</div>
    </div>

    
  </div>
</section>

    </div>
  );
}

export default Home;
