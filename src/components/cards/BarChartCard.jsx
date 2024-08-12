import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const BarChartCard = () => {
  const [chartData] = useState({
    series: [
      {
        name: 'Net Profit',
        data: [44, 55, 30, 52, 32, 42, 36, 50, 52],
      },
      {
        name: 'Revenue',
        data: [36, 25, 51, 18, 7, 10, 15, 11, 9],
      },
      {
        name: 'Free Cash Flow',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false, // Disable the toolbar
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '70%',
          borderRadius: 6,
          endingShape: 'rounded',
          startingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: [5, 9, 11, 13, 15, 17, 19, 21, 23],
      },
      yaxis: {
        min: 0, 
        max: 60,
        tickAmount: 4, 
        labels: {
          formatter: (value) => {
            const yAxisLabels = [12, 10, 20, 50, 56]; // Define your specific labels
            const closestValue = yAxisLabels.reduce((prev, curr) =>
              Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev
            );
            return `${closestValue}k`;
           },
          style: {
            colors: ['#fff'],
            fontSize: '12px',
          },
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: (value) => `${value} thousands`,
        },
      },
    },
  });

  return (
    <div className="bg-gray-800 px-2 pt-4 mb-4 rounded-md w-full md:w-[65%]">
      <div id="chart">
        <div className="px-6 flex justify-between items-center">
          <h1 className="text-lg font-semibold text-gray-100">Activity</h1>
          <select className="py-1 px-3 text-white text-sm bg-gray-600 border-none focus:outline-none rounded-full">
            <option value="0">Weekly</option>
            <option value="1">Monthly</option>
            <option value="2">Yearly</option>
          </select>
        </div>
        <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={250} />
      </div>
    </div>
  );
};

export default BarChartCard;
