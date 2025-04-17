import { useEffect, useState } from 'react';
import { db, ref, onValue } from '../firebase/firebaseConfig';
import PieChart from '../components/PieChart';

export default function Reports() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const expensesRef = ref(db, 'expenses');
    onValue(expensesRef, (snapshot) => {
      const data = snapshot.val();
      const list = data ? Object.entries(data).map(([id, val]) => ({ id, ...val })) : [];
      setExpenses(list);
    });
  }, []);

  return (
    <div>
      <h2>Reports</h2>
      <PieChart expenses={expenses} />
    </div>
  );
}
