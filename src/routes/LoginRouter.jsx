import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import LoginScreen from "../pages/LoginScreen";
import PublicRouter from "./PublicRouter";

const LoginRouter = () => {
  const { loged } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <PublicRouter path="/login" auth={loged} component={LoginScreen} />
      </Switch>
    </Router>
  );
};

export default LoginRouter;
