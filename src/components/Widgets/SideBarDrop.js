import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Dropdown, Menu } from "semantic-ui-react";

class SideBarDrop extends Component {
  state = {};
  render() {
    return (
      <Menu.Item inverted>
        <Dropdown text="Services" pointing="up">
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link
                to="/services#residential"
                onClick={this.props.handleSidebarHide}
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
                onClick={this.props.handleSidebarHide}
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
                onClick={this.props.handleSidebarHide}
                style={{
                  color: "black"
                }}
              >
                Contracting
              </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    );
  }
}

export default SideBarDrop;
