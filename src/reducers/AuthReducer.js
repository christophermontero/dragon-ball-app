import { authTypes } from "../types/authTypes";

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case authTypes.login:
      return { isLogged: true };

    case authTypes.logout:
      return { isLogged: false };

    default:
      return state;
  }
};
