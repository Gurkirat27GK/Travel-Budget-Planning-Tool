import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart({ expenses }) {
  const grouped = expenses.reduce((acc, e) => {
    acc[e.category] = (acc[e.category] || 0) + parseFloat(e.amount);
    return acc;
  }, {});

  const data = {
    labels: Object.keys(grouped),
    datasets: [{
      label: 'Expenses by Category',
      data: Object.values(grouped),
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#90EE90'],
    }],
  };

  return (
    <div style={{ width: '400px', height: '400px' }}>
      <Pie data={data} />
    </div>
  );
}
