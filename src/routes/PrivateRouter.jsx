import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRouter = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        auth.isLogged ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRouter;
