import React from "react";
import { Route } from "react-router-dom";

import HomePageHeading from "../Headers/HomePageHeading";
import PageHeading from "../Headers/PageHeading";

const PageRouting = () =>
  <React.Fragment>
    <Route path="/" exact component={HomePageHeading} />
    <Route
      path="/services"
      exact
      render={routeProps => <PageHeading {...routeProps} page="services" />}
    />
    <Route
      path="/about"
      exact
      render={routeProps => <PageHeading {...routeProps} page="about" />}
    />
    <Route
      path="/estimate"
      exact
      render={routeProps => <PageHeading {...routeProps} page="estimate" />}
    />
    <Route
      path="/contact"
      exact
      render={routeProps => <PageHeading {...routeProps} page="contact" />}
    />
    <Route
      path="/gallery"
      exact
      render={routeProps => <PageHeading {...routeProps} page="gallery" />}
    />
    <Route
      path="/jobs"
      exact
      render={routeProps => <PageHeading {...routeProps} page="jobs" />}
    />
  </React.Fragment>;

export default PageRouting;
