import React, { Component } from "react";

import { Container, Header } from "semantic-ui-react";

import GenerateHeader from "./GenerateHeader";

class PageHeading extends Component {
  state = { page: this.props.page };

  componentDidMount() {
    this.props.setPage(this.state.page);
  }

  render() {
    var pageProps = GenerateHeader(this.state.page);
    return (
      <Container text>
        <Header
          as="h1"
          inverted
          style={{
            fontSize: "3.5em",
            fontWeight: "normal",
            marginBottom: 0,
            marginTop: "4em"
          }}
        >
          {pageProps.titleText}
        </Header>
        <Header
          as="h2"
          inverted
          style={{
            fontSize: "1.7em",
            fontWeight: "normal",
            marginTop: "1.5em",
            marginBottom: "1em",
            padding: "0 0 7em 0",
            color: "#99b3ff"
          }}
        >
          {pageProps.descText}
        </Header>
      </Container>
    );
  }
}

export default PageHeading;
