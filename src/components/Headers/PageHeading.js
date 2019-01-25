import React, { Component } from "react";

import { Container, Header } from "semantic-ui-react";

import GenerateHeader from "./GenerateHeader";

class PageHeading extends Component {
  state = { page: this.props.page };

  render() {
    return (
      <Container text>
        <Header
          as="h1"
          inverted
          style={{
            fontSize: "3.5em",
            fontWeight: "normal",
            marginBottom: 0,
            marginTop: "1em"
          }}
        >
          {GenerateHeader(this.state.page).titleText}
        </Header>
        <Header
          as="h2"
          inverted
          style={{
            fontSize: "1.7em",
            fontWeight: "normal",
            marginTop: "1.5em",
            marginBottom: "1em"
          }}
        >
          {GenerateHeader(this.state.page).descText}
        </Header>
      </Container>
    );
  }
}

export default PageHeading;
