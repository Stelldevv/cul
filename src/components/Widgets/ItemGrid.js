import React, { Component } from "react";
import { Grid, Header, Image, Reveal, Segment } from "semantic-ui-react";

import iconWinterize from "../../assets/images/icons/winterizeEdit.png";
import iconDrainage from "../../assets/images/icons/drainageEdit.png";
import iconGeneralService from "../../assets/images/icons/generalServiceEdit.png";
import iconHardscapes from "../../assets/images/icons/hardscapesEdit.png";
import iconIceRemoval from "../../assets/images/icons/iceRemovalEdit.png";
import iconIrrigation from "../../assets/images/icons/irrigationEdit.png";
import iconSnowPlow from "../../assets/images/icons/snowPlowEdit.png";
import iconSod from "../../assets/images/icons/sodEdit.png";
import iconSprinklers from "../../assets/images/icons/sprinklersEdit.png";
import iconSurfaceCleaning from "../../assets/images/icons/surfaceCleaningEdit.png";
import iconWaterFeature from "../../assets/images/icons/waterFeatureEdit.png";
import iconTurf from "../../assets/images/icons/turfEdit.png";

import revealWinterize from "../../assets/images/icons/revealWinterize.png";
import revealDrain from "../../assets/images/icons/revealDrain.png";
import revealGeneralService from "../../assets/images/icons/revealGeneralService.png";
import revealHardscape from "../../assets/images/icons/revealHardscape.png";
import revealIceRemoval from "../../assets/images/icons/revealIceRemoval.png";
import revealIrrigation from "../../assets/images/icons/revealIrrigation.png";
import revealSnowPlow from "../../assets/images/icons/revealSnowPlow.jpg";
import revealSod from "../../assets/images/icons/revealSod.png";
import revealSprinkler from "../../assets/images/icons/revealSprinkler.png";
import revealSurfaceCleaning from "../../assets/images/icons/revealSurfaceCleaning.png";
import revealWaterFeature from "../../assets/images/icons/revealWaterFeature.png";
import revealTurf from "../../assets/images/icons/revealTurf.png";

import EstimateButton from "../Widgets/EstimateButton";

class ItemGrid extends Component {
  state = {
    title: this.props.text,
    section: this.props.section
  };

