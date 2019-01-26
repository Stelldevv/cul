import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Header, Icon } from "semantic-ui-react";

import GenerateHeader from "./GenerateHeader";

class HomePageHeadingMobile extends Component {
  state = { page: this.props.page };

  componentDidMount() {
    this.props.setPage(this.state.page);
  }

  render() {
    return (
      <Container text>
        <Header
          as="h1"
          inverted
          style={{
            fontSize: "2em",
            fontWeight: "normal",
            marginBottom: 0,
            marginTop: "2em"
          }}
        >
          {GenerateHeader(this.state.page).titleText}
        </Header>
        <Header
          as="h2"
          inverted
          style={{
            fontSize: "1.5em",
            fontWeight: "normal",
            marginTop: "0.5em"
          }}
        >
          {GenerateHeader(this.state.page).descText}
        </Header>
        <Button
          primary
          size="medium"
          style={{
            marginTop: "1em",
            marginBottom: "5em"
          }}
        >
          <Link
            to="/estimate"
            style={{
              color: "white"
            }}
          >
            Get a Quote
          </Link>
          <Icon name="right arrow" />
        </Button>
      </Container>
    );
  }
}

export default HomePageHeadingMobile;
