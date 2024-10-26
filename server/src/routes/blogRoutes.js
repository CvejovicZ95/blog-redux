import express from 'express'
import { getAllBlogsController, addBlogController, updateBlogReactionsController, updateWholeBlogController, deleteBlogController } from '../controllers/blogController.js'

export const blogsRouter = express.Router()

blogsRouter.get('/blogs', getAllBlogsController)
blogsRouter.post('/blogs', addBlogController)
blogsRouter.put('/blogs/:id', updateBlogReactionsController)
blogsRouter.put('/blogs/wholeBlog/:id', updateWholeBlogController)
blogsRouter.delete('/blogs/:id', deleteBlogController)
