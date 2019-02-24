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

class Footer extends React.Component {
  state = {};
  render() {
    return (
      <StyleRoot>
        <Segment inverted vertical style={{ padding: "6em 2em " }}>
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
                    <a href="tel:+1-503-375-6341">(503) 375-6341</a> <br />{" "}
                    <br />We're ready for the job.
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </StyleRoot>
    );
  }
}

export default Footer;
