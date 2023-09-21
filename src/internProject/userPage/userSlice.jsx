import { createSlice } from "@reduxjs/toolkit";
import UserDetails from "./component/userDetails";

const initialState = {
  userData: UserDetails,
};

const UserSlice = createSlice({
  name: "Abhishek",
  initialState,
  reducers: {
    Add: (state) => {
      state.value += 1;
    },
    Substract: (state) => {
      state.value -= 1;
    },
  },
});

export const { Add, Substract } = UserSlice.actions;
export default UserSlice.reducer;
