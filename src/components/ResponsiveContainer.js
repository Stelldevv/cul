import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";

import {
  Button,
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";

import GenerateHeader from "./Headers/GenerateHeader";

import NavBarDrop from "./Widgets/NavBarDrop";
import SideBarDrop from "./Widgets/SideBarDrop";
import PageRouting from "./Routing/PageRouting";
import PageRoutingMobile from "./Routing/PageRoutingMobile";

const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

class DesktopContainer extends Component {
  state = { page: "home" };

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });
  setPage = pageName => this.setState({ page: pageName });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;
    const { headerImage } = GenerateHeader(this.state.page);

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            style={{
              maxHeight: "900px",
              padding: "0em 0em",
              background: "url(" + headerImage + ") no-repeat center center",
              webkitBackgroundSize: "cover",
              backgroundSize: "cover"
            }}
            vertical
          >
            <Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
              style={{
                backgroundColor: "#262626",
                padding: "0.5em 0em"
              }}
            >
              <Container>
                <Menu.Item>
                  <Link to="/">Home</Link>
                </Menu.Item>
                <NavBarDrop />
                <Menu.Item>
                  <Link to="/about">About</Link>
                </Menu.Item>
                <Menu.Item position="right">
                  <Button
                    inverted={!fixed}
                    primary={fixed}
                    style={{ marginLeft: "0.5em" }}
                  >
                    <Link
                      to="/estimate"
                      style={{
                        color: "white"
                      }}
                    >
                      Free Estimate!
                    </Link>
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <PageRouting setPage={this.setPage} />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });
  handleToggle = () => this.setState({ sidebarOpened: true });
  setPage = pageName => this.setState({ page: pageName });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;
    const { headerImageMobile } = GenerateHeader(this.state.page);

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation="push"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item active>
            <Link to="/" onClick={this.handleSidebarHide}>
              Home
            </Link>
          </Menu.Item>
          <SideBarDrop handleSidebarHide={this.handleSidebarHide} />
          <Menu.Item>
            <Link to="/about" onClick={this.handleSidebarHide}>
              About
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/estimate" onClick={this.handleSidebarHide}>
              Quote Me!
            </Link>
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign="center"
            style={{
              maxHeight: 500,
              padding: "1em 0em",
              background:
                "url(" + headerImageMobile + ") no-repeat center center",
              webkitBackgroundSize: "cover",
              backgroundSize: "cover"
            }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>
                <Menu.Item position="right">
                  <Button inverted style={{ marginLeft: "0.5em" }}>
                    <Link
                      to="/estimate"
                      style={{
                        color: "white"
                      }}
                    >
                      Quote Me!
                    </Link>
                  </Button>
                </Menu.Item>
              </Menu>
            </Container>
            <PageRoutingMobile setPage={this.setPage} />
          </Segment>
          {children}
        </Sidebar.Pusher>
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
};

const ResponsiveContainer = ({ children }) =>
  <div>
    <DesktopContainer>
      {children}
    </DesktopContainer>
    <MobileContainer>
      {children}
    </MobileContainer>
  </div>;

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

export default ResponsiveContainer;
