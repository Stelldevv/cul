import React from "react";
import { Button, Container, Grid, Header, Segment } from "semantic-ui-react";

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
            marginTop: "1.5em"
          }}
        >
          <Grid.Column
            style={{
              textAlign: "center"
            }}
          >
            <Button
              size="medium"
              href="tel:+1-503-375-6341"
              style={{
                margin: "1em 2em"
              }}
            >
              (503) 375-6341
            </Button>
            <Button
              size="medium"
              href="mailto:swoacruz@gmail.com"
              style={{
                margin: "1em 2em"
              }}
            >
              swoacruz@gmail.com
            </Button>
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
  );
};

export default DisplayContact;
