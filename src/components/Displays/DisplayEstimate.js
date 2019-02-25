import React from "react";
import { Container, Grid, Header, Segment } from "semantic-ui-react";

import EstimateForm from "../Widgets/EstimateForm";

class DisplayEstimate extends React.Component {
  state = {};

  render() {
    return (
      <Container>
        <Segment
          style={{
            padding: "4em 0.5em",
            marginBottom: "2em",
            borderRadius: "1em"
          }}
          raised
        >
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={12}>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  Fill out the form below..
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  ..and we'll get back to you ASAP!
                </p>
                <EstimateForm env={this.props.env} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
    );
  }
}

export default DisplayEstimate;
