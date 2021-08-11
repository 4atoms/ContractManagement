import React, { useState, useEffect } from "react";
import { any, shape, bool } from "prop-types";
import { ErrorBoundary } from "react-error-boundary";
import { Result, Button } from "antd";
import ApiErrorHandler from "Components/apiErrorHandler";

const RefErrorBoundary = (props) => {
  const { children, store, history } = props;

  const [content, setContent] = useState(null);

  useEffect(() => {
    setContent(children);
  }, []);

  // eslint-disable-next-line no-unused-vars
  const errorFallbackComponent = ({ error, resetErrorBoundary }) => {
    // if (error.status == "401") {
    //   history.push("/login");
    //   return <></>;
    // } else
    return (
      <Result
        status="warning"
        title={"Oops, Something went wrong!"}
        extra={
          <Button type="primary" onClick={resetErrorBoundary}>
            Refresh
          </Button>
        }
      />
    );
  };

  return (
    <ErrorBoundary
      FallbackComponent={errorFallbackComponent}
      onReset={() => history.go(0)}
    >
      {content}
      <ApiErrorHandler store={store} />
    </ErrorBoundary>
  );
};

RefErrorBoundary.propTypes = {
  children: any.isRequired,
  store: shape({}).isRequired,
  actions: shape({}).isRequired,
  history: shape({}),
  allowForUser: bool,
  allowForAdmin: bool,
};

export default RefErrorBoundary;
