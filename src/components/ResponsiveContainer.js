import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";

import {
  Button,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";

import GenerateHeader from "./Headers/GenerateHeader";
import PageRouting from "./Routing/PageRouting";
import PageRoutingMobile from "./Routing/PageRoutingMobile";
import ScrollUpButton from "react-scroll-up-button";
import NavBar from "./Widgets/NavBar";

const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
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
        <Visibility once={false}>
          <div />
          <Segment
            inverted
            textAlign="center"
            style={{
              minHeight: "700px",
              padding: "0em 0em",
              backgroundImage: "url(" + headerImage + ")",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              WebkitBackgroundSize: "cover",
              MozBackgroundSize: "cover",
              OBackgroundSize: "cover",
              backgroundSize: "cover"
            }}
            vertical
          >
            <Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              style={{
                backgroundColor: "#262626"
              }}
            >
              <NavBar />
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
    const { headerImageMobile } = GenerateHeader(this.state.page, "mobile");
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
          <Menu.Item>
            <Link to="/services" onClick={this.handleSidebarHide}>
              Services
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/about" onClick={this.handleSidebarHide}>
              About
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/contact" onClick={this.handleSidebarHide}>
              Contact Us
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/estimate" onClick={this.handleSidebarHide}>
              Service Estimate
            </Link>
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign="center"
            style={{
              minHeight: "400px",
              padding: "0em",
              backgroundImage: "url(" + headerImageMobile + ")",
              WebkitBackgroundSize: "cover",
              MozBackgroundSize: "cover",
              OBackgroundSize: "cover",
              backgroundSize: "cover"
            }}
            vertical
          >
            <div
              style={{
                backgroundColor: "#262626",
                margin: "0"
              }}
            >
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
                      Free Estimate
                    </Link>
                  </Button>
                </Menu.Item>
              </Menu>
            </div>
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
    <ScrollUpButton ShowAtPosition={700} AnimationDuration={1500} />
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
