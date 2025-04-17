import React, { useEffect, useState } from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import { addExpense, fetchExpenses, deleteExpense } from "../services/expenseService";

const Budget = () => {
  const [expenses, setExpenses] = useState([]);
  const tripId = "trip123"; 
  useEffect(() => {
    fetchExpenses(tripId, setExpenses);
  }, []);

  const handleAddExpense = (expense) => {
    addExpense(tripId, expense);
  };

  const handleDeleteExpense = (id) => {
    deleteExpense(tripId, id);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Add Travel Expense</h1>
      <ExpenseForm onSubmit={handleAddExpense} />
      <ExpenseList expenses={expenses} onDelete={handleDeleteExpense} />
    </div>
  );
};

export default Budget;
