import React from "react";
import PieChart from "../components/PieChart";
import BarChart from "../components/BarChart";

const Reports = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ marginBottom: "2rem" }}>Reports Dashboard</h2>

      <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: "300px" }}>
          <h3>Sales Overview</h3>
          <BarChart />
        </div>

        <div style={{ flex: 1, minWidth: "300px" }}>
          <h3>Market Share</h3>
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default Reports;