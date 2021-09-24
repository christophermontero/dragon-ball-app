import { authTypes } from "../types/authTypes";

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case authTypes.login:
      return { loged: true };

    case authTypes.logout:
      return { loged: false };

    default:
      return state;
  }
};
