import React from "react";
import { Header, Segment } from "semantic-ui-react";
import GalleryLightBox from "../Widgets/GalleryLightBox";

import testPic1 from "../../assets/images/testpic1.jpeg";

import testPic3 from "../../assets/images/testpic3.jpeg";
import testPic5 from "../../assets/images/testpic5.jpeg";
import testPicWide from "../../assets/images/testpicWide.jpeg";
import testPicWide2 from "../../assets/images/testpicWide2.jpeg";
import testPicTall from "../../assets/images/testpicTall.jpeg";

const photoPack = [
  testPic1,
  testPic3,
  testPicTall,
  testPic5,
  testPicWide2,
  testPicWide
];

const DisplayGallery = () =>
  <Segment style={{ padding: "1em 0 8em 0" }} vertical>
    <Header
      as="h3"
      textAlign="center"
      style={{ fontSize: "2em", margin: "3em 0em" }}
    >
      Residential Landscaping
    </Header>
    <GalleryLightBox photoPack={photoPack} />
    <Header
      as="h3"
      textAlign="center"
      style={{ fontSize: "2em", margin: "3em 0em" }}
    >
      Commercial Landscaping
    </Header>
    <GalleryLightBox photoPack={photoPack} />
    <Header
      as="h3"
      textAlign="center"
      style={{ fontSize: "2em", margin: "3em 0em" }}
    >
      Contracting Work
    </Header>
    <GalleryLightBox photoPack={photoPack} />
  </Segment>;

export default DisplayGallery;
