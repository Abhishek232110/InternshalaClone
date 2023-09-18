import { configureStore } from "@reduxjs/toolkit";
import navsSlice from "../internProject/navsSlice";

export const Store = configureStore({
  reducer: {
    navbarSlice: navsSlice,
  },
});
