import React, { useEffect, useReducer } from "react";
import LoginRouter from "./routes/LoginRouter";
import { AuthContext } from "./context/AuthContext";
import { AuthReducer } from "./reducers/AuthReducer";

const init = () => {
  return (
    JSON.parse(JSON.stringify(localStorage.getItem("loged"))) || {
      loged: false
    }
  );
};

const App = () => {
  const { loged, dispatch } = useReducer(AuthReducer, {}, init);

  useEffect(() => {
    localStorage.setItem("loged", JSON.stringify(loged));
  }, [loged]);

  return (
    <AuthContext.Provider value={{ loged, dispatch }}>
      <LoginRouter />
    </AuthContext.Provider>
  );
};

export default App;
