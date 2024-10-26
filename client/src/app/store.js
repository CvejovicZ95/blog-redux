import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/users/usersSlice";
import blogsReducer from "../features/blogs/blogsSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    blogs: blogsReducer,
  },
});
