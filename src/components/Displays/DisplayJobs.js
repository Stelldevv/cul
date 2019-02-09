import React from "react";
import { Button, Container, Header, Segment } from "semantic-ui-react";

const DisplayJobs = () => {
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
          Ready to get your hands dirty?
        </Header>
        <div style={{ fontSize: "1.33em" }}>
          If you think you have what it takes to join the team, then give us a
          call. <br />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1em"
            }}
          >
            Yeah. It's that simple.
          </div>
        </div>
        <Header
          as="h3"
          textAlign="center"
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <Button
            href="tel:+1-503-375-6341"
            style={{
              marginTop: "1em"
            }}
          >
            (503) 375-6341
          </Button>
        </Header>
      </Container>
    </Segment>
  );
};

export default DisplayJobs;
