import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../store/reducer";

const store = configureStore({
  reducer: {
    cartReducer
  },
});

export default store;
