import { createSlice } from "@reduxjs/toolkit";
import Datas from "./components/api";

const initialState = {
  PageData: Datas,
};

const DataBoxSlice = createSlice({
  name: "Abhishek",
  initialState,
  reducers: {
    Add: (state) => {
      state.values += 1;
    },
    Remove: (state) => {
      state.values -= 1;
    },
  },
});

export const { Add, Remove } = DataBoxSlice.actions;
export default DataBoxSlice.reducer;
