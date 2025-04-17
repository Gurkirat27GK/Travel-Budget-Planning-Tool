// // src/pages/budget.js
// import React, { useState } from "react";
// import ExpenseForm from "../components/ExpenseForm";
// import ExpenseTable from "../components/ExpenseTable";

// function Budget() {
//   const [expenses, setExpenses] = useState([]);

//   const handleAddExpense = (expense) => {
//     const newExpense = { ...expense, id: Date.now() };
//     setExpenses((prev) => [...prev, newExpense]);
//   };

//   const handleDelete = (id) => {
//     setExpenses(expenses.filter((exp) => exp.id !== id));
//   };

//   const handleEdit = (id) => {
//     alert("Edit functionality coming soon for expense ID: " + id);
//   };

//   const total = expenses.reduce((acc, item) => acc + parseFloat(item.amount || 0), 0);

//   return (
//     <div className="budget-page" style={{ padding: "40px", color: "#fff" }}>
//       <div style={{
//         maxWidth: "800px",
//         margin: "auto",
//         backgroundColor: "#1e293b",
//         borderRadius: "20px",
//         padding: "30px",
//         boxShadow: "0 0 25px rgba(0,255,255,0.2)"
//       }}>
//         <h2 style={{ fontSize: "2rem", textAlign: "center", color: "#00f2ff", marginBottom: "20px" }}>
//           TripWise
//         </h2>

//         <div className="section" style={{ marginBottom: "30px" }}>
//           <h3 style={{ color: "#38bdf8" }}>Add New Expense</h3>
//           <ExpenseForm onAddExpense={handleAddExpense} />
//         </div>

//         <div className="section">
//           <h3 style={{ color: "#38bdf8" }}>Your Expenses</h3>
//           <ExpenseTable expenses={expenses} onDelete={handleDelete} onEdit={handleEdit} />
//         </div>

//         <div style={{
//           marginTop: "30px",
//           fontSize: "1.3rem",
//           fontWeight: "bold",
//           textAlign: "right",
//           color: "#00f2ff"
//         }}>
//          Total Expense: ₹{total.toFixed(2)}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Budget;


// src/pages/budget.js
import React, { useState } from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseTable from "../components/ExpenseTable";

function Budget() {
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = (expense) => {
    const newExpense = { ...expense, id: Date.now() };
    setExpenses((prev) => [...prev, newExpense]);
  };

  const handleDelete = (id) => {
    setExpenses(expenses.filter((exp) => exp.id !== id));
  };

  const handleEdit = (id) => {
    alert("Edit functionality coming soon for expense ID: " + id);
  };

  const total = expenses.reduce((acc, item) => acc + parseFloat(item.amount || 0), 0);

  return (
    <div className="budget-page" style={{ padding: "40px", color: "#fff" }}>
      <div
        style={{
          maxWidth: "800px",
          margin: "auto",
          backgroundColor: "#1e293b",
          borderRadius: "20px",
          padding: "30px",
          boxShadow: "0 0 25px rgba(0,255,255,0.2)",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            textAlign: "center",
            color: "#00f2ff",
            marginBottom: "20px",
          }}
        >
          TripWise
        </h2>

        <div className="section" style={{ marginBottom: "30px" }}>
          <h3 style={{ color: "#38bdf8" }}>Add New Expense</h3>
          <ExpenseForm onAddExpense={handleAddExpense} />
        </div>

        <div className="section">
          <h3 style={{ color: "#38bdf8" }}>Your Expenses</h3>
          <ExpenseTable
            expenses={expenses}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        </div>

        <div
          style={{
            marginTop: "30px",
            fontSize: "1.3rem",
            fontWeight: "bold",
            textAlign: "right",
            color: "#00f2ff",
          }}
        >
          Total TripWise Expense ₹{total.toFixed(2)}
        </div>
      </div>
    </div>
  );
}

export default Budget;
