import React from 'react';
import { Line} from 'react-chartjs-2';
import 'chart.js/auto'

const LineChart = ({ data }) => {
  var chartdata;
  console.log(data);
  let labels = [];
  let datapoints = [];
  data.map((chartval)=>{
      labels.push(chartval.date);
      datapoints.push(chartval.close);
  })
//   keysArray.forEach((key) => {
//     labels.push(key);
//     datapoints.push(parseFloat(chartd[key]['4. close']));
//   });
  var chartdata = {
    labels: labels,
    datasets: [
      {
        label: 'Closing',
        data: datapoints,
        borderColor: 'grey',
        borderWidth: 3,
        pointRadius: 0.9, 
      },
    ],
  };

  return (
    <div className='mx-1'>
      <Line
        data={chartdata}
        options={{
          plugins: {
            legend: {
              display: false,
            },
          },
          elements: {
            line: {
              borderColor: 'grey !important',
              backgroundColor: 'grey',
              tension: 0.4,
              borderJoinStyle: 'round',
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              grid: {
                display: false,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default LineChart;