const BudgetProgressBar = ({ spent, limit }) => {
    const percent = Math.min((spent / limit) * 100, 100);
    return (
      <div className="mb-4">
        <div className="bg-gray-200 h-4 w-full rounded">
          <div
            className="bg-green-500 h-4 rounded"
            style={{ width: `${percent}%` }}
          />
        </div>
        <p className="text-sm mt-1">{spent} / {limit}</p>
      </div>
    );
  };
  
  export default BudgetProgressBar;
  