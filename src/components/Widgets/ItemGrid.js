import React, { Component } from "react";
import { Grid, Header, Image, Reveal, Segment } from "semantic-ui-react";

import placeHolder from "../../assets/images/placeholder.png";
import reveal from "../../assets/images/testpic5.jpeg";

class ItemGrid extends Component {
  state = {
    title: this.props.text,
    section: this.props.section
  };

  render() {
    const title = this.state.title;
    return (
      <div id={this.state.section}>
        <Segment style={{ padding: "3em 0em" }} vertical>
          <Header
            textAlign="center"
            style={{
              margin: "2em 0em"
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
                      src={placeHolder}
                      size="medium"
                      style={{
                        borderRadius: "18px"
                      }}
                    />
                  </Reveal.Content>
                  <Reveal.Content hidden>
                    <Image
                      src={reveal}
                      size="medium"
                      style={{
                        borderRadius: "18px"
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
                <Reveal animated="move down">
                  <Reveal.Content visible>
                    <Image
                      src={placeHolder}
                      size="medium"
                      style={{
                        borderRadius: "18px"
                      }}
                    />
                  </Reveal.Content>
                  <Reveal.Content hidden>
                    <Image
                      src={reveal}
                      size="medium"
                      style={{
                        borderRadius: "18px"
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
                      src={placeHolder}
                      size="medium"
                      style={{
                        borderRadius: "18px"
                      }}
                    />
                  </Reveal.Content>
                  <Reveal.Content hidden>
                    <Image
                      src={reveal}
                      size="medium"
                      style={{
                        borderRadius: "18px"
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
                <Reveal animated="move down">
                  <Reveal.Content visible>
                    <Image
                      src={placeHolder}
                      size="medium"
                      style={{
                        borderRadius: "18px"
                      }}
                    />
                  </Reveal.Content>
                  <Reveal.Content hidden>
                    <Image
                      src={reveal}
                      size="medium"
                      style={{
                        borderRadius: "18px"
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
                      src={placeHolder}
                      size="medium"
                      style={{
                        borderRadius: "18px"
                      }}
                    />
                  </Reveal.Content>
                  <Reveal.Content hidden>
                    <Image
                      src={reveal}
                      size="medium"
                      style={{
                        borderRadius: "18px"
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
                <Reveal animated="move down">
                  <Reveal.Content visible>
                    <Image
                      src={placeHolder}
                      size="medium"
                      style={{
                        borderRadius: "18px"
                      }}
                    />
                  </Reveal.Content>
                  <Reveal.Content hidden>
                    <Image
                      src={reveal}
                      size="medium"
                      style={{
                        borderRadius: "18px"
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
                      src={placeHolder}
                      size="medium"
                      style={{
                        borderRadius: "18px"
                      }}
                    />
                  </Reveal.Content>
                  <Reveal.Content hidden>
                    <Image
                      src={reveal}
                      size="medium"
                      style={{
                        borderRadius: "18px"
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
                <Reveal animated="move down">
                  <Reveal.Content visible>
                    <Image
                      src={placeHolder}
                      size="medium"
                      style={{
                        borderRadius: "18px"
                      }}
                    />
                  </Reveal.Content>
                  <Reveal.Content hidden>
                    <Image
                      src={reveal}
                      size="medium"
                      style={{
                        borderRadius: "18px"
                      }}
                    />
                  </Reveal.Content>
                </Reveal>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    );
  }
}

export default ItemGrid;
