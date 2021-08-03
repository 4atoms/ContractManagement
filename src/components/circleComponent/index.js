import React from "react";
import { Progress } from "antd";
import { Circle, CircleNumber, CircleText, SpaceBar } from "../common.style";
const CircleComponent = (props) => {
  return (
    <>
      <Circle>
        <Progress
          type="circle"
          percent={100}
          width={90}
          style={{ maxWidth: "100%" }}
          format={() => (
            <div>
              <CircleNumber>{props.number}</CircleNumber>
              <CircleText>{props.text}</CircleText>
            </div>
          )}
          strokeColor={props.color}
        />
      </Circle>
      <SpaceBar />
    </>
  );
};

export default CircleComponent;
