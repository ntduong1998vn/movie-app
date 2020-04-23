import React from "react";
import { Switch, Route } from "react-router-dom";

import "../../css/bootstrap-reboot.min.css";
import "../../css/bootstrap-grid.min.css";
import "../../css/ionicons.min.css";
import "../../css/main.css";

import Header from "../../components/Header";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import PaidPage from "../PaidPage";
import ErrorPage from "../ErrorPage";
import Footer from "../../components/Footer";
import MoveDetailPage from "../MovieDetailPage";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/update-account" component={PaidPage} />
        <Route path="/movie-detail/:id" component={MoveDetailPage} />
        <Route component={ErrorPage} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
