import React from "react";
import { Grid, Image } from "semantic-ui-react";

import placeHolder from "../../assets/images/placeholder.png";

const EstimateGridItem = () =>
  <Grid container>
    <Grid.Row>
      <Grid.Column
        mobile={8}
        tablet={5}
        computer={4}
        style={{
          margin: "1em 0"
        }}
      >
        <Image
          src={placeHolder}
          size="medium"
          style={{
            borderRadius: "18px"
          }}
        />
      </Grid.Column>
    </Grid.Row>
  </Grid>;

export default EstimateGridItem;
