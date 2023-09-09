import { configureStore } from "@reduxjs/toolkit";
import navSlice from "../cloneOfInternship/navsSlice";

export const Store = configureStore({
  reducer: {
    navbarSlice: navSlice,
  },
});
