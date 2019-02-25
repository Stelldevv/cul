import React from "react";
import { Button, Container, Grid, Header, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

import aboutPic1 from "../../assets/images/gallery5.jpg";
//import aboutPic2 from "../../assets/images/gallery6.jpg";

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
    <Header
      as="h2"
      textAlign="center"
      style={{
        fontSize: "2.5em",
        margin: "2em 0em",
        textShadow: "2px 2px 6px grey"
      }}
    >
      "In my 35 years of landscaping, I've learned something.."
    </Header>

    <Segment
      style={{
        background: "url(" + aboutPic1 + ") no-repeat center center fixed",
        WebkitBackgroundSize: "cover",
        MozBackgroundSize: "cover",
        OBackgroundSize: "cover",
        backgroundSize: "cover"
      }}
    >
      <Container>
        <Segment
          style={{
            backgroundColor: "rgba(48, 48, 48, 0.78)",
            margin: "1.5em",
            padding: "1em",
            paddingTop: "3em",
            textAlign: "center",
            color: "white",
            minHeight: "18em"
          }}
        >
          <p
            style={{
              fontSize: "1.5em",
              margin: "1em 0.5em"
            }}
          >
            "..I've learned that it's my job to do a great job. That job isn't
            done until both parties are happy with the quality of work, because
            my reputation and livelihood depend on that quality. I know that if
            I take care of you, then I get taken care of. In the age of
            Google/Yelp reviews, I can't afford to be anything less than great,
            and rest assured, I will do great work for you."
          </p>
        </Segment>
      </Container>
    </Segment>
    <Segment>
      <Grid>
        <Grid.Row>
          <Grid.Column
            textAlign="center"
            style={{
              padding: "2em"
            }}
          >
            <Header as="h2" style={{ fontSize: "3em" }}>
              I've been operating in Salem for over 35 years..
            </Header>
            <Container>
              <p style={{ fontSize: "1.33em" }}>
                ..and that experience shows in my work. I've worked for hundreds
                of homeowners, and I even worked on the capital!<br /> <br />I
                proudly stand behind every project that I do, and you can review
                some of those projects with the button below! <br /> <br />My
                license number is LCB #6881.
              </p>
            </Container>

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
                Some of my past work
              </Link>
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment
      style={{
        paddingBottom: "3em",
        backgroundColor: "white"
      }}
    >
      <Grid>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Header
              as="h2"
              style={{
                fontSize: "3em",
                marginTop: "1em"
              }}
            >
              I'm ready when you are!
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Let's get started on your dream project.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <EstimateButton />
    </Segment>
  </React.Fragment>;

export default DisplayAbout;
