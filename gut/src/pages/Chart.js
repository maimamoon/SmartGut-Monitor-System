import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function PatientChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July"],
    datasets: [
      {
        label: "This Year",
        data: [15, 40, 75, 40, 55, 65, 50],
        borderColor: "#2dd4bf",
        backgroundColor: "rgba(45, 212, 191, 0.25)",
        tension: 0.4,
        fill: true,
        pointRadius: 0,
      },
      {
        label: "Last Year",
        data: [35, 45, 35, 60, 30, 75, 70],
        borderColor: "#9ca3af",
        backgroundColor: "rgba(156, 163, 175, 0.25)",
        tension: 0.4,
        fill: true,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: "#e5e7eb",
        },
        ticks: {
          stepSize: 20,
        },
      },
    },
  };

  return (
    <div style={{ height: "300px" }}>
      <Line data={data} options={options} />
    </div>
  );
}
