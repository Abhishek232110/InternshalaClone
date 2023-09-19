import { createSlice } from "@reduxjs/toolkit";
import PreferenceData from "./component/data";

const initialState = {
  data: PreferenceData,
};

export const PrefeSlice = createSlice({
  name: "Abhis",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = PrefeSlice.actions;

export default PrefeSlice.reducer;
