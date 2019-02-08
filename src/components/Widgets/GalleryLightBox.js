import React from "react";
import Gallery from "react-photo-gallery";
import Lightbox from "react-images";
import { Container } from "semantic-ui-react";

function columns(containerWidth) {
  let columns = 2;
  if (containerWidth >= 300) columns = 2;
  if (containerWidth >= 900) columns = 3;
  if (containerWidth >= 1500) columns = 3;
  return columns;
}

class GalleryLightBox extends React.Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  }

  render() {
    const photos = [
      {
        src: this.props.photoPack[0],
        width: 3,
        height: 2
      },
      {
        src: this.props.photoPack[1],
        width: 2,
        height: 3
      },

      {
        src: this.props.photoPack[2],
        width: 3,
        height: 2
      },
      {
        src: this.props.photoPack[3],
        width: 3,
        height: 2
      },
      {
        src: this.props.photoPack[4],
        width: 3,
        height: 2
      },
      {
        src: this.props.photoPack[5],
        width: 2,
        height: 3
      },
      {
        src: this.props.photoPack[6],
        width: 3,
        height: 2
      }
    ];
    return (
      <Container>
        <Gallery
          photos={photos}
          columns={columns}
          onClick={this.openLightbox}
        />
        <Lightbox
          images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </Container>
    );
  }
}

export default GalleryLightBox;
