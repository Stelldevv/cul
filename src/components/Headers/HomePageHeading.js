import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Header, Icon } from "semantic-ui-react";

class HomePageHeading extends Component {
  state = {};

  render() {
    return (
      <Container text>
        <Header
          as="h1"
          content={"Cruz Urbina Landscapes"}
          inverted
          style={{
            fontSize: "4em",
            fontWeight: "normal",
            marginBottom: 0,
            marginTop: "3em",
            color: "#262626",
            fontWeight: "bold"
          }}
        />
        <Header
          as="h2"
          content="Cruzin' with excellence for over 10 years!"
          inverted
          style={{
            fontSize: "1.7em",
            fontWeight: "normal",
            marginTop: "1.5em",
            marginBottom: "1.5em",
            color: "#262626",
            fontWeight: "bold"
          }}
        />
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
