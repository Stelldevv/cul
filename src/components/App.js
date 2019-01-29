import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import ResponsiveContainer from "./ResponsiveContainer";
import DisplayIntro from "./Displays/DisplayIntro";
import DisplayReviews from "./Displays/DisplayReviews";
import DisplayReviews2 from "./Displays/DisplayReviews2";
import DisplayDescriptive from "./Displays/DisplayDescriptive";
import DisplayAbout from "./Displays/DisplayAbout";
import DisplayGallery from "./Displays/DisplayGallery";
import DisplayItemGrid from "./Displays/DisplayItemGrid";
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
        <Switch>
          <ResponsiveContainer>
            <Route path="/" exact component={DisplayIntro} />
            <Route path="/" exact component={DisplayReviews} />
            <Route path="/" exact component={DisplayReviews2} />
            <Route path="/" exact component={DisplayDescriptive} />
            <Route path="/about" exact component={DisplayAbout} />
            <Route path="/gallery" exact component={DisplayGallery} />
            <Route path="/services" exact component={DisplayItemGrid} />
            <Route path="/" component={Footer} />
          </ResponsiveContainer>
        </Switch>
      </Router>
    );
  }
}

export default App;
