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
    <Link to="/estimate" onClick={scrollToTop}>
      <Button
        animated="fade"
        size="large"
        style={{
          marginTop: "3em"
        }}
      >
        <Button.Content visible>Start your Estimate!</Button.Content>
        <Button.Content hidden>Oh Yeah!</Button.Content>
      </Button>
    </Link>
  </Container>;

export default EstimateButton;
