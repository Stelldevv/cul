import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, Menu } from "semantic-ui-react";

const NavBarDrop = () =>
  <Menu.Item
    inverted
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0.86em 1em",
      margin: "0em 0.5em"
    }}
  >
    <Dropdown text="Services" pointing="down">
      <Dropdown.Menu>
        <Dropdown.Item>
          <Link
            to="/services#residential"
            style={{
              color: "black"
            }}
          >
            Residential
          </Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link
            to="/services#commercial"
            style={{
              color: "black"
            }}
          >
            Commercial
          </Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link
            to="/services#contracting"
            style={{
              color: "black"
            }}
          >
            Contracting
          </Link>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </Menu.Item>;

export default NavBarDrop;