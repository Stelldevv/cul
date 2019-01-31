import React from "react";
import { Container, Grid, Header, Segment } from "semantic-ui-react";

const DisplayContact = () => {
  return (
    <Segment style={{ padding: "5em 0em" }} vertical>
      <Container
        style={{
          padding: "0em 1em"
        }}
        text
      >
        <Header
          as="h3"
          textAlign="center"
          style={{ fontSize: "2em", marginBottom: "1em" }}
        >
          Reach out to us by phone or email!
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          We serve Salem, OR and the surrounding area. Check out our map to the
          bottom right to get a look at our service area (highlighted in green).
          <br /> If you have any doubts about your location, just give us a
          call!
        </p>
        <Grid
          style={{
            marginTop: "3em"
          }}
        >
          <Grid.Column width={8}>
            <Header as="h3" textAlign="center">
              <a
                href="tel:+1-xxx-xxx-xxxx"
                style={{
                  marginTop: "1em",
                  backgroundColor: "#0033cc",
                  color: "white",
                  width: "12em",
                  padding: "1em"
                }}
              >
                (123) 456-7890
              </a>
            </Header>
          </Grid.Column>
          <Grid.Column floated="right" width={8}>
            <Header as="h3" textAlign="center">
              <a
                href="mailto:swoacruz@gmail.com"
                style={{
                  marginTop: "1em",
                  backgroundColor: "#009933",
                  color: "white",
                  width: "12em",
                  padding: "1em"
                }}
              >
                swoacruz@gmail.com
              </a>
            </Header>
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
  );
};

export default DisplayContact;
