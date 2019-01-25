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

import NavBarDrop from "./Widgets/NavBarDrop";
import SideBarDrop from "./Widgets/SideBarDrop";
import PageRouting from "./Routing/PageRouting";
import PageRoutingMobile from "./Routing/PageRoutingMobile";

const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

/* Heads up!
     * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
     * It can be more complicated, but you can create really flexible markup.
     */
class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

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
            style={{ maxHeight: 700, padding: "1em 0em" }}
            vertical
          >
            <Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
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
            <PageRouting />
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

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

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
            style={{ maxHeight: 350, padding: "1em 0em" }}
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
            <PageRoutingMobile />
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
