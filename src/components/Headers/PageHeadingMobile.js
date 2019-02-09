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
            marginTop: "3.5em"
          }}
        >
          {GenerateHeader(this.state.page).titleText}
        </Header>
        <Header
          as="h2"
          inverted
          style={{
            fontSize: "1.3em",
            fontWeight: "normal",
            marginTop: "0.5em",
            marginBottom: "1em",
            paddingBottom: "3em"
          }}
        >
          {GenerateHeader(this.state.page).descText}
        </Header>
      </Container>
    );
  }
}

export default PageHeadingMobile;
