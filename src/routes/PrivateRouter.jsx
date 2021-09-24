import React from "react";
import { Route } from "react-router-dom";

const PrivateRouter = ({ component: Component }) => {
  return <Route component={<Component />} />;
};

export default PrivateRouter;
