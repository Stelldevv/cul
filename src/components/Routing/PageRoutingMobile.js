import React, { Component } from "react";
import { Route } from "react-router-dom";

import HomePageHeadingMobile from "../Headers/HomePageHeadingMobile";
import PageHeadingMobile from "../Headers/PageHeadingMobile";

class PageRoutingMobile extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Route
          path="/"
          exact
          render={routeProps =>
            <HomePageHeadingMobile
              {...routeProps}
              page="home"
              setPage={this.props.setPage}
            />}
        />
        <Route
          path="/services"
          exact
          render={routeProps =>
            <PageHeadingMobile
              {...routeProps}
              page="services"
              setPage={this.props.setPage}
            />}
        />
        <Route
          path="/about"
          exact
          render={routeProps =>
            <PageHeadingMobile
              {...routeProps}
              page="about"
              setPage={this.props.setPage}
            />}
        />
        <Route
          path="/estimate"
          exact
          render={routeProps =>
            <PageHeadingMobile
              {...routeProps}
              page="estimate"
              setPage={this.props.setPage}
            />}
        />
        <Route
          path="/contact"
          exact
          render={routeProps =>
            <PageHeadingMobile
              {...routeProps}
              page="contact"
              setPage={this.props.setPage}
            />}
        />
        <Route
          path="/gallery"
          exact
          render={routeProps =>
            <PageHeadingMobile
              {...routeProps}
              page="gallery"
              setPage={this.props.setPage}
            />}
        />
        <Route
          path="/jobs"
          exact
          render={routeProps =>
            <PageHeadingMobile
              {...routeProps}
              page="jobs"
              setPage={this.props.setPage}
            />}
        />
      </React.Fragment>
    );
  }
}

export default PageRoutingMobile;
