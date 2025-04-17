const ExpenseList = ({ expenses, onDelete, onEdit }) => {
    return (
      <ul className="space-y-2">
        {expenses.map((exp, index) => (
          <li key={index} className="flex justify-between items-center border p-2">
            <div>
              <p>{exp.date} - {exp.description} - ${exp.amount} - {exp.category}</p>
            </div>
            <div>
              <button onClick={() => onEdit(exp)}>✏️</button>
              <button onClick={() => onDelete(exp.id)}>🗑️</button>
            </div>
          </li>
        ))}
      </ul>
    );
  };
  