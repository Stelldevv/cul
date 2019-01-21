import PropTypes from "prop-types";
import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";

import DisplayIntro from "./DisplayIntro";
import DisplayReviews from "./DisplayReviews";
import DisplayDescriptive from "./DisplayDescriptive";
import Footer from "./Footer.js";

import {
  Button,
  Container,
  Header,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";

const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

/* eslint-disable react/no-multi-comp */
/* Heads up! PageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
   * such things.
   */
const PageHeading = ({ mobile, headerText }) =>
  <Container text>
    <Header
      as="h1"
      content={headerText}
      inverted
      style={{
        fontSize: mobile ? "2em" : "4em",
        fontWeight: "normal",
        marginBottom: 0,
        marginTop: mobile ? "1.5em" : "3em"
      }}
    />
    <Header
      as="h2"
      content="Cruzin' with excellence for over 10 years!"
      inverted
      style={{
        fontSize: mobile ? "1.5em" : "1.7em",
        fontWeight: "normal",
        marginTop: mobile ? "0.5em" : "1.5em"
      }}
    />
    <Button
      primary
      size="huge"
      style={{
        display: "none"
      }}
    >
      Get a Quote
      <Icon name="right arrow" />
    </Button>
  </Container>;

PageHeading.propTypes = {
  mobile: PropTypes.bool
};

/* Heads up!
   * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
   * It can be more complicated, but you can create really flexible markup.
   */
class DesktopContainer extends Component {
  state = { headerText: headerText };

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
            style={{ minHeight: 700, padding: "1em 0em" }}
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
                <Menu.Item as="a" active>
                  Home
                </Menu.Item>
                <Menu.Item as="a">Work</Menu.Item>
                <Menu.Item as="a">About</Menu.Item>
                <Menu.Item position="right">
                  <Button
                    as="a"
                    inverted={!fixed}
                    primary={fixed}
                    style={{ marginLeft: "0.5em" }}
                  >
                    Quote Me!
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <PageHeading headerText={this.state.headerText} />
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
  state = { headerText: headerText };

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
          <Menu.Item as="a" active>
            Home
          </Menu.Item>
          <Menu.Item as="a">Work</Menu.Item>
          <Menu.Item as="a">About</Menu.Item>
          <Menu.Item as="a">Quote Me!</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 350, padding: "1em 0em" }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>
                <Menu.Item position="right">
                  <Button as="a" inverted style={{ marginLeft: "0.5em" }}>
                    Quote Me!
                  </Button>
                </Menu.Item>
              </Menu>
            </Container>
            <PageHeading mobile headerText={this.state.headerText} />
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

const ResponsiveContainer = ({ children, headerText }) =>
  <div>
    <DesktopContainer headerText={headerText}>
      {children}
    </DesktopContainer>
    <MobileContainer headerText={headerText}>
      {children}
    </MobileContainer>
  </div>;

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

class App extends React.Component {
  state = {
    headerText: "[Text Goes Here]"
  };

  render() {
    return (
      <Router history={history}>
        <Switch>
          <ResponsiveContainer headerText={this.state.headerText}>
            <Route path="/" exact component={DisplayIntro} />
            <Route path="/" exact component={DisplayReviews} />
            <Route path="/" exact component={DisplayDescriptive} />
            <Route path="/" component={Footer} />
          </ResponsiveContainer>
        </Switch>
      </Router>
    );
  }
}

export default App;
