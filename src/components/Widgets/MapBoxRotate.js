import React from "react";
import mapboxgl from "mapbox-gl";
import { Container } from "semantic-ui-react";

mapboxgl.accessToken =
  "pk.eyJ1Ijoic3RlbGxkZXYiLCJhIjoiY2pxaGlqd2ZhMGk0bjN4b2xrcjkyODhmdyJ9.cHE5WWdCPpTg7q29Xo292w";

class ServiceMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 5,
      lat: 34,
      zoom: 1.5,
      pitch: 45,
      bearing: 0
    };
  }

  componentDidMount() {
    var map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/dark-v9",
      center: [-87.6298, 41.8781],
      zoom: 5,
      bearing: Date.now() / 1000 % 360,
      pitch: 45,
      interactive: false
    });

    function easing(t) {
      return t * (2 - t);
    }

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function rotateCamera() {
      var i;
      for (i = 1; i > 0; i++) {
        map.easeTo({
          bearing: Date.now() / 100 % 360,
          easing: easing
        });
        await sleep(100);
      }
    }

    map.on("load", function() {
      map.getCanvas().focus();
      rotateCamera();
    });
  }

  render() {
    return (
      <Container
        style={{
          position: "absolute",
          right: "0",
          bottom: "0",
          width: "30em",
          height: "30em"
        }}
      >
        <div
          id="map"
          style={{
            position: "absolute",
            right: "0",
            bottom: "0",
            width: "15em",
            height: "15em",
            margin: "1.5em 1.5em"
          }}
        >
          <div id="liveMap" ref={el => (this.mapContainer = el)} />
        </div>
      </Container>
    );
  }
}

export default ServiceMap;
