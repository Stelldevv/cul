import React from "react";
import { Button, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

const EstimateButton = () =>
  <Container textAlign="center">
    <Button
      animated="fade"
      size="huge"
      style={{
        marginTop: "3em"
      }}
    >
      <Link to="/estimate" onClick={scrollToTop}>
        <Button.Content visible>Start your Estimate today!</Button.Content>
        <Button.Content hidden>Let's do it!</Button.Content>
      </Link>
    </Button>
  </Container>;

export default EstimateButton;
