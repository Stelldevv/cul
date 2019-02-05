import React from "react";
import { Divider, Grid, Header, Segment } from "semantic-ui-react";

const DisplayFAQ = () =>
  <React.Fragment>
    <Segment style={{ padding: "2em 0 5em 0" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column textAlign="left">
            <Header as="h2">
              What should the customer know about your pricing (e.g., discounts,
              fees)?
            </Header>
            <p style={{ fontSize: "1.33em" }}>Prices vary based on job.</p>
            <Divider />
            <Header as="h2">
              What is your typical process for working with a new customer?
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              I meet with the customer, answer questions, free estimate, then
              collaborate on the project.
            </p>
            <Divider />
            <Header as="h2">
              How did you get started doing this type of work?
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Studies in college, started with maintaining landscape business.
            </p>
            <Divider />
            <Header as="h2">
              What types of customers have you worked with?
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Professional Builders, Homeowners, and the State of Oregon. I even
              worked with Salem's Governor on a project.
            </p>
            <Divider />
            <Header as="h2">
              Describe a recent project you are fond of. How long did it take?
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Six foot deep water feature with paved patio. It took one month.
            </p>
            <Divider />
            <Header as="h2">
              What advice would you give a customer looking to hire a provider
              in your area of work?
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Make sure they are licensed, insured, and bonded.
            </p>
            <Divider />
            <Header as="h2">
              What questions should customers think through before talking to
              professionals about their project?
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              "Will this violate a Warranty?"
            </p>
            <Divider />
            <Header as="h1">Did I miss your question?</Header>
            <p style={{ fontSize: "1.33em" }}>Shoot me an email!</p>
            <Header as="h3" float="left" style={{ marginTop: "3em" }}>
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
        </Grid.Row>
      </Grid>
    </Segment>
  </React.Fragment>;

export default DisplayFAQ;
