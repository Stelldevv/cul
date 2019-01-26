import React, { Component } from "react";
import { Route } from "react-router-dom";

import HomePageHeading from "../Headers/HomePageHeading";
import PageHeading from "../Headers/PageHeading";

class PageRouting extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Route
          path="/"
          exact
          render={routeProps =>
            <HomePageHeading
              {...routeProps}
              page="home"
              setPage={this.props.setPage}
            />}
        />
        <Route
          path="/services"
          exact
          render={routeProps =>
            <PageHeading
              {...routeProps}
              page="services"
              setPage={this.props.setPage}
            />}
        />
        <Route
          path="/about"
          exact
          render={routeProps =>
            <PageHeading
              {...routeProps}
              page="about"
              setPage={this.props.setPage}
            />}
        />
        <Route
          path="/estimate"
          exact
          render={routeProps =>
            <PageHeading
              {...routeProps}
              page="estimate"
              setPage={this.props.setPage}
            />}
        />
        <Route
          path="/contact"
          exact
          render={routeProps =>
            <PageHeading
              {...routeProps}
              page="contact"
              setPage={this.props.setPage}
            />}
        />
        <Route
          path="/gallery"
          exact
          render={routeProps =>
            <PageHeading
              {...routeProps}
              page="gallery"
              setPage={this.props.setPage}
            />}
        />
        <Route
          path="/jobs"
          exact
          render={routeProps =>
            <PageHeading
              {...routeProps}
              page="jobs"
              setPage={this.props.setPage}
            />}
        />
      </React.Fragment>
    );
  }
}

export default PageRouting;
