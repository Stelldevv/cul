import React from "react";
import { Link } from "react-router-dom";
import { Container, Grid, Header, List, Segment } from "semantic-ui-react";
import { StyleRoot } from "radium";

import ServiceMap from "./Widgets/MapBox";

const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

const Footer = () => {
  return (
    <StyleRoot>
      <Segment inverted vertical style={{ padding: "5em 2em" }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="About" />
                <List link inverted>
                  <List.Item>
                    <Link to="/gallery" onClick={scrollToTop}>
                      Gallery
                    </Link>
                  </List.Item>
                  <List.Item>
                    <Link to="/jobs" onClick={scrollToTop}>
                      Employment
                    </Link>
                  </List.Item>
                  <List.Item>
                    <Link to="/contact" onClick={scrollToTop}>
                      Contact Us
                    </Link>
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Services" />
                <List link inverted>
                  <List.Item>
                    <Link to="/services" onClick={scrollToTop}>
                      Services Available
                    </Link>
                  </List.Item>
                  <List.Item>
                    <Link to="/faq" onClick={scrollToTop}>
                      FAQ
                    </Link>
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as="h4" inverted>
                  Call us today!
                </Header>
                <p>
                  ..before someone else does. <br /> We're already swamped.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <ServiceMap />
        </Container>
      </Segment>
    </StyleRoot>
  );
};

export default Footer;
