import React, { useState } from "react";

const ExpenseForm = ({ onSubmit }) => {
  const [expense, setExpense] = useState({
    date: "",
    description: "",
    amount: "",
    category: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense({ ...expense, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(expense);
    setExpense({ date: "", description: "", amount: "", category: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-2">
      <input name="date" type="date" value={expense.date} onChange={handleChange} required />
      <input name="description" placeholder="Description" value={expense.description} onChange={handleChange} required />
      <input name="amount" type="number" placeholder="Amount" value={expense.amount} onChange={handleChange} required />
      <input name="category" placeholder="Category" value={expense.category} onChange={handleChange} required />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
