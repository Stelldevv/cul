import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";

import PageHome from "./PageHome";
import PageServices from "./PageServices";

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={PageHome} />
        <Route path="/services" exact component={PageServices} />
      </Switch>
    </Router>
  );
};

export default App;
