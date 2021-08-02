import React, { useEffect, useState } from "react";
import { CardTitle, ChartCard } from "./../dashboard.style";
import { Select, Form } from "antd";
import { themeColors } from "Theme";

import { Bar } from "react-chartjs-2";

const CostEstimation = ({ store, actions }) => {
  const { allSuppliersAnalysis, allProjectsAnalysis } = store;
  const { Option } = Select;

  const [form] = Form.useForm();

  let today = new Date();

  const [label, setLable] = useState([]);
  const [cost, setCost] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [backgroundColors, setBackground] = useState(0);
  const [requestParams, setRequestParams] = useState({
    month: today.getMonth() + 1,
    year: today.getFullYear(),
    type: "projects",
  });

  useEffect(() => {
    if (requestParams.type == "projects") {
      actions.getAllProjectsAnalysis(requestParams);
    } else {
      actions.getAllSuppliersAnalysis(requestParams);
    }
  }, [requestParams]);

  useEffect(() => {
    if (requestParams.type == "suppliers" && allSuppliersAnalysis) {
      mapValues(allSuppliersAnalysis);
    } else if (requestParams.type == "projects" && allProjectsAnalysis) {
      mapValues(allProjectsAnalysis);
    }
  }, [allSuppliersAnalysis, allProjectsAnalysis, requestParams]);

  const months = [
    { label: "Jan", value: 1 },
    { label: "Feb", value: 2 },
    { label: "Mar", value: 3 },
    { label: "Apr", value: 4 },
    { label: "May", value: 5 },
    { label: "June", value: 6 },
    { label: "July", value: 7 },
    { label: "Aug", value: 8 },
    { label: "Sep", value: 9 },
    { label: "Oct", value: 10 },
    { label: "Nov", value: 11 },
    { label: "Dec", value: 12 },
  ];

  const year = [
    { label: "2019", value: 2019 },
    { label: "2020", value: 2020 },
    { label: "2021", value: 2021 },
    { label: "2022", value: 2022 },
  ];

  const mapValues = (analysisArray) => {
    let labelArray = [];
    let costArray = [];
    let backgroundArray = [];
    let totalCost = 0;
    analysisArray.forEach((element, index) => {
      labelArray.push(element?.supplier?.name || element.project?.name);
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

  const state = {
    labels: label,
    datasets: [
      {
        data: cost,
        backgroundColor: backgroundColors,
      },
    ],
  };

  const formValuesChanged = (allValues) => {
    setRequestParams(allValues);
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
            labelString: "Cost",
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
            labelString:
              requestParams.type == "suppliers" ? "Suppliers" : "Projects",
          },
          barPercentage: 0.4,
        },
      ],
    },
  };

  return (
    <ChartCard style={{ position: "relative" }}>
      <div style={{ height: "12%" }}>
        <CardTitle style={{ margin: "0px 0px 4px 0px" }}>
          <div>Cost Estimation</div>
          <div>
            <Form
              layout={"inline"}
              form={form}
              onValuesChange={(value, allValues) =>
                formValuesChanged(allValues)
              }
              initialValues={requestParams}
            >
              <Form.Item name={["month"]}>
                <Select style={{ width: 80 }} options={months}></Select>
              </Form.Item>
              <Form.Item name={["year"]}>
                <Select style={{ width: 80 }} options={year}></Select>
              </Form.Item>
              <Form.Item name={["type"]}>
                <Select style={{ width: 105 }}>
                  <Option value="projects">Projects</Option>
                  <Option value="suppliers">Suppliers</Option>
                </Select>
              </Form.Item>
            </Form>
          </div>
          <div>Total Amount {totalAmount}</div>
        </CardTitle>
      </div>
      <div style={{ height: "85%" }}>
        <Bar data={state} options={options} />
      </div>
    </ChartCard>
  );
};

export default CostEstimation;
