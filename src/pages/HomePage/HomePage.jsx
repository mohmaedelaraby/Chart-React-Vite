import React, { useEffect , useState } from 'react'
import useChartsData from '../../hooks/useChartsData'
import { Container, Button, Box, Typography } from '@mui/material';
import ChartComponent from '../../components/ChartCompnent/ChartComponent';



function HomePage() {
    const{ChartsDataData,ChartsDataRefetch,isChartsDataLoading}=useChartsData()
    useEffect(()=>{
        ChartsDataRefetch() 
        console.log(ChartsDataData?.data)
    },[])

    // Dummy chart data and options
const generateChartData = (id) => ({
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: `Dataset ${id}`,
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: '#42A5F5',
      tension: 0.1
    }
  ]
});

const generateChartOptions = () => ({
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Example'
    },
    tooltip: {
      callbacks: {
        label: function(tooltipItem) {
          return `Value: ${tooltipItem.raw}`;
        }
      }
    }
  }
});

const [charts, setCharts] = useState([]);

const addChart = () => {
  const newChartId = charts.length + 1;
  setCharts([...charts, {
    id: newChartId,
    data: generateChartData(newChartId),
    options: generateChartOptions()
  }]);
};

const deleteChart = (id) => {
  setCharts(charts.filter(chart => chart.id !== id));
};

return (
  <Container>
    <Box>
      <div>
      <Typography variant="h4" gutterBottom>Dynamic Chart Dashboard</Typography>
      <Button variant="contained" color="primary" onClick={addChart} sx={{ marginBottom: 3 }}>
        Add Chart
      </Button>
      </div>

      {charts.length === 0 ? (
        <Typography variant="h6" color="textSecondary">No charts added yet!</Typography>
      ) : (
      
        <Box sx={{ width: '100%' }}>
          {charts.map((chart) => (
            <ChartComponent
              key={chart.id}
              id={chart.id}
              data={chart.data}
              options={chart.options}
              onDelete={deleteChart}
            />
          ))}
        </Box>
      )}
    </Box>
  </Container>
);
}

export default HomePage


