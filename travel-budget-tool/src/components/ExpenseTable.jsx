export default function ExpenseTable({ expenses, onEdit, onDelete }) {
  return (
    <table>
      <thead>
        <tr><th>Description</th><th>Amount</th><th>Category</th><th>Actions</th></tr>
      </thead>
      <tbody>
        {expenses.map((exp) => (
          <tr key={exp.id}>
            <td>{exp.description}</td>
            <td>{exp.amount}</td>
            <td>{exp.category}</td>
            <td>
              <button onClick={() => onEdit(exp)}>Edit</button>
              <button onClick={() => onDelete(exp.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
