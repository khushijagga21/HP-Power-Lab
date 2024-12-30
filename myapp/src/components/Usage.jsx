import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';



const UsageDashboard = () => {
  const [chartData, setChartData] = useState({
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Fuel Usage (Liters)',
        data: [1000, 800, 1200, 900, 1100, 1300],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  });

  const [tips, setTips] = useState([
    "Regularly check tire pressure. Underinflated tires can significantly increase fuel consumption.",
    "Avoid rapid acceleration and braking. Maintain a steady speed whenever possible.",
    "Use cruise control on highways to maintain a consistent speed.",
    "Reduce idling time. Turn off the engine when waiting for extended periods.",
    "Consider using fuel-efficient driving techniques, such as coasting to a stop.",
  ]);

  return (
    <div>
      <h1>Usage Dashboard</h1>
      <div className="chart-container">
        <Line data={chartData} />
      </div>
      <div className="tips-container">
        <h2>Fuel Efficiency Tips</h2>
        <ul>
          {tips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UsageDashboard;