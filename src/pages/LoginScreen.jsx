import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { authTypes } from "../types/authTypes";

const LoginScreen = () => {
  const history = useHistory();
  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    dispatch({ type: authTypes.login });
    history.push("/men");
  };

  return (
    <div className="container mt-5 text-center">
      <img src="assets/animate.gif" alt="gif" />
      <h1 className="my-3">Dragon Ball App</h1>
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginScreen;
