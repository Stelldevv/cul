import React from "react";
import { Container, Grid, Header, Rating, Segment } from "semantic-ui-react";

import ReviewCarousel from "../Widgets/ReviewCarousel";
import EstimateButton from "../Widgets/EstimateButton";

const DisplayReviews2 = () => {
  return (
    <Container>
      <Segment style={{ padding: "0em", marginBottom: "1em" }} vertical>
        <Grid celled="internally" columns="equal" stackable>
          <Grid.Row textAlign="center">
            <Grid.Column
              width={5}
              style={{
                padding: "7em 1em"
              }}
            >
              <Header as="h3" style={{ fontSize: "2em" }}>
                4.7/5.0
                <br />
                <Rating icon="star" defaultRating={5} maxRating={5} disabled />
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                20 reviews<br /> <b>Thumbtack.com</b>
              </p>
            </Grid.Column>
            <Grid.Column style={{ padding: "4em 8em" }}>
              <ReviewCarousel />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <EstimateButton />
    </Container>
  );
};

export default DisplayReviews2;
