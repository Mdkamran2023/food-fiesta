import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// configureStore is basically redux store

const appStore = configureStore({
  // this reducer is for appStore (for redux store it will manages slices)
  reducer: {
    // for cart  --->small reducers(slices)
    cart: cartReducer,
  },
});

export default appStore;
