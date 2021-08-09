import React from "react";
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

import Url from "Config/url";

const Header = () => {
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
          Welcome, User <AccountCircleIcon />
        </UserProfile>
      </PageHeader>
    </>
  );
};

export default Header;
