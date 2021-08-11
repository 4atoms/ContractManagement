import React, { useEffect, useContext } from "react";
import logo from "Assets/images/proton-logo.png";
import {
  PageHeader,
  LinkComponent,
  LinkTag,
  Logo,
  UserProfile,
} from "./header.style";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import RefContext from "Utilities/refContext";

import Url from "Config/url";

const HeaderBarContent = () => {
  const context = useContext(RefContext);
  const { store, actions } = context;
  const { currentUser } = store;

  useEffect(() => {
    if (!currentUser) {
      actions.fetchCurrentUser();
    }
  }, [currentUser]);

  return (
    <>
      <PageHeader>
        <Logo>
          <Link to={Url.URL_HOME}>
            <img src={logo} />
          </Link>
        </Logo>
        <LinkComponent>
          <LinkTag>
            <Link to={Url.URL_DASHBOARD}>Dashboard</Link>
          </LinkTag>
          <LinkTag>
            <Link to={Url.URL_SUPPLIERS}>Suppliers</Link>
          </LinkTag>
          <LinkTag>
            <Link to={Url.URL_CONSULTANTS}>Consultants</Link>
          </LinkTag>
        </LinkComponent>
        <UserProfile>
          Welcome {currentUser?.firstName || "User"} <AccountCircleIcon />
        </UserProfile>
      </PageHeader>
    </>
  );
};

export default HeaderBarContent;
