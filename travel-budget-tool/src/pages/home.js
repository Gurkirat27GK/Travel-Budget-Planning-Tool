// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/home.css";
// import MapSection from "../components/MapSection";

// function Home() {
//   const navigate = useNavigate();

//   const navigateToReports = () => navigate("/reports");
//   const navigateToStartPlanning = () => navigate("/Planner");
//   const navigateToTrack = () => navigate("/Budget");
//   const navigateToCollaborativeBudget = () => navigate("/CollaborativeBudget");
//   const navigateToCurrencyConverter = () => navigate("/CurrencyConverter");

//   return (
//     <div className="home-container">
//       <div className="hero">
//         <h1 className="title">Travel Budget Planner</h1>
//         <p className="subtitle">
//           Plan smart, travel far. Manage your travel expenses with ease.
//         </p>
//       </div>
//       <section className="features">
//         <div className="feature-card">
//           <img src="https://img.icons8.com/?size=100&id=9733&format=png&color=14089b" alt="Plan" />
//           <h2>Plan</h2>
//           <p>Set your budget goals before you travel.</p>
//           <button onClick={navigateToStartPlanning} className="cta-button">Start Planning</button>
//         </div>
//         <div className="feature-card">
//           <img src="https://img.icons8.com/?size=100&id=7991&format=png&color=14089b" alt="Track" />
//           <h2>Track</h2>
//           <p>Record and monitor your travel expenses in real-time.</p>
//           <button onClick={navigateToTrack} className="cta-button">See Track</button>
//         </div>
//         <div className="feature-card">
//           <img src="https://img.icons8.com/?size=100&id=4GO5zf5NNU2k&format=png&color=14089b" alt="Report" />
//           <h2>Report</h2>
//           <p>Visualize where your money goes with charts.</p>
//           <button onClick={navigateToReports} className="cta-button">See Reports</button>
//         </div>
//       </section>

//       <section className="features">
//         <div className="feature-card">
//           <img src="https://img.icons8.com/ios-filled/100/currency-exchange.png" alt="Converter" />
//           <h2>Currency Converter</h2>
//           <p>Convert your expenses in real-time with accurate exchange rates.</p>
//           <button onClick={navigateToCurrencyConverter} className="cta-button">Convert Now</button>
//         </div>
//         <div className="feature-card">
//           <img src="https://img.icons8.com/ios-filled/100/group-foreground-selected.png" alt="Collaborate" />
//           <h2>Collaborative Budgeting</h2>
//           <p>Work together with your travel companions to track shared expenses.</p>
//           <button onClick={navigateToCollaborativeBudget} className="cta-button">Collaborate</button>
//         </div>
//       </section>
//       <MapSection />
//     </div>
//   );
// }

// export default Home;



import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";
import MapSection from "../components/MapSection";

function Home() {
  const navigate = useNavigate();

  const navigateToReports = () => navigate("/reports");
  const navigateToStartPlanning = () => navigate("/Planner");
  const navigateToTrack = () => navigate("/Budget");
  const navigateToCollaborativeBudget = () => navigate("/CollaborativeBudget");
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
          <h2>Plan</h2>
          <p >Set your budget goals before you travel.</p>
          <button onClick={navigateToStartPlanning} className="cta-button">Start Planning</button>
        </div>

        <div className="feature-card">
          <img src="https://img.icons8.com/?size=100&id=7991&format=png&color=14089b" alt="Track" />
          <h2>Track</h2>
          <p>Record and monitor your travel expenses in real-time.</p>
          <button onClick={navigateToTrack} className="cta-button">See Track</button>
        </div>

        <div className="feature-card">
          <img src="https://img.icons8.com/?size=100&id=4GO5zf5NNU2k&format=png&color=14089b" alt="Report" />
          <h2>Report</h2>
          <p>Visualize where your money goes with charts.</p>
          <button onClick={navigateToReports} className="cta-button">See Reports</button>
        </div>
      </section>

      {/* FEATURE CARDS SECTION 2 */}
      <section className="features">
        <div className="feature-card">
          <img src="https://img.icons8.com/?size=100&id=7748&format=png&color=14089b" alt="Converter" />
          <h2>Currency Converter</h2>
          <p>Convert your expenses in real-time with accurate exchange rates.</p>
          <button onClick={navigateToCurrencyConverter} className="cta-button">Convert Now</button>
        </div>

        <div className="feature-card">
          <img src= "https://img.icons8.com/?size=100&id=mqcxFECRbI85&format=png&color=14089b" alt="Collaborate" />
          <h2>Collaborative Budgeting</h2>
          <p>Work together with your travel companions to track shared expenses.</p>
          <button onClick={navigateToCollaborativeBudget} className="cta-button">Collaborate</button>
        </div>
      </section>

      {/* MAP SECTION */}
      <MapSection />
    </div>
  );
}

export default Home;
