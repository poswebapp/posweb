import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";


const ChartBar = ({totalProfit,totalExpense}) => {

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );


  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Average Income Chart",
      },
    },
  };

  const labels = [""];

  const data = {
    labels,
    datasets: [
      {
        label: "Expenses",
        data: [totalExpense],
        backgroundColor: "#FDC639",
      },
      {
        label: "Profit",
        data: [totalProfit],
        backgroundColor: "#A5DB73",
      },
    ],
  };

  return (
    <div>
        <Bar options={options} data={data} />
    </div>
  )
}

export default ChartBar
