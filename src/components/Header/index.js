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
            <a href="consultants">Consultants</a>
          </Link>
          <Link>
            <a href="suppliers">Suppliers</a>
          </Link>
          <Link>
            <a href="suppliersnew">SuppliersNew</a>
          </Link>
          <Link>
            <a href="contracts">Contracts</a>
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
