import React from "react";
import { Grid, Header, Segment } from "semantic-ui-react";

import EstimateForm from "../Widgets/EstimateForm";

const DisplayAbout = () =>
  <Segment style={{ padding: "8em 0em" }} vertical>
    <Grid container stackable verticalAlign="middle">
      <Grid.Row>
        <Grid.Column width={12}>
          <Header as="h3" style={{ fontSize: "2em" }}>
            Fill out the form below..
          </Header>
          <p style={{ fontSize: "1.33em" }}>
            ..and we'll get back to you ASAP!
          </p>
          <EstimateForm floated="center" />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>;

export default DisplayAbout;
