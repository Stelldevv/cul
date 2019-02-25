import React, { Component } from "react";
import { Container, Header, Segment } from "semantic-ui-react";

import ItemGrid from "../Widgets/ItemGrid";

class DisplayServices extends Component {
  state = {};

  render() {
    return (
      <Container>
        <Segment
          padded="very"
          raised
          style={{
            backgroundColor: "#99b3ff",
            marginTop: "4em",
            borderRadius: "1em"
          }}
        >
          <Header
            as="h2"
            style={{
              fontsize: "2em",
              fontWeight: "bold",
              display: "inline-block",
              marginRight: "0.3em"
            }}
          >
            Cruz Urbina Landscapes
          </Header>
          specializes in Hardscaping (Retaining walls, brickwork, etc),
          sprinklers, and snow removal services. We're also good at a lot of
          other stuff, and we listed the ones we could think of below. If you
          don't see what you're looking for, just give us a call! We can
          probably make it happen.
        </Segment>
        <Segment
          raised
          style={{
            margin: "5em 1em",
            borderRadius: "1em"
          }}
        >
          <ItemGrid text={"Services Available"} />
        </Segment>
      </Container>
    );
  }
}

export default DisplayServices;
