import React from "react";
import { TimeAgo } from "./TimeAgo";
import { ReactionButtons } from "./ReactionButtons";
import { PostAuthor } from "./PostAuthor";
import { useSelector } from "react-redux";
import { selectBlogById } from "../../features/blogs/blogsSlice";

export const BlogExcerpt = ({ blogId }) => {
    const blog = useSelector( state => selectBlogById(state, blogId))

    return (
        <article key={blog._id} className="blog-excerpt">
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            <h3>View Blog</h3>
            <div className="author-and-time">
                <TimeAgo timestamp={blog.created_at} />
                <PostAuthor userId={blog.userId} />
            </div>
            <ReactionButtons blog={blog} />
        </article>
    );
};