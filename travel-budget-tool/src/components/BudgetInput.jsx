import React, { useState } from 'react';

export default function BudgetInput({ onSave }) {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [frequency, setFrequency] = useState('monthly');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (category && amount && frequency) {
      onSave({ category, amount, frequency });
      setCategory('');
      setAmount('');
      setFrequency('monthly');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        name="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category (e.g., Food)"
        className="border p-2 rounded"
      />
      <input
        name="amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        className="border p-2 rounded"
      />
      <select
        name="frequency"
        value={frequency}
        onChange={(e) => setFrequency(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="monthly">Monthly</option>
        <option value="weekly">Weekly</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white py-2 rounded">Save Budget</button>
    </form>
  );
}
