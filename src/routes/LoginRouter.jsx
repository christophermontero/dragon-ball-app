import React, { useContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import LoginScreen from "../pages/LoginScreen";
import AppRouter from "./AppRouter";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";

const LoginRouter = () => {
  const { isLogged } = useContext(AuthContext);

  return (
    <Router>
      <Switch>
        <PublicRouter path="/login" auth={isLogged} component={LoginScreen} />
        <PrivateRouter path="/" auth={isLogged} component={AppRouter} />
      </Switch>
    </Router>
  );
};

export default LoginRouter;
