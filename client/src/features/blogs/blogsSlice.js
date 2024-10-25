import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getBlogs } from "../../api/blogsApi";

const initialState = {
    blogs: [],
    status: 'idle', // 'idle', | 'loading' | 'succeeded', | 'error' 
    error: null
};

export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs' , async (_, { rejectWithValue }) => {
    try {
        const response = getBlogs()
        return response
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const blogsSlice = createSlice({
    name:'blogs',
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder
            .addCase(fetchBlogs.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(fetchBlogs.fulfilled, (state, action) => {
                state.blogs = action.payload
                state.status = 'succeeded'
            })
            .addCase(fetchBlogs.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })
    }
})

export const selectAllBlogs = (state) => state.blogs.blogs
export const getBlogsStatus = (state) => state.blogs.status
export const getBlogsError = (state) => state.blogs.error

export const selectBlogById = (state, blogId) => 
    state.blogs.blogs.find(blog => blog._id === blogId);

/*export const selectBlogsByUser = createSelector(
    [selectAllBlogs, (state, userId) => userId],
    (blogs, userId) => blogs.filter(blog => blog.userId._id === userId)
)*/

export default blogsSlice.reducer