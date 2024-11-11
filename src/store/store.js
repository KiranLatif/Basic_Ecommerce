import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import cartReducer from "./reducer";

const middleware = [logger];

const rootReducer = combineReducers({
  cart: cartReducer,
});

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
