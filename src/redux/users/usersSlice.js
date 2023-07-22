import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchUsersAsync = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
  }
  catch (error) {
    throw error;
  }
};

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  fetchUsersAsync
);


const initialState = {
  users: [
  ],
  isLoading: true,
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

// Path: src/redux/users/usersSlice.js