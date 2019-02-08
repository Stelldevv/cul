import React from "react";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import gallery1 from "../../assets/images/gallery1.jpg";
import gallery2 from "../../assets/images/gallery3.jpg";
import gallery3 from "../../assets/images/gallery7.jpg";
import gallery1thumb from "../../assets/images/gallery1thumb.jpg";
import gallery2thumb from "../../assets/images/gallery3thumb.jpg";
import gallery3thumb from "../../assets/images/gallery7thumb.jpg";

class ImageCarousel extends React.Component {
  render() {
    const images = [
      {
        original: gallery1,
        thumbnail: gallery1thumb
      },
      {
        original: gallery2,
        thumbnail: gallery2thumb
      },
      {
        original: gallery3,
        thumbnail: gallery3thumb
      }
    ];

    return (
      <ImageGallery
        autoPlay={true}
        slideInterval={5000}
        slideDuration={1200}
        showFullscreenButton={false}
        showNav={false}
        items={images}
      />
    );
  }
}

export default ImageCarousel;
