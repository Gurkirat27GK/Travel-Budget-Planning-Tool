import React, { useEffect, useState } from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import {
  addExpense,
  deleteExpense,
  listenToExpenses,
} from "../firebase/dbUtils";

const tripID = "demoTrip123";

const Budget = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    listenToExpenses(tripID, setExpenses);
  }, []);

  const handleAdd = async (expense) => {
    await addExpense(tripID, expense);
  };

  const handleDelete = async (id) => {
    await deleteExpense(tripID, id);
  };

  const handleEdit = (exp) => {
    alert("Edit functionality will be completed on Day 3");
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Travel Budget - Expense Tracker</h2>
      <ExpenseForm onAdd={handleAdd} />
      <ExpenseList expenses={expenses} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
};

export default Budget;
