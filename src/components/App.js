import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import PropTypes from "prop-types";

import ResponsiveContainer from "./ResponsiveContainer";
import DisplayIntro from "./Displays/DisplayIntro";
import DisplayReviews from "./Displays/DisplayReviews";
import DisplayReviews2 from "./Displays/DisplayReviews2";
import DisplayDescriptive from "./Displays/DisplayDescriptive";
import DisplayAbout from "./Displays/DisplayAbout";
import DisplayEstimate from "./Displays/DisplayEstimate";
import DisplayGallery from "./Displays/DisplayGallery";
import DisplayServices from "./Displays/DisplayServices";
import DisplayJobs from "./Displays/DisplayJobs";
import DisplayContact from "./Displays/DisplayContact";
import DisplayFAQ from "./Displays/DisplayFAQ";
import Page404 from "./Displays/Display404";
import Footer from "./Footer.js";

const browserHistory = createBrowserHistory();

browserHistory.listen(location => {
  const { hash } = location;
  if (hash !== "") {
    // Push onto callback queue so it runs after the DOM is updated,
    // this is required when navigating from a different page so that
    // the element is rendered on the page before trying to getElementById.
    setTimeout(() => {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView();
      }
    }, 0);
  }
});

class App extends React.Component {
  state = {};

  render() {
    return (
      <Router history={browserHistory}>
        <ResponsiveContainer>
          <Switch>
            <Route
              path="/"
              exact
              render={routeProps =>
                <React.Fragment>
                  <DisplayIntro {...routeProps} />
                  <DisplayReviews {...routeProps} />
                  <DisplayReviews2 {...routeProps} />
                  <DisplayDescriptive {...routeProps} />
                </React.Fragment>}
            />

            <Route path="/about" exact component={DisplayAbout} />
            <Route path="/gallery" exact component={DisplayGallery} />
            <Route path="/services" exact component={DisplayServices} />
            <Route
              path="/estimate"
              exact
              render={routeProps =>
                <DisplayEstimate
                  {...routeProps}
                  page="estimate"
                  setPage={this.props.setPage}
                  env={this.props.env}
                />}
            />
            <Route path="/jobs" exact component={DisplayJobs} />
            <Route path="/contact" exact component={DisplayContact} />
            <Route path="/FAQ" exact component={DisplayFAQ} />
            <Route component={Page404} />
          </Switch>
          <Route path="/" component={Footer} />
        </ResponsiveContainer>
      </Router>
    );
  }
}

App.propTypes = {
  env: PropTypes.object.isRequired
};

export default App;
