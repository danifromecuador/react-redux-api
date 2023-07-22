import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchUsersAsync = async () => {
  try {
    const response = await fetch("https://randomuser.me/api/?results=5");
    const data = await response.json();
    // console.log(data.results);
    return data.results;
  } catch (error) {
    throw error;
  }
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", fetchUsersAsync);

const initialState = {
  users: [],
  isLoading: true,
  error: undefined,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // showUsers: (state, action) => {
    //   state.users = [...state.users, 23];
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { showUsers } = usersSlice.actions;

export default usersSlice.reducer;
