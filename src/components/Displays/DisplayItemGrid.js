import React, { Component } from "react";
import { Container } from "semantic-ui-react";

import ItemGrid from "../Widgets/ItemGrid";

class DisplayItemGrid extends Component {
  state = {};

  render() {
    return (
      <Container>
        <ItemGrid text={"Residential Service"} section={"residential"} />
        <ItemGrid text={"Commercial Service"} section={"commercial"} />
        <ItemGrid text={"Contracting Service"} section={"contracting"} />
      </Container>
    );
  }
}

export default DisplayItemGrid;
