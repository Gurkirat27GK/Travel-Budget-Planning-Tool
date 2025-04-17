export default function BudgetProgressBar({ totalBudget, expenses }) {
    const spent = expenses.reduce((acc, exp) => acc + parseFloat(exp.amount), 0);
    const percentage = (spent / totalBudget) * 100;
  
    return (
      <div className="w-full bg-gray-200 rounded-full h-4 my-4">
        <div
          className="bg-blue-500 h-4 rounded-full"
          style={{ width: `${Math.min(percentage, 100)}%` }}
        ></div>
      </div>
    );
  }
  