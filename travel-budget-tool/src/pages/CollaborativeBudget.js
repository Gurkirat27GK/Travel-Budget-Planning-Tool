import React, { useState, useEffect } from "react";
import { db } from "../firebase/firebaseConfig"; // Firebase setup
import { collection, doc, setDoc, onSnapshot } from "firebase/firestore";
import "./collab.css";


function CollaborativeBudget() {
  const [collaborators, setCollaborators] = useState([]);
  const [newCollaborator, setNewCollaborator] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({ description: "", amount: 0 });
  const [totalAmount, setTotalAmount] = useState(0);
  const [error, setError] = useState("");

  // Listen for real-time updates to collaborators and expenses
  useEffect(() => {
    const unsubscribeCollaborators = onSnapshot(
      collection(db, "collaborativeBudget", "sharedBudget", "collaborators"), // Correct collection reference
      (snapshot) => {
        const data = snapshot.docs.map((doc) => doc.data());
        setCollaborators(data);
      }
    );

    const unsubscribeExpenses = onSnapshot(
      collection(db, "collaborativeBudget", "sharedBudget", "expenses"), // Correct collection reference
      (snapshot) => {
        const data = snapshot.docs.map((doc) => doc.data());
        setExpenses(data);
        setTotalAmount(
          data.reduce((sum, expense) => sum + parseFloat(expense.amount), 0)
        );
      }
    );

    return () => {
      unsubscribeCollaborators();
      unsubscribeExpenses();
    };
  }, []);

  // Handle adding a new collaborator
  const handleAddCollaborator = async () => {
    if (!newCollaborator) {
      setError("Please enter a collaborator email.");
      return;
    }
    try {
      const collaboratorRef = doc(
        db,
        "collaborativeBudget",
        "sharedBudget",
        "collaborators",
        newCollaborator
      );
      await setDoc(collaboratorRef, {
        email: newCollaborator,
      });
      setNewCollaborator("");
      setError("");
    } catch (err) {
      setError("Error adding collaborator.");
    }
  };

  // Handle adding a new expense
  const handleAddExpense = async () => {
    if (!newExpense.description || !newExpense.amount) {
      setError("Please provide a description and amount for the expense.");
      return;
    }
    try {
      const expenseRef = doc(
        db,
        "collaborativeBudget",
        "sharedBudget",
        "expenses",
        Date.now().toString()
      );
      await setDoc(expenseRef, {
        description: newExpense.description,
        amount: newExpense.amount,
      });
      setNewExpense({ description: "", amount: 0 });
      setError("");
    } catch (err) {
      setError("Error adding expense.");
    }
  };

  return (
    <div className="collaborative-budget-page">
      <h1>Collaborative Travel Budget</h1>
      <p>Track your travel expenses and collaborate with your companions.</p>

      <div className="collaborators">
        <h2>Collaborators</h2>
        <ul>
          {collaborators.length > 0 ? (
            collaborators.map((collaborator, index) => (
              <li key={index}>{collaborator.email}</li>
            ))
          ) : (
            <li>No collaborators added yet.</li>
          )}
        </ul>

        <input
          type="email"
          value={newCollaborator}
          onChange={(e) => setNewCollaborator(e.target.value)}
          placeholder="Enter collaborator email"
        />
        <button onClick={handleAddCollaborator}>Invite Collaborator</button>
      </div>

      <div className="expenses">
        <h2>Expenses</h2>
        <div className="add-expense">
          <input
            type="text"
            value={newExpense.description}
            onChange={(e) =>
              setNewExpense({ ...newExpense, description: e.target.value })
            }
            placeholder="Expense description"
          />
          <input
            type="number"
            value={newExpense.amount}
            onChange={(e) =>
              setNewExpense({ ...newExpense, amount: e.target.value })
            }
            placeholder="Amount"
          />
          <button onClick={handleAddExpense}>Add Expense</button>
        </div>

        <ul>
          {expenses.length > 0 ? (
            expenses.map((expense, index) => (
              <li key={index}>
                {expense.description} - ${expense.amount}
              </li>
            ))
          ) : (
            <li>No expenses recorded yet.</li>
          )}
        </ul>
      </div>

      <div className="total-amount">
        <h3>Total Amount: ${totalAmount}</h3>
      </div>

      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default CollaborativeBudget;
