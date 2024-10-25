import React from "react";
import { TimeAgo } from "./TimeAgo";
import { ReactionButtons } from "./ReactionButtons";
import { BlogAuthor } from "./BlogAuthor";
import { useSelector } from "react-redux";
import { selectBlogById } from "../../features/blogs/blogsSlice";
import { Link } from "react-router-dom";

export const BlogExcerpt = ({ blogId }) => {
    const blog = useSelector( state => selectBlogById(state, blogId))

    return (
        <article key={blog._id} className="blog-excerpt">
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            <Link to={`/blog/${blog._id}`}><h3>View Blog</h3></Link>
            <div className="author-and-time">
                <TimeAgo timestamp={blog.created_at} />
                <BlogAuthor userId={blog.userId} />
            </div>
            <ReactionButtons blog={blog} />
        </article>
    );
};