import React, { useEffect } from "react";
import { shape } from "prop-types";

import RefProvider from "Utilities/refProvider";
import RefErrorBoundary from "Utilities/refErrorBoundary";
import { formStoreData } from "Utilities/helpers";


const ConsultantList = (props) => {
  const propShape = formStoreData(props, ["consultant"]);

  useEffect(() => {
    return () => {
      propShape.actions.resetHomeStore();
    };
  }, []);

  return (
    <>
      <RefProvider data={propShape}>
        <RefErrorBoundary {...props}>
          <div>Hello Consultant</div>
        </RefErrorBoundary>
      </RefProvider>
    </>
  );
};

ConsultantList.propTypes = {
  store: shape({}).isRequired,
  actions: shape({}).isRequired,
  location: shape({}).isRequired,
  history: shape({}).isRequired,
};

export default ConsultantList;
