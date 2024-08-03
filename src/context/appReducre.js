import React from "react";
export const initialState = {
  basket: [],
  user: null,
};
const AppReducre = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
export default AppReducre;
