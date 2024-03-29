import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ServicePage from "views/Pages/ServicePage.js";
import MeasurementPage from "views/Pages/MeasurementPage.js";
import ContactPage from "views/Pages/ContactPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/services/:service" component={ServicePage} />
      <Route path="/measurements" component={MeasurementPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
