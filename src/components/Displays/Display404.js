import React from "react";
import { Button, Container, Header, Image, Segment } from "semantic-ui-react";

import Pupper1 from "../../assets/images/AtLeastYouDontLookLikeABudgetEwok.jpg";
import Pupper2 from "../../assets/images/AtLeastYouHaveASmallerForeHeadThanThisGuy.jpg";
import Pupper3 from "../../assets/images/AtLeastYoureNotAFuzzyPupper.jpg";

const GeneratePupper = () => {
  var i = Math.floor(Math.random() * 3 + 1);
  if (i === 1) {
    return Pupper1;
  } else if (i === 2) {
    return Pupper2;
  } else if (i === 3) {
    return Pupper3;
  }
};

const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

class Display404 extends React.Component {
  state = {};

  render() {
    return (
      <Segment
        textAlign="center"
        style={{ padding: "5em 0em", minHeight: "550px" }}
        vertical
      >
        <Container
          style={{
            padding: "0em 1em"
          }}
          textAlign="center"
          text
        >
          <Header
            as="h3"
            textAlign="center"
            style={{ fontSize: "2em", marginBottom: "1em" }}
          >
            404 - Page Not Found
          </Header>
          Uh Oh! I think you got lost. <br /> Don't be sad - here's a puppy!
          <Image
            src={GeneratePupper()}
            centered
            size="medium"
            style={{
              padding: "3em 0"
            }}
          />
          When you're ready, click the button below! <br />
          <Button
            animated="fade"
            size="large"
            style={{
              marginTop: "3em",
              fontSize: "1em"
            }}
            onClick={scrollToTop}
          >
            <a href="/">
              <Button.Content visible>Return Home</Button.Content>
              <Button.Content hidden>Bye, 404 Pupper!</Button.Content>
            </a>
          </Button>
        </Container>
      </Segment>
    );
  }
}

export default Display404;
