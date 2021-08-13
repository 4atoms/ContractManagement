import React, { useEffect } from "react";
import { CardTitle, OverviewCard, CollectionName } from "../dashboard.style";
import { themeColors } from "Theme";
import { Line1, CircularBarsContainer } from "Components/common.style";
import { Link } from "react-router-dom";
import { primaryColor } from "Theme";

import Url from "Config/url";

import CircleComponent from "Components/circleComponent";

import ContentLoading from "Components/contentLoading";

const OverView = ({ store, actions }) => {
  const { overviewData } = store;

  useEffect(() => {
    if (!overviewData) {
      actions.getOverviewData();
    }
  });
  const renderContent = () => {
    return (
      <>
        <div
          className="flex"
          style={{ justifyContent: "space-around", textAlign: "center" }}
        >
          <CardTitle>Overview</CardTitle>
          <div>
            <span className="font18">{overviewData?.suppliers || 0}</span>
            <CollectionName>Suppliers</CollectionName>
          </div>
          <div>
            <span className="font18">{overviewData?.consultants || 0}</span>
            <CollectionName>Consultants</CollectionName>
          </div>
          <div>
            <span className="font18">{overviewData?.clients || 0}</span>
            <CollectionName>Clients</CollectionName>
          </div>
          <div>
            <span className="font18">{overviewData?.projects || 0}</span>
            <CollectionName>Projects</CollectionName>
          </div>
        </div>
        <Line1 style={{ margin: "10px 0px" }} />
        <CardTitle>
          <div>Contracts Summary</div>{" "}
          <Link style={{ color: primaryColor }} to={Url.URL_CONSULTANTS}>
            View More
          </Link>
        </CardTitle>
        <CircularBarsContainer style={{ margin: "0 20px" }}>
          <CircleComponent
            number={overviewData?.contracts?.active || 0}
            text="Ongoing"
            color={themeColors.greenSuccess}
          />
          <CircleComponent
            number={overviewData?.contracts?.to_be_renewed || 0}
            text="To Renew"
            color={themeColors.orangeWarning}
          />
          <CircleComponent
            number={overviewData?.contracts?.upcoming || 0}
            text="Upcoming"
            color={themeColors.blueInfo}
          />
          <CircleComponent
            number={overviewData?.contracts?.expired || 0}
            text="Expired"
            color={themeColors.redDanger}
          />
        </CircularBarsContainer>
      </>
    );
  };

  return (
    <OverviewCard>
      <ContentLoading dependencies={[overviewData]} dom={renderContent} />
    </OverviewCard>
  );
};
export default OverView;
