import { createStore, combineReducers, applyMiddleware } from "redux";

import attributes from "./reducers/attributesReducer";
import user from "./reducers/userReducer";

export default createStore(
  combineReducers({ attributes, user }), {}, applyMiddleware()
);
