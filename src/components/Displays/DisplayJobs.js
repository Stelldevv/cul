import React from "react";
import { Container, Header, Segment } from "semantic-ui-react";

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
        <p style={{ fontSize: "1.33em" }}>
          If you think you have what it takes to join the team, then give us a
          call.
        </p>
        <Header
          as="h3"
          textAlign="center"
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <a
            href="tel:+1-xxx-xxx-xxxx"
            style={{
              marginTop: "1em",
              backgroundColor: "teal",
              color: "white",
              width: "12em",
              padding: "1em"
            }}
          >
            (123) 456-7890
          </a>
        </Header>
      </Container>
    </Segment>
  );
};

export default DisplayJobs;
