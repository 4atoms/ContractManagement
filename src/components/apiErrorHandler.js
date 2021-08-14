import React, { useEffect } from "react";
import { shape } from "prop-types";
import { notification } from "antd";
import { useErrorHandler } from "react-error-boundary";

const ApiErrorHandler = ({ store }) => {
  const handleError = useErrorHandler();

  const mapApiErrors = () => {
    return Object.values(store).map((x) => x.apiError);
  };

  const getErrorMessage = (errorData) => {
    if (errorData.error) {
      if (typeof errorData.error === "object" && errorData.error?.message) {
        return errorData.error?.message;
      } else if (typeof errorData.error === "string") {
        return errorData.error;
      } else if (errorData?.error?.keyPattern) {
        return (
          "This " +
          Object.keys(errorData.error.keyPattern)[0] +
          " already available"
        );
      }
    }
    return "";
  };

  useEffect(() => {
    const errorData = mapApiErrors().find((x) => !!x);
    if (errorData) {
      notification.error({
        message: `API failed`,
        description: getErrorMessage(errorData) || "",
      });

      if (errorData.status !== 400) {
        handleError(errorData);
      }
    }
  }, [...mapApiErrors()]);

  return <></>;
};

ApiErrorHandler.propTypes = {
  store: shape({}),
};

ApiErrorHandler.defaultProps = {
  apiError: undefined,
};

export default ApiErrorHandler;
