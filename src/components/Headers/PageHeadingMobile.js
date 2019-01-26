import React, { Component } from "react";

import { Container, Header } from "semantic-ui-react";

import GenerateHeader from "./GenerateHeader";

class PageHeadingMobile extends Component {
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
            marginTop: "1.5em"
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
            marginTop: "0.5em",
            marginBottom: "1.75em"
          }}
        >
          {GenerateHeader(this.state.page).descText}
        </Header>
      </Container>
    );
  }
}

export default PageHeadingMobile;
