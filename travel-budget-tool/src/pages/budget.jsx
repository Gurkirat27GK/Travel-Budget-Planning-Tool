import { useEffect, useState } from 'react';
import { db, ref, push, set, onValue, remove } from '../firebase/firebaseConfig';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';

export default function Budget() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const expensesRef = ref(db, 'expenses');
    onValue(expensesRef, (snapshot) => {
      const data = snapshot.val();
      const loadedExpenses = data ? Object.entries(data).map(([id, val]) => ({ id, ...val })) : [];
      setExpenses(loadedExpenses);
    });
  }, []);

  const addExpense = async (expense) => {
    const newRef = push(ref(db, 'expenses'));
    await set(newRef, expense);
  };

  const deleteExpense = async (id) => {
    await remove(ref(db, `expenses/${id}`));
  };

  return (
    <div>
      <h2>Budget Page</h2>
      <ExpenseForm onSubmit={addExpense} />
      <ExpenseList expenses={expenses} onDelete={deleteExpense} />
    </div>
  );
}
