import React from "react";
import { useSelector } from "react-redux";
import { selectBlogById } from "../../features/blogs/blogsSlice";
import { BlogAuthor } from "../homePage/BlogAuthor"
import { TimeAgo } from "../homePage/TimeAgo";
import { ReactionButtons } from "../homePage/ReactionButtons";
import { useParams } from "react-router-dom";

export const SingleBlogPage = () => {
    const { blogId } = useParams()

    const blog = useSelector((state) => selectBlogById(state, blogId))

    if (!blog) {
        return (
            <section>
                <h2>Blog not found...</h2>
            </section>
        )
    }

    return (
        <article className="single-blog">
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            <div className="author-and-time">
                <BlogAuthor userId={blog.userId}/>
                <TimeAgo timestamp={blog.created_at}/>
            </div>
            <ReactionButtons blog={blog}/>
        </article>
    )
}