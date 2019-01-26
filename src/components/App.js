import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";

import ResponsiveContainer from "./ResponsiveContainer";
import DisplayIntro from "./Displays/DisplayIntro";
import DisplayReviews from "./Displays/DisplayReviews";
import DisplayDescriptive from "./Displays/DisplayDescriptive";
import DisplayAbout from "./Displays/DisplayAbout";
import Footer from "./Footer.js";

class App extends React.Component {
  state = {};

  render() {
    return (
      <Router history={history}>
        <Switch>
          <ResponsiveContainer>
            <Route path="/" exact component={DisplayIntro} />
            <Route path="/" exact component={DisplayReviews} />
            <Route path="/" exact component={DisplayDescriptive} />
            <Route path="/about" exact component={DisplayAbout} />
            <Route path="/" component={Footer} />
          </ResponsiveContainer>
        </Switch>
      </Router>
    );
  }
}

export default App;
