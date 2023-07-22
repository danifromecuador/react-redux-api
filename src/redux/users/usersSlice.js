import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  isLoading: false,
  error: undefined,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    showUsers: (state, action) => {
      state.users = [...state.users, 23];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase("users/fetchUsers/pending", (state, action) => {
        state.isLoading = true;
      })
      .addCase("users/fetchUsers/fulfilled", (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase("users/fetchUsers/rejected", (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });      
  },
});

export const { showUsers } = usersSlice.actions;

export default usersSlice.reducer;

