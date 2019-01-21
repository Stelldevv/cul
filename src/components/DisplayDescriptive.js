import React from "react";
import { Button, Container, Divider, Header, Segment } from "semantic-ui-react";

const DisplayDescriptive = () => {
  return (
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Container text>
        <Header as="h3" style={{ fontSize: "2em" }}>
          Let me tell you about bricks.
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          A brick is building material used to make walls, pavements and other
          elements in masonry construction. Traditionally, the term brick
          referred to a unit composed of clay, but it is now used to denote any
          rectangular units laid in mortar. A brick can be composed of
          clay-bearing soil, sand, and lime, or concrete materials. Bricks are
          produced in numerous classes, types, materials, and sizes which vary
          with region and time period, and are produced in bulk quantities. Two
          basic categories of bricks are fired and non-fired bricks.
        </p>
        <Button as="a" size="large">
          Hit me!
        </Button>
        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: "3em 0em", textTransform: "uppercase" }}
        >
          <a href="/">Landscaping 101</a>
        </Divider>
        <Header as="h3" style={{ fontSize: "2em" }}>
          Got wood?
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          Wood has been used as a building material for thousands of years,
          being second only to stone in terms of its rich and storied history in
          the world of construction. The chemical properties of wood are
          inherently complex, but even in spite of this challenge, human beings
          have successfully harnessed the unique characteristics of wood to
          build a seemingly unlimited variety of structures. This exceptionally
          versatile material is commonly used to build houses, shelters and
          boats, but it is also extensively used in the furniture and home decor
          industry as well.
        </p>
        <Button as="a" size="large">
          I do now.
        </Button>
      </Container>
    </Segment>
  );
};

export default DisplayDescriptive;
