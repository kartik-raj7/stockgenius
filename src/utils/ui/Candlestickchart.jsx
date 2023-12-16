import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const CandlestickChart = ({ data,chartname }) => {
    console.log(data)
  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: "candlestick",
      height: 350,
    },
    title: {
      text: chartname,
      align: "left",
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  });

  useEffect(() => {
    const labels = data.map(chartval => chartval.date);
    const datapoints = data.map(chartval => ({
      x: new Date(chartval.date),
      y: [chartval.open, chartval.high, chartval.low, chartval.close],
    }));

    setChartOptions(prevOptions => ({
      ...prevOptions,
      xaxis: {
        ...prevOptions.xaxis,
        categories: labels,
      },
    }));

    setChartSeries([
      {
        data: datapoints,
      },
    ]);
  }, [data]);

  const [chartSeries, setChartSeries] = useState([
    {
      data: [],
    },
  ]);

  return (
    <div id="chart">
      <ReactApexChart
        options={chartOptions}
        series={chartSeries}
        type="candlestick"
        height={350}
      />
    </div>
  );
};

export default CandlestickChart;
