import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import UserDetails from "./component/userDetails";

// const initialState = {
//   // userData: UserDetails,
//   loginUser: [],
//   loading: false,
//   error: null,
// };

export const getAllUser = createAsyncThunk(
  "getUsersData",
  async (args, { rejectWithValue }) => {
    const response = await fetch("http://localhost:4001/login");
    try {
      const results = response.json();
      return results;
    } catch (error) {
      return rejectWithValue("You find error");
    }
  }
);

export const sendAllUser = createAsyncThunk(
  "sendUsersData",
  async (args, { rejectWithValue }) => {
    const response = await fetch("http://localhost:4001/register", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        Authorization: "Bearer YOUR_TOKEN",
        "Content-Type": "application/json",
      },
    });
  }
);

export const gitUser = createSlice({
  name: "gitUser",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase([getAllUser.pending], (state) => {
      state.loading = true;
    });

    // [getAllUser.fulfilled]: (state, actions) => {
    //   state.loading = false;
    //   state.users = actions.payload;
    // },
    // [getAllUser.rejected]: (state, actions) => {
    //   state.loading = false;
    //   state.error = actions.payload;
    // },
  },
});

export default gitUser.reducer;
