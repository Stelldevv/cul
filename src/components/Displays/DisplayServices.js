import React, { Component } from "react";
import { Container, Segment } from "semantic-ui-react";

import ItemGrid from "../Widgets/ItemGrid";

class DisplayServices extends Component {
  state = {};

  render() {
    return (
      <Container>
        <Segment
          raised
          style={{
            margin: "1em 0.5em"
          }}
        >
          <ItemGrid text={"Residential Services"} section={"residential"} />
        </Segment>
        <Segment
          raised
          style={{
            margin: "1em 0.5em"
          }}
        >
          <ItemGrid text={"Commercial Services"} section={"commercial"} />
        </Segment>
        <Segment
          raised
          style={{
            margin: "1em 0.5em"
          }}
        >
          <ItemGrid text={"Contracting Services"} section={"contracting"} />
        </Segment>
      </Container>
    );
  }
}

export default DisplayServices;
