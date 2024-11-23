// src/components/ChartComponent.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ChartComponent = ({ id, data, options, onDelete }) => {
  return (
    <Card sx={{ marginBottom: 3 }}>
      <CardContent>
        <Typography variant="h6">Chart {id}</Typography>
        <Line data={data} options={options} />
        <IconButton onClick={() => onDelete(id)} sx={{ position: 'absolute', top: 10, right: 10 }}>
          <DeleteIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default ChartComponent;
