import React from "react";
import { Route } from "react-router-dom";

import HomePageHeadingMobile from "../Headers/HomePageHeadingMobile";
import PageHeadingMobile from "../Headers/PageHeadingMobile";

const PageRoutingMobile = () =>
  <React.Fragment>
    <Route path="/" exact component={HomePageHeadingMobile} />
    <Route
      path="/services"
      exact
      render={routeProps =>
        <PageHeadingMobile {...routeProps} page="services" />}
    />
    <Route
      path="/about"
      exact
      render={routeProps => <PageHeadingMobile {...routeProps} page="about" />}
    />
    <Route
      path="/estimate"
      exact
      render={routeProps =>
        <PageHeadingMobile {...routeProps} page="estimate" />}
    />
    <Route
      path="/contact"
      exact
      render={routeProps =>
        <PageHeadingMobile {...routeProps} page="contact" />}
    />
    <Route
      path="/gallery"
      exact
      render={routeProps =>
        <PageHeadingMobile {...routeProps} page="gallery" />}
    />
    <Route
      path="/jobs"
      exact
      render={routeProps => <PageHeadingMobile {...routeProps} page="jobs" />}
    />
  </React.Fragment>;

export default PageRoutingMobile;
