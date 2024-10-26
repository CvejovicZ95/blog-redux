import {
  createSlice,
  createAsyncThunk,
  createSelector,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import {
  createBlog,
  getBlogs,
  updateReactionsOnBlog,
  updateWholeBlog,
  deleteBlog,
} from "../../api/blogsApi";

const blogsAdapter = createEntityAdapter({
  selectId: (blog) => blog._id,
  sortComparer: (a, b) => new Date(b.created_at) - new Date(a.created_at),
});

const initialState = blogsAdapter.getInitialState({
  status: "idle", // 'idle', | 'loading' | 'succeeded', | 'error'
  error: null,
});

export const fetchBlogs = createAsyncThunk(
  "blogs/fetchBlogs",
  async (_, { rejectWithValue }) => {
    try {
      const response = getBlogs();
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addNewBlog = createAsyncThunk(
  "blogs/newBlog",
  async (newBlog, { rejectWithValue }) => {
    try {
      const response = await createBlog(
        newBlog.title,
        newBlog.content,
        newBlog.userId,
      );
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const updateReaction = createAsyncThunk(
  "blog/updateReaction",
  async ({ blogId, emoji }, { rejectWithValue }) => {
    try {
      const response = await updateReactionsOnBlog(blogId, emoji);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const updateBlog = createAsyncThunk(
  "blog/updateWholeBlog",
  async ({ id, title, content, reactions, userId }, { rejectWithValue }) => {
    try {
      const response = await updateWholeBlog(
        id,
        title,
        content,
        reactions,
        userId,
      );
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deleteSingleBlog = createAsyncThunk(
  "blog/deleteBlog",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await deleteBlog(id);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.status = "pending";
      })
      .addCase(addNewBlog.fulfilled, (state, action) => {
        blogsAdapter.addOne(state, action.payload);
      })
      .addCase(updateReaction.fulfilled, (state, action) => {
        const updatedBlog = action.payload;
        blogsAdapter.updateOne(state, {
          id: updatedBlog._id,
          changes: { reactions: updatedBlog.reactions },
        });
      })
      .addCase(updateBlog.fulfilled, (state, action) => {
        const updatedBlog = action.payload;
        blogsAdapter.updateOne(state, {
          id: updatedBlog._id,
          changes: {
            title: updatedBlog.title,
            content: updatedBlog.content,
            reactions: updatedBlog.reactions,
            userId: updatedBlog.userId,
          },
        });
      })
      .addCase(deleteSingleBlog.fulfilled, (state, action) => {
        const blogToDelete = action.meta.arg.id;
        blogsAdapter.removeOne(state, blogToDelete);
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.status = "succeeded";
        blogsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { selectAll: selectAllBlogs, selectById: selectBlogById } =
  blogsAdapter.getSelectors((state) => state.blogs);

export const getBlogsStatus = (state) => state.blogs.status;
export const getBlogsError = (state) => state.blogs.error;

export const selectBlogsByUser = createSelector(
  [selectAllBlogs, (state, userId) => userId],
  (blogs, userId) => blogs.filter((blog) => blog.userId._id === userId),
);

export default blogsSlice.reducer;
