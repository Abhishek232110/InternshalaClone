import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Abhishek",
  lname: "kumar",
  roll: 100,
  id: 1,
  address: {
    vill: "Manikpur",
    post: "Naubatpur",
    dist: "Chandauli",
    pin: 232110,
  },
};

export const navSlice = createSlice({
  name: "Abhi",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = navSlice.actions;

export default navSlice.reducer;
