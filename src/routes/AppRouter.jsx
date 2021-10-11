import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loader from "../components/Loader";

const Navbar = lazy(() => import("../components/Navbar"));
const CharacterScreen = lazy(() => import("../pages/CharacterScreen"));
const MenScreen = lazy(() => import("../pages/MenScreen"));
const WomenScreen = lazy(() => import("../pages/WomenScreen"));
const SearchScreen = lazy(() => import("../pages/SearchScreen"));

const AppRouter = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Navbar />
      <Switch>
        <Route exact path="/men" component={MenScreen} />
        <Route exact path="/women" component={WomenScreen} />
        <Route exact path="/search" component={SearchScreen} />
        <Route
          exact
          path="/character/:idCharacter"
          component={CharacterScreen}
        />
        <Redirect to="/men" />
      </Switch>
    </Suspense>
  );
};

export default AppRouter;
