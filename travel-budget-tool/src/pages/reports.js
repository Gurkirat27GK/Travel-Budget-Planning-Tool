import React, { useState, useEffect } from "react";
import PieChart from "../components/PieChart";
import BarChart from "../components/BarChart";
import { db, ref, onValue } from "../firebase/firebaseConfig";

const Reports = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const expensesRef = ref(db, "expenses");
    onValue(expensesRef, (snapshot) => {
      const data = snapshot.val();
      const loadedExpenses = data ? Object.entries(data).map(([id, val]) => ({ id, ...val })) : [];
      setExpenses(loadedExpenses); // Set the expenses data to state
    });
  }, []);

  // Calculate total expenses
  const totalExpenses = expenses.reduce((acc, expense) => acc + parseFloat(expense.amount || 0), 0);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ textAlign: "center", marginBottom: "2rem", color: "#00f2ff", fontSize: "2.5rem" }}>Travel Budget Report</h2>

      <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
        
        {/* BarChart Section */}
        <div style={{ flex: 1, minWidth: "300px", backgroundColor: "#1e293b", borderRadius: "15px", padding: "1.5rem", boxShadow: "0 0 15px rgba(0, 255, 255, 0.1)" }}>
          <h3 style={{ color: "#38bdf8", textAlign: "center", marginBottom: "1rem" }}>Budget Overview (Monthly)</h3>
          <BarChart expenses={expenses} />
        </div>

        {/* PieChart Section */}
        <div style={{ flex: 1, minWidth: "300px", backgroundColor: "#1e293b", borderRadius: "15px", padding: "1.5rem", boxShadow: "0 0 15px rgba(0, 255, 255, 0.1)" }}>
          <h3 style={{ color: "#38bdf8", textAlign: "center", marginBottom: "1rem" }}>Expense Distribution by Category</h3>
          <PieChart expenses={expenses} />
        </div>
      </div>

      {/* Total Expenses Summary */}
      <div style={{ marginTop: "2rem", fontSize: "1.5rem", textAlign: "center", fontWeight: "bold", color: "#00f2ff" }}>
        <p>Total Expenses: ₹{totalExpenses.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Reports;
