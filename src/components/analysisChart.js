import React, { useEffect, useState } from "react";
import { themeColors } from "Theme";

import { Bar } from "react-chartjs-2";

const AnalysisChart = ({ title, dataSet, setTotalAmount, key }) => {
  const [label, setLable] = useState(null);
  const [cost, setCost] = useState([]);
  const [backgroundColors, setBackground] = useState(0);

  useEffect(() => {
    mapValues(dataSet);
  }, [dataSet]);

  const mapValues = (analysisArray) => {
    let labelArray = [];
    let costArray = [];
    let backgroundArray = [];
    let totalCost = 0;
    analysisArray.forEach((element, index) => {
      labelArray.push(element?.[key]?.name);
      costArray.push(element.cost);
      totalCost = totalCost + element.cost;
      if (index % 2) {
        backgroundArray.push(themeColors.chartBarEvenColor);
      } else {
        backgroundArray.push(themeColors.chartBarOddColor);
      }
    });
    setLable(labelArray);
    setCost(costArray);
    setBackground(backgroundArray);
    setTotalAmount(totalCost);
  };

  const data = {
    labels: label,
    datasets: [
      {
        data: cost,
        backgroundColor: backgroundColors,
      },
    ],
  };

  const options = {
    legend: {
      display: false,
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Amount (SEK)",
          },
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: { title },
          },
          barPercentage: 0.4,
        },
      ],
    },
  };

  const renderContent = () => {
    return (
      <>
        <div style={{ height: "100%" }}>
          <Bar data={data} options={options} />
        </div>
      </>
    );
  };

  return <>{renderContent()}</>;
};

export default AnalysisChart;
