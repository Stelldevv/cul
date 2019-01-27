import React from "react";

import Gallery from "react-photo-gallery";

import testPic1 from "../../assets/images/testpic1.jpeg";
import testPic2 from "../../assets/images/testpic2.jpeg";
import testPic3 from "../../assets/images/testpic3.jpeg";
import testPic4 from "../../assets/images/testpic4.jpg";
import testPic5 from "../../assets/images/testpic5.jpeg";
import testPicWide from "../../assets/images/testpicWide.jpeg";
import testPicWide2 from "../../assets/images/testpicWide2.jpeg";
import testPicTall from "../../assets/images/testpicTall.jpeg";

class ReactGallery extends React.Component {
  render() {
    return <Gallery photos={PHOTO_SET} />;
  }
}
const PHOTO_SET = [
  {
    src: testPic1,
    width: 4,
    height: 3
  },
  {
    src: testPic2,
    width: 1,
    height: 1
  },
  {
    src: testPicWide,
    width: 4,
    height: 3
  },
  {
    src: testPic4,
    width: 4,
    height: 3
  },
  {
    src: testPicTall,
    width: 4,
    height: 3
  },
  {
    src: testPic1,
    width: 4,
    height: 3
  },
  {
    src: testPicWide2,
    width: 4,
    height: 3
  },
  {
    src: testPic2,
    width: 1,
    height: 1
  },
  {
    src: testPic5,
    width: 1,
    height: 1
  }
];

export default ReactGallery;
