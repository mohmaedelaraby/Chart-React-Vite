import React, { useEffect, useState } from "react";
import useChartsData from "../../hooks/useChartsData";
import { Container, Button, Box, Typography } from "@mui/material";
import ChartComponent from "../../components/ChartCompnent/ChartComponent";
import "./HomePage.css";

function HomePage() {
  const [chartData ,setChartsData] = useState([])
  const [labels ,setLabels] = useState([])
  const [data ,setData] = useState([])
  const [charts, setCharts] = useState([]);

  const { ChartsDataData, ChartsDataRefetch, isChartsDataLoading } =
    useChartsData();
  useEffect(() => {
    ChartsDataRefetch();
  }, []);

  useEffect(()=>{
    setChartsData(ChartsDataData?.data)
  },[ChartsDataData])
  useEffect(()=>{
    minpulateDataForLineChart()
  },[chartData , charts , labels , data])

  const minpulateDataForLineChart = () =>{
    chartData?.map((item)=>{
      setLabels([...labels, item?.date]);
      setData([...data, isNaN(item?.value)? item?.value : 0]);
    })
  }

  // Dummy chart data and options
  const generateChartData = (id) => ({
    labels: labels,
    datasets: [
      {
        label: `Dataset ${id}`,
        data: data,
        fill: false,
        borderColor: "#42A5F5",
        tension: 0.1,
      },
    ],
  });

  const generateChartOptions = () => ({
    responsive: true,
    scales: {
      y: {
        display: true,
        title: {
          display: true,
          text: 'Value',
          color: 'black',
          padding: {top: 30, left: 0, right: 0, bottom: 0}
        }
      }
    },
    plugins: {
      title: {
        display: true,
        text: "Chart.js Example",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `Value: ${tooltipItem.raw}`;
          },
        },
      },
    },
  });


  const addChart = () => {
    const newChartId = charts.length + 1;
    setCharts([
      ...charts,
      {
        id: newChartId,
        data: generateChartData(newChartId),
        options: generateChartOptions(),
      },
    ]);
  };

  const deleteChart = (id) => {
    setCharts(charts.filter((chart) => chart.id !== id));
  };

  return (
    <>
      <div className="page">
        <div className="page-header">
          <Typography variant="h4" gutterBottom>
            Dynamic Chart Dashboard
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={addChart}
            sx={{ marginBottom: 3 }}
          >
            Add Chart
          </Button>
        </div>
        <div className="page-contnet">
        {charts.length === 0 ? (
          <div className="no-data">
                        No charts added yet!
          </div>
         
        ) : (
          <div className="page-body">
            {charts.map((chart) => (
              <ChartComponent
                key={chart.id}
                id={chart.id}
                data={chart.data}
                options={chart.options}
                onDelete={deleteChart}
              />
            ))}
          </div>
        )}
        </div>
        
      </div>
    </>
  );
}

export default HomePage;
