import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Header } from "semantic-ui-react";

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
            color: "white",
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
            color: "white",
            fontWeight: "bold"
          }}
        >
          {GenerateHeader(this.state.page).descText}
        </Header>
        <Button
          primary
          size="huge"
          animated="fade"
          style={{
            marginTop: "2em",
            marginBottom: "7em"
          }}
        >
          <Link to="/estimate">
            <Button.Content
              style={{
                color: "white"
              }}
              visible
            >
              Start your estimate!
            </Button.Content>
          </Link>

          <Link to="/estimate">
            <Button.Content
              style={{
                color: "white"
              }}
              hidden
            >
              Yeah! So much fun!
            </Button.Content>
          </Link>
        </Button>
      </Container>
    );
  }
}

export default HomePageHeading;
