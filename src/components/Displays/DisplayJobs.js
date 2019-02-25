import React from "react";
import { Button, Container, Header, Segment } from "semantic-ui-react";

const DisplayJobs = () => {
  return (
    <Container>
      <Segment
        style={{ padding: "5em 0em", marginBottom: "2em", borderRadius: "1em" }}
        raised
      >
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
              size="large"
              href="tel:+1-503-375-6341"
              style={{
                marginTop: "1em",
                backgroundColor: "#00cc00",
                color: "white"
              }}
            >
              <b>(503) 375-6341</b>
            </Button>
          </Header>
        </Container>
      </Segment>
    </Container>
  );
};

export default DisplayJobs;
