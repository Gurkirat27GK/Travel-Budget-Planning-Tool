import React, { useState } from "react";

function ExpenseForm({ onAddExpense }) {
  const [form, setForm] = useState({
    date: "",
    description: "",
    amount: "",
    category: "food"
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddExpense(form);
    setForm({ date: "", description: "", amount: "", category: "food" });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
      <input name="date" type="date" value={form.date} onChange={handleChange} required />
      <input name="description" type="text" placeholder="Description" value={form.description} onChange={handleChange} required />
      <input name="amount" type="number" placeholder="Amount" value={form.amount} onChange={handleChange} required />
      <select name="category" value={form.category} onChange={handleChange}>
        <option value="food">Food</option>
        <option value="travel">Travel</option>
        <option value="accommodation">Accommodation</option>
        <option value="activities">Activities</option>
      </select>
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
