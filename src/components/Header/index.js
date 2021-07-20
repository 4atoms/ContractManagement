import React from "react";
import { AutoComplete, Input } from "antd";
import logo from "Assets/images/proton-logo.png";
import { PageHeader, LinkComponent, Link, Logo, Button } from "./header.style";

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
            <a href="contracts">Contracts</a>
          </Link>
          {/* <Link>
            <AutoComplete dropdownMatchSelectWidth={100} style={{ width: 200 }}>
              <Button>
                <Input.Search
                  size="medium"
                  placeholder="search here"
                  enterButton
                />
              </Button>
            </AutoComplete>
          </Link> */}
        </LinkComponent>
      </PageHeader>
    </>
  );
};

export default Header;
