import React from "react";
import { Container, Header, Segment } from "semantic-ui-react";

const DisplayJobs = () => {
  return (
    <Segment style={{ padding: "5em 2em" }} vertical>
      <Container text>
        <Header as="h3" style={{ fontSize: "2em" }}>
          Are you ready to get your hands dirty?
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          If you think you've got what it takes to join our team, then just give
          us a call.
        </p>
        <a href="tel:555-555-5555">555-555-5555</a>
      </Container>
    </Segment>
  );
};

export default DisplayJobs;
