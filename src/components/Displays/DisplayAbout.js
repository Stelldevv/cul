import React from "react";
import { Button, Grid, Header, Image, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

import placeHolder from "../../assets/images/placeholder.png";

import EstimateButton from "../Widgets/EstimateButton";

const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

const DisplayAbout = () =>
  <React.Fragment>
    <Segment style={{ padding: "2em 0 5em 0" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={14}>
            <Header as="h2" style={{ fontSize: "3em" }}>
              When "good" isn't enough.
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              It's my job to do a great job. That job isn't done until we're
              both happy with the quality of the work, because my reputation and
              livelihood rely on that quality. I know that if I take care of
              you, then I get taken care of. In the age of Google/Yelp reviews,
              I can't afford to do anything less than the best, and rest
              assured, I will do great work for you.
            </p>
            <Image
              src={placeHolder}
              style={{
                margin: "5em 0"
              }}
            />
            <Header as="h2" style={{ fontSize: "3em" }}>
              I've been operating in Salem for 15 years..
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              ..and that experience shows in my work. I proudly stand behind
              every project that I do, and you can review some of those with the
              button below!
            </p>
            <Button
              style={{
                marginTop: "1em"
              }}
              size="huge"
            >
              <Link
                to="/gallery"
                onClick={scrollToTop}
                style={{
                  color: "black"
                }}
              >
                My Past Work
              </Link>
            </Button>
            <Image
              src={placeHolder}
              style={{
                margin: "5em 0"
              }}
            />
            <Header as="h2" style={{ fontSize: "3em", marginTop: "1em" }}>
              I'm ready when you are!
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              What do you say? Let's get started on that dream project.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <EstimateButton />
    </Segment>
  </React.Fragment>;

export default DisplayAbout;
