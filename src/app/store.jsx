import { configureStore } from "@reduxjs/toolkit";
import navsSlice from "../internProject/navsSlice";
import PrefeSlice from "../internProject/prefrenceIntern/prefeSlice";

export const Store = configureStore({
  reducer: {
    navbarSlice: navsSlice,
    PrefrSlice: PrefeSlice,
  },
});
