import React, { useEffect, useReducer } from "react";
import LoginRouter from "./routes/LoginRouter";
import { AuthContext } from "./context/AuthContext";
import { AuthReducer } from "./reducers/AuthReducer";

const init = () => {
  return (
    JSON.parse(JSON.stringify(localStorage.getItem("auth"))) || {
      isLogged: false
    }
  );
};

const App = () => {
  const [isLogged, dispatch] = useReducer(AuthReducer, {}, init);

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(isLogged));
  }, [isLogged]);

  return (
    <AuthContext.Provider value={{ isLogged, dispatch }}>
      <LoginRouter />
    </AuthContext.Provider>
  );
};

export default App;
