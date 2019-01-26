import React from "react";
import {
  Button,
  Container,
  Grid,
  Header,
  Image,
  Segment
} from "semantic-ui-react";

const DisplayAbout = () =>
  <Segment style={{ padding: "8em 0em" }} vertical>
    <Grid container stackable verticalAlign="middle">
      <Grid.Row>
        <Grid.Column width={8}>
          <Header as="h3" style={{ fontSize: "2em" }}>
            Landscaping and Construction is my specialty.
          </Header>
          <p style={{ fontSize: "1.33em" }}>
            I can drift a mean skid steer. I'll have your home looking great in
            no time! I can build anything. I love crown moulding!
          </p>
          <Header as="h3" style={{ fontSize: "2em" }}>
            I do plants, too!
          </Header>
          <p style={{ fontSize: "1.33em" }}>
            I pick the best hibiscus. Believe me. Nobody in Salem picks hibiscus
            like I do. We have the best hibiscus, don't we folks?
          </p>
        </Grid.Column>
        <Grid.Column floated="right" width={6}>
          <Image
            bordered
            rounded
            size="large"
            src="https://i.imgur.com/0BLIVmV.jpg"
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>;

export default DisplayAbout;
