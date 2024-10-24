import { Blog } from "../models/blogSchema.js";

export const getAllBlogs = async () => {
    try {
        const allBlogs = await Blog.find().populate('userId')
        return allBlogs
    } catch (error) {
        throw new Error('Error fetcing data')
    }
}

export const addBlog = async (title, content, userId) => {
    try {
        const newBlog = new Blog({
            title,
            content,
            userId
        })
        await newBlog.save()
        return newBlog
    } catch (error) {
        throw new Error('Error adding post')
    }
}

export const updateBlogReactions = async (blogId, reactionType) => {
    try {
        const blog = await Blog.findById(blogId);
        
        if (!blog) {
            throw new Error('Blog not found');
        }

        blog.reactions[reactionType] += 1;

        await blog.save();
        return blog;
    } catch (error) {
        throw new Error('Error updating reactions');
    }
};

export const updateWholeBlog = async (blogId, newData) => {
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(blogId, newData, {new:true})
        if (!updatedBlog) {
            throw new Error('Post not found')
        }
        return updatedBlog
    } catch (error) {
        throw new Error('Error updating blog')
    }
}

export const deleteBlog = async (blogId) => {
    try {
        const deletedBlog = await Blog.findByIdAndDelete(blogId)
        if (!deletedBlog) {
            throw new Error('Blog not found')
        }
        return 'Blog deleted successfully'
    } catch (error) {
        throw new Error('Error deleting Blog')
    }
}
