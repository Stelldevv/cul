import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Header, Icon } from "semantic-ui-react";

import GenerateHeader from "./GenerateHeader";

class HomePageHeading extends Component {
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
            fontSize: "4em",
            marginBottom: 0,
            marginTop: "3em",
            color: "#262626",
            fontWeight: "bold"
          }}
        >
          {GenerateHeader(this.state.page).titleText}
        </Header>
        <Header
          as="h2"
          inverted
          style={{
            fontSize: "1.7em",
            marginTop: "1.5em",
            marginBottom: "1.5em",
            color: "#262626",
            fontWeight: "bold"
          }}
        >
          {GenerateHeader(this.state.page).descText}
        </Header>
        <Button
          primary
          size="huge"
          style={{
            marginBottom: "10em"
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

export default HomePageHeading;
