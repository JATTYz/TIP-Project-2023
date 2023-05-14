import React from 'react'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);
const data = {
  labels: ['PhotographCommercial', 'SalesRecord', 'SalesBrochure', 'BookTechnical', 'AritcleNewspaper', 'AdvertisementJournal'],
  datasets: [
    {
      label: 'Uploaded document trend',
      data: [40, 70, 30, 50, 20, 30],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 2,
    },
  ],
};
const RadarChart = () => {
  return (
    <div>
        <Radar 
        data={data}
        width={100}
        height={400}
        options={{ maintainAspectRatio: false }} 
        />
    </div>
  )
}

export default RadarChart