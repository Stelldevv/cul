import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";

import ResponsiveContainer from "./ResponsiveContainer";
import DisplayIntro from "./DisplayIntro";
import DisplayReviews from "./DisplayReviews";
import DisplayDescriptive from "./DisplayDescriptive";
import Footer from "./Footer.js";

class App extends React.Component {
  state = {
    headerText: "Cruz Urbina Landscapes"
  };

  render() {
    return (
      <Router history={history}>
        <Switch>
          <ResponsiveContainer headerText={this.state.headerText}>
            <Route path="/" exact component={DisplayIntro} />
            <Route path="/" exact component={DisplayReviews} />
            <Route path="/" exact component={DisplayDescriptive} />
            <Route path="/" component={Footer} />
          </ResponsiveContainer>
        </Switch>
      </Router>
    );
  }
}

export default App;
