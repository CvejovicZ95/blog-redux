import { getAllBlogs, addBlog, updateBlogReactions, updateWholeBlog, deleteBlog } from "../service/blogService.js";

export const getAllBlogsController = async (req, res) => {
    try {
        const allBlogs = await getAllBlogs()
        res.status(200).json(allBlogs)
    } catch (error) {
        res.status(500).json('Server error')
    }
}

export const addBlogController = async (req, res) => {
    try {
        const { title, content, userId} = req.body
        const newBlog = await addBlog(title, content, userId)

        res.status(201).json(newBlog)
    } catch (error) {
        console.error(error);
        res.status(500).json('Server error')
    }
}

export const updateBlogReactionsController = async (req, res) => {
    try {
        const { id } = req.params;  
        const { emoji } = req.body;  

        const updatedBlog = await updateBlogReactions(id, emoji);

        res.status(200).json(updatedBlog);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const updateWholeBlogController = async (req, res) => {
    try {
        const blogId = req.params.id
        const newData = req.body
        const updatedBlog = await updateWholeBlog(blogId, newData)
        res.status(200).json(updatedBlog)
    } catch (error) {
        res.status(500).json({ error: 'Server error'})
    }
}

export const deleteBlogController = async (req, res) => {
    try {
        const blogId = req.params.id
        await deleteBlog(blogId)
        res.status(200).json({ message: 'Blog deleted successfully'})
    } catch (error) {
        res.status(500).json({ error: 'Server error'})
    }
}