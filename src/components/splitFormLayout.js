import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import { arrayOf, node, shape } from "prop-types";

const SplitFormLayout = ({ children, rowCss = {} }) => {
  const totalGrid = 24;
  const padding = { paddingRight: "15px" };

  const getLayout = () => {
    return Math.floor(totalGrid / children.length);
  };

  const [layout, setLayout] = useState(getLayout());

  useEffect(() => {
    const l = getLayout();
    const elements = React.Children.toArray(children).map((x, idx) => {
      const style = idx < children.length - 1 ? padding : null;
      return (
        <Col key={idx} span={l} style={style}>
          {x}
        </Col>
      );
    });
    setLayout(elements);
  }, [children]);

  return <Row style={rowCss}>{layout}</Row>;
};

SplitFormLayout.propTypes = {
  children: arrayOf(node).isRequired,
  rowCss: shape({}),
};

export default SplitFormLayout;
