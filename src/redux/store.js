import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  array: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        array: [...state.array, action.payload],
      };
    default:
      return state;
  }
}

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;
