import React from "react";
import { Grid, Header, Segment, Image } from "semantic-ui-react";

const DisplayReviews = () => {
  return (
    <Segment style={{ padding: "0em" }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              "Hell of a Landscaper!"
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              <b>Salem Times</b> Newspaper
            </p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              "Sometimes it rains, but we have a roof now <br />
              thanks to Cruz Urbina Landscapes."
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              <Image avatar src="https://i.imgur.com/0UjJ7o2.gif" />
              <b>Tom</b> Father of eight, TV Interview on "60-Minutes"
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default DisplayReviews;
