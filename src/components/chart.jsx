import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import _ from 'lodash';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);


export const options = {
  
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Name Of Stock',
    },
  },
};

const labels = [32, 39, 84, 129, 180, 224, 232, 278, 402, 440, 465, 535, 571, 605];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Stock Name',
      data: [43,32,42],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default function App() {
  
  return (
    <Grid container spacing={2}>
        <Grid item xs={10} md={8}>
            <Box sx={{paddingLeft:'10%'}}>
                <Line options={{
  
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Name Of Stock',
    },
  },
}}
 data={{
  labels,
  datasets: [
    {
      fill: true,
      label: 'Stock Name',
      data: [43,32,42],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
}} />;
            </Box>
        </Grid> 
      </Grid>
    
  )
}