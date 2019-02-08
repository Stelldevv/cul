import React from "react";
import { Header, Segment } from "semantic-ui-react";
import GalleryLightBox from "../Widgets/GalleryLightBox";

import gallery1 from "../../assets/images/gallery1.jpg";
import gallery2 from "../../assets/images/gallery2.jpg";
import gallery3 from "../../assets/images/gallery3.jpg";
import gallery4 from "../../assets/images/gallery4.jpg";
import gallery5 from "../../assets/images/gallery5.jpg";
import gallery6 from "../../assets/images/gallery6.jpg";
import gallery7 from "../../assets/images/gallery7.jpg";

const photoPack = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7
];

const DisplayGallery = () =>
  <Segment
    style={{
      padding: "1em 0 4em 0"
    }}
    vertical
  >
    <Segment
      style={{
        margin: "2em 0",
        width: "80%",
        paddingBottom: "4em",
        margin: "0 auto"
      }}
      raised
    >
      <Segment
        padded="very"
        style={{
          backgroundColor: "#9dcad2",
          border: "1px solid #3b95a6",
          margin: "0 auto",
          marginBottom: "2em",
          width: "75%"
        }}
        textAlign="center"
      >
        <Header
          as="h2"
          style={{
            fontsize: "2em",
            fontWeight: "bold",
            display: "block",
            marginRight: "0.3em",
            marginBottom: "1em"
          }}
        >
          *Under Renovation*<br />
        </Header>
        Please excuse the crude nature of the gallery. Work is underway to
        "webscape" it into shape. (2/7/2019)
      </Segment>
      <Header
        as="h3"
        textAlign="center"
        style={{ fontSize: "2em", margin: "1.5em 0em" }}
      >
        Check out some of my work!
        <br />
        <span
          style={{
            display: "inline-block",
            marginTop: "1em",
            color: "grey",
            fontSize: "0.55em"
          }}
        >
          (Note: I'm not a photographer.)
        </span>
      </Header>
      <GalleryLightBox photoPack={photoPack} />
    </Segment>
  </Segment>;

export default DisplayGallery;
