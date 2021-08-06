import React from "react";
import { AutoComplete, Input, Button } from "antd";
import logo from "Assets/images/proton-logo.png";
import { PageHeader, LinkComponent, Link, Logo, UserProfile } from "./header.style";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Header = () => {
  return (
    <>
      <PageHeader>
        <Logo>
          <img src={logo} />
        </Logo>
        <LinkComponent>
        <Link>
            <a href="dashboard">Dashboard</a>
          </Link>
          <Link>
            <a href="suppliers">Suppliers</a>
          </Link>
          <Link>
            <a href="consultants">ConsultantsNew</a>
          </Link>
        </LinkComponent>
        <UserProfile>
          Welcome, User <AccountCircleIcon />
        </UserProfile>
      </PageHeader>
    </>
  );
};

export default Header;
