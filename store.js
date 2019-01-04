import {createStore, combineReducers, applyMiddleware} from "redux";

import pizzaCalc from "./reducers/pizzaCalcReducer";
import user from "./reducers/userReducer";

export default createStore(
  combineReducers({ pizzaCalc, user }), {}, applyMiddleware()
);
