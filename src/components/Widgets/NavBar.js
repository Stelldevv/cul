import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";

const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

const styles = {
  outer: {
    marginTop: "0.70em",
    marginLeft: "0.2em",
    marginRight: "0.2em"
  }
};

class NavBar extends React.Component {
  state = {};

  render() {
    return (
      <Container>
        <Link to="/" onClick={scrollToTop}>
          <Menu.Item style={styles.outer} id="menuItem">
            Home
          </Menu.Item>
        </Link>
        <Link to="/services" onClick={scrollToTop}>
          <Menu.Item style={styles.outer} id="menuItem">
            Services
          </Menu.Item>
        </Link>
        <Link to="/about" onClick={scrollToTop}>
          <Menu.Item style={styles.outer} id="menuItem">
            About
          </Menu.Item>
        </Link>
        <Container
          style={{
            display: "flex",
            justifyContent: "flex-end"
          }}
        >
          <Link to="/contact" onClick={scrollToTop}>
            <Menu.Item style={styles.outer} id="menuItem">
              Contact
            </Menu.Item>
          </Link>
          <Menu.Item>
            <Link
              to="/estimate"
              onClick={scrollToTop}
              style={{
                color: "white"
              }}
            >
              <Button inverted primary style={{ marginLeft: "0.5em" }}>
                Free Estimate!
              </Button>
            </Link>
          </Menu.Item>
        </Container>
      </Container>
    );
  }
}

export default NavBar;