  render() {
    const title = this.state.title;
    return (
      <Segment style={{ padding: "1em 1.5em 5em 1.5em" }} vertical>
        <Header
          textAlign="center"
          style={{
            margin: "1em 0em",
            fontSize: "3.5em"
          }}
        >
          {title}
        </Header>
        <Grid container>
          <Grid.Row>
            <Grid.Column
              mobile={8}
              tablet={5}
              computer={4}
              style={{
                margin: "1em 0"
              }}
            >
              <Reveal animated="move up">
                <Reveal.Content visible>
                  <Image
                    src={iconTurf}
                    size="medium"
                    style={{
                      borderRadius: "16px",
                      border: "3px outset grey"
                    }}
                  />
                </Reveal.Content>
                <Reveal.Content hidden>
                  <Image
                    src={revealTurf}
                    size="medium"
                    style={{
                      borderRadius: "19px",
                      border: "3px inset grey"
                    }}
                  />
                </Reveal.Content>
              </Reveal>
            </Grid.Column>
            <Grid.Column
              mobile={8}
              tablet={5}
              computer={4}
              style={{
                margin: "1em 0"
              }}
            >
              <Reveal animated="move up">
                <Reveal.Content visible>
                  <Image
                    src={iconSod}
                    size="medium"
                    style={{
                      borderRadius: "16px",
                      border: "3px outset grey"
                    }}
                  />
                </Reveal.Content>
                <Reveal.Content hidden>
                  <Image
                    src={revealSod}
                    size="medium"
                    style={{
                      borderRadius: "19px",
                      border: "3px inset grey"
                    }}
                  />
                </Reveal.Content>
              </Reveal>
            </Grid.Column>
            <Grid.Column
              mobile={8}
              tablet={5}
              computer={4}
              style={{
                margin: "1em 0"
              }}
            >
              <Reveal animated="move up">
                <Reveal.Content visible>
                  <Image
                    src={iconDrainage}
                    size="medium"
                    style={{
                      borderRadius: "16px",
                      border: "3px outset grey"
                    }}
                  />
                </Reveal.Content>
                <Reveal.Content hidden>
                  <Image
                    src={revealDrain}
                    size="medium"
                    style={{
                      borderRadius: "19px",
                      border: "3px inset grey"
                    }}
                  />
                </Reveal.Content>
              </Reveal>
            </Grid.Column>
            <Grid.Column
              mobile={8}
              tablet={5}
              computer={4}
              style={{
                margin: "1em 0"
              }}
            >
              <Reveal animated="move up">
                <Reveal.Content visible>
                  <Image
                    src={iconSprinklers}
                    size="medium"
                    style={{
                      borderRadius: "16px",
                      border: "3px outset grey"
                    }}
                  />
                </Reveal.Content>
                <Reveal.Content hidden>
                  <Image
                    src={revealSprinkler}
                    size="medium"
                    style={{
                      borderRadius: "19px",
                      border: "3px inset grey"
                    }}
                  />
                </Reveal.Content>
              </Reveal>
            </Grid.Column>
            <Grid.Column
              mobile={8}
              tablet={5}
              computer={4}
              style={{
                margin: "1em 0"
              }}
            >
              <Reveal animated="move up">
                <Reveal.Content visible>
                  <Image
                    src={iconWinterize}
                    size="medium"
                    style={{
                      borderRadius: "16px",
                      border: "3px outset grey"
                    }}
                  />
                </Reveal.Content>
                <Reveal.Content hidden>
                  <Image
                    src={revealWinterize}
                    size="medium"
                    style={{
                      borderRadius: "19px",
                      border: "3px inset grey"
                    }}
                  />
                </Reveal.Content>
              </Reveal>
            </Grid.Column>
            <Grid.Column
              mobile={8}
              tablet={5}
              computer={4}
              style={{
                margin: "1em 0"
              }}
            >
              <Reveal animated="move up">
                <Reveal.Content visible>
                  <Image
                    src={iconIceRemoval}
                    size="medium"
                    style={{
                      borderRadius: "16px",
                      border: "3px outset grey"
                    }}
                  />
                </Reveal.Content>
                <Reveal.Content hidden>
                  <Image
                    src={revealIceRemoval}
                    size="medium"
                    style={{
                      borderRadius: "19px",
                      border: "3px inset grey"
                    }}
                  />
                </Reveal.Content>
              </Reveal>
            </Grid.Column>
            <Grid.Column
              mobile={8}
              tablet={5}
              computer={4}
              style={{
                margin: "1em 0"
              }}
            >
              <Reveal animated="move up">
                <Reveal.Content visible>
                  <Image
                    src={iconSnowPlow}
                    size="medium"
                    style={{
                      borderRadius: "16px",
                      border: "3px outset grey"
                    }}
                  />
                </Reveal.Content>
                <Reveal.Content hidden>
                  <Image
                    src={revealSnowPlow}
                    size="medium"
                    style={{
                      borderRadius: "19px",
                      border: "3px inset grey"
                    }}
                  />
                </Reveal.Content>
              </Reveal>
            </Grid.Column>
            <Grid.Column
              mobile={8}
              tablet={5}
              computer={4}
              style={{
                margin: "1em 0"
              }}
            >
              <Reveal animated="move up">
                <Reveal.Content visible>
                  <Image
                    src={iconHardscapes}
                    size="medium"
                    style={{
                      borderRadius: "16px",
                      border: "3px outset grey"
                    }}
                  />
                </Reveal.Content>
                <Reveal.Content hidden>
                  <Image
                    src={revealHardscape}
                    size="medium"
                    style={{
                      borderRadius: "19px",
                      border: "3px inset grey"
                    }}
                  />
                </Reveal.Content>
              </Reveal>
            </Grid.Column>
            <Grid.Column
              mobile={8}
              tablet={5}
              computer={4}
              style={{
                margin: "1em 0"
              }}
            >
              <Reveal animated="move up">
                <Reveal.Content visible>
                  <Image
                    src={iconIrrigation}
                    size="medium"
                    style={{
                      borderRadius: "16px",
                      border: "3px outset grey"
                    }}
                  />
                </Reveal.Content>
                <Reveal.Content hidden>
                  <Image
                    src={revealIrrigation}
                    size="medium"
                    style={{
                      borderRadius: "19px",
                      border: "3px inset grey"
                    }}
                  />
                </Reveal.Content>
              </Reveal>
            </Grid.Column>
            <Grid.Column
              mobile={8}
              tablet={5}
              computer={4}
              style={{
                margin: "1em 0"
              }}
            >
              <Reveal animated="move up">
                <Reveal.Content visible>
                  <Image
                    src={iconWaterFeature}
                    size="medium"
                    style={{
                      borderRadius: "16px",
                      border: "3px outset grey"
                    }}
                  />
                </Reveal.Content>
                <Reveal.Content hidden>
                  <Image
                    src={revealWaterFeature}
                    size="medium"
                    style={{
                      borderRadius: "19px",
                      border: "3px inset grey"
                    }}
                  />
                </Reveal.Content>
              </Reveal>
            </Grid.Column>
            <Grid.Column
              mobile={8}
              tablet={5}
              computer={4}
              style={{
                margin: "1em 0"
              }}
            >
              <Reveal animated="move up">
                <Reveal.Content visible>
                  <Image
                    src={iconSurfaceCleaning}
                    size="medium"
                    style={{
                      borderRadius: "16px",
                      border: "3px outset grey"
                    }}
                  />
                </Reveal.Content>
                <Reveal.Content hidden>
                  <Image
                    src={revealSurfaceCleaning}
                    size="medium"
                    style={{
                      borderRadius: "19px",
                      border: "3px inset grey"
                    }}
                  />
                </Reveal.Content>
              </Reveal>
            </Grid.Column>
            <Grid.Column
              mobile={8}
              tablet={5}
              computer={4}
              style={{
                margin: "1em 0"
              }}
            >
              <Reveal animated="move up">
                <Reveal.Content visible>
                  <Image
                    src={iconGeneralService}
                    size="medium"
                    style={{
                      borderRadius: "16px",
                      border: "3px outset grey"
                    }}
                  />
                </Reveal.Content>
                <Reveal.Content hidden>
                  <Image
                    src={revealGeneralService}
                    size="medium"
                    style={{
                      borderRadius: "19px",
                      border: "3px inset grey"
                    }}
                  />
                </Reveal.Content>
              </Reveal>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <EstimateButton />
      </Segment>
    );
  }
}

export default ItemGrid;
