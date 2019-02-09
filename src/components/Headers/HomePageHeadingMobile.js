import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Header } from "semantic-ui-react";

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
            marginTop: "2.3em"
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
            marginTop: "0.5em"
          }}
        >
          {GenerateHeader(this.state.page).descText}
        </Header>
        <Link to="/estimate">
          <Button
            primary
            size="medium"
            animated="fade"
            style={{
              marginTop: "2em",
              marginBottom: "4em"
            }}
          >
            <Button.Content
              style={{
                color: "white"
              }}
              visible
            >
              Start your estimate!
            </Button.Content>
            <Button.Content
              style={{
                color: "white"
              }}
              hidden
            >
              Yeah! So much fun!
            </Button.Content>
          </Button>
        </Link>
      </Container>
    );
  }
}

export default HomePageHeadingMobile;
