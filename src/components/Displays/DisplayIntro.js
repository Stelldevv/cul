import React from "react";
import { Container, Grid, Header, Segment } from "semantic-ui-react";

import ImageCarousel from "../Widgets/ImageCarousel";

const DisplayIntro = () => {
  return (
    <Container>
      <Segment
        style={{
          padding: "6em 1.5em",
          margin: " 3em 0.5em",
          borderRadius: "1em"
        }}
        raised
      >
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                My name is Cruz, and I'm a seasoned landscaping expert..
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                ..with over 35 years of industry experience. I've taken the time
                to build the expertise necessary to mold difficult projects into
                the kind of excellent results that you'll be proud to show off.
              </p>
              <Header as="h3" style={{ fontSize: "2em" }}>
                While my company specializes in snowplowing, sod, drainage
                systems, and sprinkler installation..
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                ..believe me when I say that we're equipped with the knowledge
                and tools required to get any job done - the right way!
              </p>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <ImageCarousel />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Container>
  );
};

export default DisplayIntro;
