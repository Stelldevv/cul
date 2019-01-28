import React from "react";
import { Link } from "react-router-dom";
import { Container, Grid, Header, List, Segment } from "semantic-ui-react";

import ServiceMap from "./Widgets/MapBoxRotate";

const Footer = () => {
  return (
    <Segment inverted vertical style={{ padding: "5em 2em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="About" />
              <List link inverted>
                <List.Item>Business</List.Item>
                <List.Item>
                  <Link to="/contact">Contact Us</Link>
                </List.Item>
                <List.Item>
                  <Link to="/gallery">Gallery</Link>
                </List.Item>
                <List.Item>
                  <Link to="/jobs">Jobs</Link>
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Services" />
              <List link inverted>
                <List.Item as="a">Service Area</List.Item>
                <List.Item as="a">Services Available</List.Item>
                <List.Item as="a">Frequently Asked Questions</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4" inverted>
                Call us today!
              </Header>
              <p>..before someone else does. We're already swamped.</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <ServiceMap />
      </Container>
    </Segment>
  );
};

export default Footer;
