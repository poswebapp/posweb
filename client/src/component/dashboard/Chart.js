import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  LinearScale,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { totalStore } from "../../zustand/total";

ChartJS.register(ArcElement, Tooltip, Legend, LinearScale);

const Chart = () => {
  const total = totalStore((state) => state.total);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };
  const data = {
    labels: ["incoming", "outgoing"],
    datasets: [
      {
        label: "",
        data: [total.incoming, total.outgoing],
        backgroundColor: ["#FDC639", "#A5DB73"],
        borderColor: ["#FDC639", "#A5DB73"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <span className="p-5 rounded-lg bg-zinc-100 h-60 w-60 shadow-md grid border">
      <Doughnut data={data} options={options} />
    </span>
  );
};

export default Chart;
