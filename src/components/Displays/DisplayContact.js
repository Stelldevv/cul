import React from "react";
import { Button, Container, Grid, Header, Segment } from "semantic-ui-react";

const DisplayContact = () => {
  return (
    <Container
      style={{
        marginBottom: "2em"
      }}
    >
      <Segment style={{ padding: "5em 0em", borderRadius: "1em" }} raised>
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
            We serve <b>Salem, OR</b> and the surrounding area. Check out our
            map to the bottom right to get a look at our service area
            (highlighted in green).
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
                size="large"
                href="tel:+1-503-375-6341"
                style={{
                  margin: "1em 2em",
                  backgroundColor: "#ff6666",
                  color: "white"
                }}
              >
                (503) 375-6341
              </Button>
              <Button
                size="large"
                href="mailto:swoacruz@gmail.com"
                style={{
                  margin: "1em 2em",
                  backgroundColor: "#0099ff",
                  color: "white"
                }}
              >
                swoacruz@gmail.com
              </Button>
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>
    </Container>
  );
};

export default DisplayContact;
