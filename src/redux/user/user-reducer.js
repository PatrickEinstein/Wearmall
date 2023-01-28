import { current } from "@reduxjs/toolkit";

const initial_State = {
  currentUser: null,
};

const UserReducer = (state = initial_State, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};
export default UserReducer;
