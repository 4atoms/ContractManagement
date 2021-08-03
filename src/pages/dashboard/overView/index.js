import React, { useEffect } from "react";
import { CardTitle, OverviewCard, CollectionName } from "../dashboard.style";
import { themeColors } from "Theme";
import {
  Line1,
  CircularBarsContainer,
  Circle,
  CircleText,
  CircleNumber,
} from "Components/common.style";
import { Progress } from "antd";

const OverView = ({ store, actions }) => {
  const { overviewData } = store;

  useEffect(() => {
    if (!overviewData) {
      actions.getOverviewData();
    }
  });

  return (
    <OverviewCard>
      <div
        className="flex"
        style={{ justifyContent: "space-around", textAlign: "center" }}
      >
        <CardTitle>Overview</CardTitle>
        <div>
          <span className="font20">{overviewData?.suppliers || 0}</span>
          <CollectionName>Suppliers</CollectionName>
        </div>
        <div>
          <span className="font20">{overviewData?.consultants || 0}</span>
          <CollectionName>Consultants</CollectionName>
        </div>
        <div>
          <span className="font20">{overviewData?.clients || 0}</span>
          <CollectionName>Clients</CollectionName>
        </div>
        <div>
          <span className="font20">{overviewData?.projects || 0}</span>
          <CollectionName>Projects</CollectionName>
        </div>
      </div>
      <Line1 style={{ margin: "15px 0px" }} />
      <CardTitle>
        <div>Contracts Summary</div> <div>View more</div>
      </CardTitle>
      <CircularBarsContainer
        style={{ margin: "0px 10px", justifyContent: "space-around" }}
      >
        <Circle>
          <Progress
            type="circle"
            percent={100}
            width={90}
            format={() => (
              <div>
                <CircleNumber>
                  {overviewData?.contracts?.active || 0}
                </CircleNumber>
                <CircleText>Ongoing</CircleText>
              </div>
            )}
            strokeColor={themeColors.greenSuccess}
          />
        </Circle>
        <Circle>
          <Progress
            type="circle"
            percent={100}
            width={90}
            style={{ maxWidth: "100%" }}
            format={() => (
              <div>
                <CircleNumber>
                  {overviewData?.contracts?.to_be_renewed || 0}
                </CircleNumber>
                <CircleText>To Renew</CircleText>
              </div>
            )}
            strokeColor={themeColors.orangeWarning}
          />
        </Circle>
        <Circle>
          <Progress
            type="circle"
            percent={100}
            width={90}
            style={{ maxWidth: "100%" }}
            format={() => (
              <div>
                <CircleNumber>
                  {overviewData?.contracts?.upcoming || 0}
                </CircleNumber>
                <CircleText>Upcoming</CircleText>
              </div>
            )}
            strokeColor={themeColors.blueInfo}
          />
        </Circle>
        <Circle>
          <Progress
            type="circle"
            percent={100}
            width={90}
            format={() => (
              <div>
                <CircleNumber>
                  {overviewData?.contracts?.expired || 0}
                </CircleNumber>
                <CircleText>Expired</CircleText>
              </div>
            )}
            strokeColor={themeColors.redDanger}
          />
        </Circle>
      </CircularBarsContainer>
    </OverviewCard>
  );
};
export default OverView;
