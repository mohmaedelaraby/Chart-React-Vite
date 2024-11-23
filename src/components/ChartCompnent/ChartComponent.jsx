// src/components/ChartComponent.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import "./ChartComponent.css"

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ChartComponent = ({ id, data, options, onDelete }) => {
  return (
    <Card sx={{ marginBottom: 12 }}>
      <CardContent>
        <div className='header'>
        <Typography variant="h6">Chart {id}</Typography>
        <IconButton onClick={() => onDelete(id)} sx={{color:'red'}}>
          <DeleteIcon />
        </IconButton>
        </div>
        <Line data={data} options={options} />
        
      </CardContent>
    </Card>
  );
};

export default ChartComponent;
