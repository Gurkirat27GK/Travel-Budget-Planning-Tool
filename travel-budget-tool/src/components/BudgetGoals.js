import React, { useState } from "react";

const categories = ["Food", "Transport", "Accommodation", "Shopping", "Misc"];

const BudgetGoals = ({ budgetData, onUpdate }) => {
  const [viewMode, setViewMode] = useState("monthly"); // monthly or weekly

  const handleInputChange = (category, value) => {
    onUpdate(category, viewMode, parseFloat(value) || 0);
  };

  return (
    <div>
      <h2>Set Budget Goals ({viewMode})</h2>
      <button onClick={() => setViewMode(viewMode === "monthly" ? "weekly" : "monthly")}>
        Switch to {viewMode === "monthly" ? "Weekly" : "Monthly"}
      </button>

      {categories.map((cat) => (
        <div key={cat}>
          <label>{cat}</label>
          <input
            type="number"
            value={budgetData?.[viewMode]?.[cat] || ""}
            onChange={(e) => handleInputChange(cat, e.target.value)}
            placeholder={`Enter ${viewMode} budget`}
          />
        </div>
      ))}
    </div>
  );
};

export default BudgetGoals;
