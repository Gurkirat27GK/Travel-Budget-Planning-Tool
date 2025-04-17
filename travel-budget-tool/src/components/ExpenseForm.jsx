import { useState, useEffect } from 'react';

export default function ExpenseForm({ onSubmit, initial = {} }) {
  const [form, setForm] = useState({ 
    description: '', 
    amount: '', 
    category: '' ,
    tripId: ''
});

useEffect(() => {
    if (initial) {
      setForm({
        description: initial.description || "",
        amount: initial.amount || "",
        category: initial.category || "",
        tripId: initial.tripId || "",
      });
    }
  }, [initial]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.description || !form.amount || !form.category || !form.tripId) {
      alert("Please fill in all fields");
      return;
    }
    onSubmit(form);
    setForm({ description: "", amount: "", category: "", tripId: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full max-w-md mx-auto p-4">
      <input
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        className="border p-2 rounded"
        required
      />
      <input
        name="amount"
        type="number"
        placeholder="Amount"
        value={form.amount}
        onChange={handleChange}
        className="border p-2 rounded"
        required
      />
      <input
        name="category"
        placeholder="Category (e.g., Food, Travel)"
        value={form.category}
        onChange={handleChange}
        className="border p-2 rounded"
        required
      />
      <input
        name="tripId"
        placeholder="Trip Code (e.g., trip123)"
        value={form.tripId}
        onChange={handleChange}
        className="border p-2 rounded"
        required
      />
      <button type="submit" className="bg-blue-500 text-white py-2 rounded">
        {initial.id ? "Update" : "Add"} Expense
      </button>
    </form>
  );
}