"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughNutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: "accounts",
      data: [3000, 4366.66,100],
      backgroundColor: ["#0b65a2",'#a9b76a','#0f38a3'],
      }
    ],
    labels:[
        'SBI',
        'PNB',
    ]
  };
  return <Doughnut
  options={{
    plugins:{
        legend:{
            display:false
        }
    }
  }}
   data={data} />;
};

export default DoughNutChart;
