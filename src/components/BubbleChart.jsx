import React from 'react'
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bubble } from 'react-chartjs-2';
import {faker} from '@faker-js/faker'
ChartJS.register(LinearScale, PointElement, Tooltip, Legend);
export const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
 maintainAspectRatio: false
};

export const data = {
  datasets: [
    {
      label: 'Red dataset',
      data: Array.from({ length: 50 }, () => ({
        x: faker.datatype.number({ min: 0, max: 100000 }),
        y: faker.datatype.number({ min: 0, max: 100000 }),
        r: faker.datatype.number({ min: 5, max: 20 }),
      })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Blue dataset',
      data: Array.from({ length: 50 }, () => ({
        x: faker.datatype.number({ min: 0, max: 100000 }),
        y: faker.datatype.number({ min: 0, max: 100000 }),
        r: faker.datatype.number({ min: 5, max: 20 }),
      })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
const BubbleChart = () => {
  return (
    <div>
        <Bubble data={data} options={options}
        width={100}
        height={400}
        />
    </div>
  )
}

export default BubbleChart