import React, { useEffect, useState } from "react";
import { CardTitle, ChartCard, CollectionName } from "./../dashboard.style";
import { Select } from "antd";

const CostEstimation = ({ store, actions }) => {
  const { contractListDraft } = store;
  const { Option } = Select;

  useEffect(() => {
    if (!contractListDraft) {
      console.log("came");
      actions.getContractsDataWithQuery({ status: "to_be_renewed" });
    }
  }, []);

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
  ]

  useEffect(() => {}, [contractListDraft]);

  return (
    <ChartCard style={{ position: "relative" }}>
      <div style={{ height: "12%" }}>
        <CardTitle style={{ margin: "0px 0px 4px 0px" }}>
          <div>Cost Estimation</div>
          <div>
            <Select
              defaultValue={7}
              style={{ width: 120, margin: "0px 2px" }}
              onChange={(e) => console.log(e)}
              options={months}
            ></Select>
            <Select
              defaultValue={7}
              style={{ width: 120, margin: "0px 2px" }}
              onChange={(e) => console.log(e)}
              options={year}
            ></Select>
            <Select
              defaultValue="projects"
              style={{ width: 120, margin: "0px 2px" }}
              onChange={(e) => console.log(e)}
            >
              <Option value="projects">Projects</Option>
              <Option value="suppliers">Suppliers</Option>
            </Select>
          </div>
          <div>Total Amount 12,000</div>
        </CardTitle>
      </div>
      <div style={{ height: "85%" }}></div>
    </ChartCard>
  );
};

export default CostEstimation;
