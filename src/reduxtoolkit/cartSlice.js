import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log("reducer", action);
      let item = state.find((items) => items?.id === action.payload.id);
      if (item) {
        item.qty += 1;
        return [...state];
      } else {
        return [...state, action.payload];
      }
    },

    deleteFromCart: (state, action) => {
      return state.filter((items) => items?.id !== action.payload);
    },

    clearCart: (state, action) => {
      return [];
    },

    increaseQty: (state, action) => {
      let data = state?.find((items) => items?.id === action.payload);
      if (data) {
        data.qty += 1;
      }
      return [...state];
    },

    DecreaseQty: (state, action) => {
      let info = state?.find((items) => items?.id === action.payload);
      if (info) {
        if (info.qty >= 1) {
          info.qty -= 1;
          return [...state];
        } else {
          return state.filter((item) => item.id !== action.payload);
        }
      }
    },

    deleteIndivItems: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
  clearCart,
  increaseQty,
  DecreaseQty,
  deleteIndivItems,
} = cartSlice.actions;

export default cartSlice.reducer;
