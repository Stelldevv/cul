import React from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Segment
} from "semantic-ui-react";

const DisplayFAQ = () =>
  <Container>
    <Segment
      style={{
        padding: "2em 0.5em 5em 0.5em",
        marginBottom: "2em",
        borderRadius: "1em"
      }}
      raised
    >
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column textAlign="left">
            <Header
              as="h2"
              style={{
                color: "#0077b3"
              }}
            >
              What should the customer know about your pricing (e.g., discounts,
              fees)?
            </Header>
            <p style={{ fontSize: "1.33em" }}>Prices vary based on job.</p>
            <Divider />
            <Header
              as="h2"
              style={{
                color: "#0077b3"
              }}
            >
              What is your typical process for working with a new customer?
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              I meet with the customer, answer questions, free estimate, then
              collaborate on the project.
            </p>
            <Divider />
            <Header
              as="h2"
              style={{
                color: "#0077b3"
              }}
            >
              How did you get started doing this type of work?
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Studies in college, started with maintaining landscape business.
            </p>
            <Divider />
            <Header
              as="h2"
              style={{
                color: "#0077b3"
              }}
            >
              What types of customers have you worked with?
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Professional Builders, Homeowners, and the State of Oregon. I even
              worked with Salem's Governor on a project.
            </p>
            <Divider />
            <Header
              as="h2"
              style={{
                color: "#0077b3"
              }}
            >
              Describe a recent project you are fond of. How long did it take?
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Six foot deep water feature with paved patio. It took one week. I
              also enjoy working on vineyards!
            </p>
            <Divider />
            <Header
              as="h2"
              style={{
                color: "#0077b3"
              }}
            >
              What advice would you give a customer looking to hire a provider
              in your area of work?
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Make sure they are licensed, insured, and bonded.
            </p>
            <Divider />
            <Header
              as="h2"
              style={{
                color: "#0077b3"
              }}
            >
              What questions should customers think through before talking to
              professionals about their project?
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              "Will this violate a Warranty?"
            </p>
            <Divider />
            <div
              style={{
                textAlign: "center",
                padding: "2em"
              }}
            >
              <Header as="h1">Did I miss your question?</Header>
              <p style={{ fontSize: "1.33em" }}>Shoot me an email!</p>
              <Header as="h3" float="left" style={{ marginTop: "3em" }}>
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
              </Header>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </Container>;

export default DisplayFAQ;
