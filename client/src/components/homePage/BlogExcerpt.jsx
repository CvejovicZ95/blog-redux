import React from "react";
import { TimeAgo } from "./TimeAgo";
import { ReactionButtons } from "./ReactionButtons";
import { PostAuthor } from "./PostAuthor";

export const BlogExcerpt = ({ title, content, id, timestamp, author }) => {
    return (
        <article className="blog-excerpt">
            <h2>{title}</h2>
            <p>{content}</p>
            <h3>View Blog</h3>
            <div className="author-and-time">
                <TimeAgo timestamp={timestamp} />
                <PostAuthor author={author} />
            </div>
            <ReactionButtons />
        </article>
    );
};