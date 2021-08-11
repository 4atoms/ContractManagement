import React from "react";
import { shape } from "prop-types";
import RefProvider from "Utilities/refProvider";
import HeaderBarContent from "./header";
import { formStoreData } from "Utilities/helpers";

// eslint-disable-next-line no-unused-vars
let components;

const Header = (props) => {
  const propShape = formStoreData(props, ["auth"]);

  return (
    <>
      <RefProvider data={propShape}>
        <HeaderBarContent />
      </RefProvider>
    </>
  );
};

Header.propTypes = {
  store: shape({}).isRequired,
  actions: shape({}).isRequired,
  location: shape({}).isRequired,
  history: shape({}).isRequired,
};

export default Header;
