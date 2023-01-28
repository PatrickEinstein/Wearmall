import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import UserReducer from "./user/user-reducer";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

const store = configureStore({
  reducer: UserReducer,
});

export default store.getState();

console.log(store.getState());
