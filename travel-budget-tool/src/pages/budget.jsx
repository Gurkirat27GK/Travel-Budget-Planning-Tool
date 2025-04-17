import { useEffect, useState } from 'react';
import { db, ref, push, set, onValue, remove } from '../firebase/firebaseConfig';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';

export default function Budget() {
  const [expenses, setExpenses] = useState([]);
  const [selectedExpense, setSelectedExpense] = useState(null);

  // Load expenses from Firebase on mount
  useEffect(() => {
    const expensesRef = ref(db, 'expenses');
    onValue(expensesRef, (snapshot) => {
      const data = snapshot.val();
      const loadedExpenses = data
        ? Object.entries(data).map(([id, val]) => ({ id, ...val }))
        : [];
      setExpenses(loadedExpenses);
    });
  }, []);

  // Add or update expense
  const addExpense = async (expense) => {
    if (expense.id) {
      await set(ref(db, `expenses/${expense.id}`), expense);
    } else {
      const newRef = push(ref(db, 'expenses'));
      await set(newRef, expense);
    }
    setSelectedExpense(null); // Clear selected after submit
  };

  // Delete expense
  const deleteExpense = async (id) => {
    await remove(ref(db, `expenses/${id}`));
  };

  // Set selected expense to edit
  const handleEdit = (expense) => {
    setSelectedExpense(expense);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-center my-4">Budget Page</h2>
      <ExpenseForm onSubmit={addExpense} initial={selectedExpense} />
      <ExpenseList expenses={expenses} onDelete={deleteExpense} onEdit={handleEdit} />
    </div>
  );
}
