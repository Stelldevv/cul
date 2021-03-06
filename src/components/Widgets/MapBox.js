import React from "react";
import mapboxgl from "mapbox-gl";
import { Container } from "semantic-ui-react";
import Radium from "radium";

import mapMarker from "../../assets/images/mapMarker.png";

mapboxgl.accessToken =
  "pk.eyJ1Ijoic3RlbGxkZXYiLCJhIjoiY2pxaGlqd2ZhMGk0bjN4b2xrcjkyODhmdyJ9.cHE5WWdCPpTg7q29Xo292w";
//Enable with "pk.eyJ1Ijoic3RlbGxkZXYiLCJhIjoiY2pxaGlqd2ZhMGk0bjN4b2xrcjkyODhmdyJ9.cHE5WWdCPpTg7q29Xo292w"

class ServiceMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 5,
      lat: 34,
      zoom: 1.5
    };
  }

  componentDidMount() {
    var map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/stelldev/cjrqvo9g0405b2spbz8hgv4y1",
      center: [-123.0707, 44.949],
      zoom: 5.5,
      bearing: 0,
      pitch: 50,
      interactive: false,
      attributionControl: true
    });

    var geojson = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            message: "Cruz Urbina Landscapes",
            iconSize: [64, 64]
          },
          geometry: {
            type: "Point",
            coordinates: [-123.0707, 44.949]
          }
        }
      ]
    };

    geojson.features.forEach(function(marker) {
      // create a DOM element for the marker
      var el = document.createElement("div");
      el.className = "marker";
      el.style.backgroundImage = "url(" + mapMarker + ")";
      el.style.width = marker.properties.iconSize[0] + "px";
      el.style.height = marker.properties.iconSize[1] + "px";
      el.style.opacity = "0.75";

      // add marker to map
      new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);
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
          bearing: Date.now() / 60 % 360,
          easing: easing
        });
        await sleep(100);
      }
    }

    map.on("load", function() {
      rotateCamera();

      map.addLayer({
        id: "Service Area",
        type: "fill",
        source: {
          type: "geojson",
          data: {
            type: "Feature",
            geometry: {
              type: "Polygon",
              coordinates: [
                [
                  [-123.05957794189453, 43.74084034926642],
                  [-122.90130615234375, 43.74332071724287],
                  [-122.67333984374999, 43.78299262890581],
                  [-122.39593505859376, 43.872158236415416],
                  [-122.1954345703125, 44.01454613545038],
                  [-121.9647216796875, 44.13097085672744],
                  [-121.79168701171875, 44.25897020133368],
                  [-121.62139892578125, 44.38865427337759],
                  [-121.45660400390624, 44.56503415498704],
                  [-121.38725280761719, 44.74185630294231],
                  [-121.35223388671875, 44.950221181527546],
                  [-121.35910034179688, 45.114238385850854],
                  [-121.42639160156249, 45.18590859850545],
                  [-121.51702880859374, 45.44664375276733],
                  [-121.6680908203125, 45.663966415824056],
                  [-121.87957763671874, 45.8536734968093],
                  [-122.200927734375, 46.010316293096196],
                  [-122.57995605468749, 46.069419674968515],
                  [-122.86697387695312, 46.14654013523015],
                  [-123.02764892578125, 46.17127197581503],
                  [-123.17047119140624, 46.18268292219694],
                  [-123.29406738281249, 46.16841886922939],
                  [-123.38882446289061, 46.162712212065664],
                  [-123.47808837890625, 46.155102414967125],
                  [-123.56185913085936, 46.1408312087306],
                  [-123.6346435546875, 46.13036330589106],
                  [-123.71704101562499, 46.11322971817248],
                  [-123.79119873046875, 46.098947658174865],
                  [-123.83651733398438, 46.087519345973455],
                  [-123.87222290039061, 46.066561289451926],
                  [-123.91685485839844, 46.04178241461432],
                  [-123.97796630859375, 45.944465613675035],
                  [-123.97384643554688, 45.48613195107752],
                  [-124.01367187499999, 45.058001435398275],
                  [-124.05487060546875, 44.68818283842486],
                  [-124.06585693359375, 44.5924231071787],
                  [-124.06585693359375, 44.52196830685208],
                  [-124.07684326171874, 44.422011314236634],
                  [-124.09332275390624, 44.319918120477425],
                  [-124.10980224609374, 44.19205137735955],
                  [-124.12628173828126, 44.05995928349327],
                  [-124.134521484375, 43.939439464527474],
                  [-124.04937744140625, 43.89393401411192],
                  [-123.92578125, 43.85631630786513],
                  [-123.81317138671874, 43.83650797709095],
                  [-123.69232177734375, 43.82065657651688],
                  [-123.59069824218749, 43.812729297610915],
                  [-123.51654052734374, 43.8008364060122],
                  [-123.40393066406249, 43.78497553389676],
                  [-123.29132080078125, 43.765143524274066],
                  [-123.17321777343749, 43.7492731811147],
                  [-123.05957794189453, 43.74084034926642]
                ]
              ]
            }
          }
        },
        layout: {},
        paint: {
          "fill-color": "#0b7a19",
          "fill-opacity": 0.5
        }
      });
    });
  }

  render() {
    var style = {
      borderRadius: "10px",
      "@media only screen and (min-width: 768px)": {
        position: "absolute",
        bottom: "0",
        right: "0",
        width: "18em",
        height: "18em",
        margin: "1.5em 6em 1.5em 1.5em"
      },
      "@media only screen and (max-width: 767px)": {
        position: "absolute",
        bottom: "0",
        right: "0",
        width: "25em",
        height: "33em",
        margin: "0em 4em 7em 0em"
      },
      "@media only screen and (max-width: 600px)": {
        position: "absolute",
        top: "0",
        right: "0",
        width: "16em",
        height: "16em",
        margin: "7em 2em 0em 0em"
      },
      "@media only screen and (max-width: 400px)": {
        position: "absolute",
        top: "0",
        right: "0",
        width: "15em",
        height: "15em",
        margin: "7em 2em 0em 0em"
      },
      "@media only screen and (max-width: 325px)": {
        position: "absolute",
        top: "0",
        right: "0",
        width: "12em",
        height: "12em",
        margin: "7em 2em 0em 0em"
      }
    };
    return (
      <Container>
        <script src="https://api.tiles.mapbox.com/mapbox-gl-js/v0.52.0/mapbox-gl.js" />
        <link
          href="https://api.tiles.mapbox.com/mapbox-gl-js/v0.52.0/mapbox-gl.css"
          rel="stylesheet"
        />
        <div id="map" style={style}>
          <div id="liveMap" ref={el => (this.mapContainer = el)} />
        </div>
      </Container>
    );
  }
}

ServiceMap = Radium(ServiceMap);

export default ServiceMap;
