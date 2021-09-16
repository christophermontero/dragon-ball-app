import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import MenScreen from "../pages/MenScreen";
import WomenScreen from "../pages/WomenScreen";
import SearchScreen from "../pages/SearchScreen";
import Navbar from "../components/Navbar";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/men" component={MenScreen} />
        <Route exact path="/women" component={WomenScreen} />
        <Route exact path="/search" component={SearchScreen} />
      </Switch>
    </>
  );
};
//<Redirect to="/men" />

export default AppRouter;
