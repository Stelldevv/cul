import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Header, Icon } from "semantic-ui-react";

class HomePageHeadingMobile extends Component {
  state = {};

  render() {
    return (
      <Container text>
        <Header
          as="h1"
          inverted
          content={"Cruz Urbina Landscapes"}
          style={{
            fontSize: "2em",
            fontWeight: "normal",
            marginBottom: 0,
            marginTop: "2em"
          }}
        />
        <Header
          as="h2"
          content="Cruzin' with excellence for over 10 years!"
          inverted
          style={{
            fontSize: "1.5em",
            fontWeight: "normal",
            marginTop: "0.5em"
          }}
        />
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
