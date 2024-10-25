import { createSlice, createAsyncThunk, createSelector, createEntityAdapter } from "@reduxjs/toolkit"
import { getBlogs } from "../../api/blogsApi";

const blogsAdapter = createEntityAdapter({
    selectId: (blog) => blog._id,
    sortComparer: (a, b) => new Date(b.created_at) - new Date(a.created_at)
})

const initialState = blogsAdapter.getInitialState({
    status: 'idle', // 'idle', | 'loading' | 'succeeded', | 'error' 
    error: null
})

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
                state.status = 'succeeded'
                blogsAdapter.setAll(state, action.payload)
            })
            .addCase(fetchBlogs.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })
    }
})

export const {
    selectAll: selectAllBlogs,
    selectById: selectBlogById
} = blogsAdapter.getSelectors(state => state.blogs)

export const getBlogsStatus = (state) => state.blogs.status
export const getBlogsError = (state) => state.blogs.error

export const selectBlogsByUser = createSelector(
    [selectAllBlogs, (state, userId) => userId],
    (blogs, userId) => blogs.filter(blog => blog.userId._id === userId)
)

export default blogsSlice.reducer