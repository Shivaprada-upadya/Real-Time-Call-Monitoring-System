import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip);

const MetricsChart = ({ calls }) => {
  const timestamps = calls.map(c => c.timestamp?.slice(11, 19));
  const latencyData = calls.map(c => c.latency);
  const jitterData = calls.map(c => c.jitter);

  const data = {
    labels: timestamps,
    datasets: [
      {
        label: 'Latency (ms)',
        data: latencyData,
        borderColor: 'blue',
        fill: false
      },
      {
        label: 'Jitter (ms)',
        data: jitterData,
        borderColor: 'green',
        fill: false
      }
    ]
  };

  return (
    <div>
      <h3>Call Quality Metrics</h3>
      <Line data={data} />
    </div>
  );
};

export default MetricsChart;
