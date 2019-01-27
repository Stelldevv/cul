import React from "react";
import { Grid, Header, Image, Segment } from "semantic-ui-react";

import testPic1 from "../../assets/images/testpic1.jpeg";
import testPic2 from "../../assets/images/testpic2.jpeg";
import testPic3 from "../../assets/images/testpic3.jpeg";
import testPic4 from "../../assets/images/testpic4.jpg";
import testPic5 from "../../assets/images/testpic5.jpeg";

const DisplayGallery = () =>
  <Segment style={{ padding: "8em 0em" }} vertical>
    <Header
      as="h3"
      textAlign="center"
      style={{ fontSize: "2em", marginBottom: "1em" }}
    >
      Residential
    </Header>
    <Grid container columns={3}>
      <Grid.Column>
        <Image src={testPic1} />
      </Grid.Column>
      <Grid.Column>
        <Image src={testPic2} />
      </Grid.Column>
      <Grid.Column>
        <Image src={testPic4} />
      </Grid.Column>
    </Grid>
    <Grid container columns={3}>
      <Grid.Column>
        <Image src={testPic4} />
      </Grid.Column>
      <Grid.Column>
        <Image src={testPic3} />
      </Grid.Column>
      <Grid.Column>
        <Image src={testPic1} />
      </Grid.Column>
    </Grid>
    <Grid container columns={3}>
      <Grid.Column>
        <Image src={testPic2} />
      </Grid.Column>
      <Grid.Column>
        <Image src={testPic5} />
      </Grid.Column>
      <Grid.Column>
        <Image src={testPic2} />
      </Grid.Column>
    </Grid>
  </Segment>;

export default DisplayGallery;
