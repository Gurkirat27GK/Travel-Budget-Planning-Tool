import { db } from "./firebaseConfig";
import {
  ref,
  push,
  update,
  remove,
  onValue,
} from "firebase/database";

export const addExpense = (tripID, expense) => {
  const expenseRef = ref(db, `trips/${tripID}/expenses`);
  return push(expenseRef, expense);
};

export const updateExpense = (tripID, expenseID, updatedData) => {
  return update(ref(db, `trips/${tripID}/expenses/${expenseID}`), updatedData);
};

export const deleteExpense = (tripID, expenseID) => {
  return remove(ref(db, `trips/${tripID}/expenses/${expenseID}`));
};

export const listenToExpenses = (tripID, callback) => {
  const expenseRef = ref(db, `trips/${tripID}/expenses`);
  onValue(expenseRef, (snapshot) => {
    const data = snapshot.val();
    const parsed = data
      ? Object.entries(data).map(([id, value]) => ({ id, ...value }))
      : [];
    callback(parsed);
  });
};
