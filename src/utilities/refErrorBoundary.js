import React, { useState, useEffect } from "react";
import { any, shape } from "prop-types";
import { ErrorBoundary } from "react-error-boundary";
import { Result, Button } from "antd";
import ApiErrorHandler from "Components/apiErrorHandler";

const RefErrorBoundary = (props) => {
  const { children, store, history } = props;

  const [content, setContent] = useState(null);

  useEffect(() => {
    setContent(children);
  }, []);

  const unauthorizedCard = (error) => {
    return (
      <Result
        status="error"
        title="Sorry, please login again."
        // title={error.error.message}
        // subTitle="Sorry, please login again."
        extra={
          <Button
            type="primary"
            onClick={() => window.location.assign("/login")}
          >
            Login
          </Button>
        }
      />
    );
  };

  // eslint-disable-next-line no-unused-vars
  const errorFallbackComponent = ({ error, resetErrorBoundary }) => {
    return (
      <>
        {error.status === 401 ? (
          unauthorizedCard(error)
        ) : (
          <Result
            status="warning"
            title={"Oops, Something went wrong!"}
            extra={
              <Button type="primary" onClick={resetErrorBoundary}>
                Refresh
              </Button>
            }
          />
        )}
      </>
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
};

export default RefErrorBoundary;
