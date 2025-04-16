import React from 'react';

const ExpenseForm = () => {
  return (
    <form>
      <input type="date" placeholder="Date" />
      <input type="text" placeholder="Description" />
      <input type="number" placeholder="Amount" />
      <select>
        <option>Food</option>
        <option>Transport</option>
        <option>Hotel</option>
      </select>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
