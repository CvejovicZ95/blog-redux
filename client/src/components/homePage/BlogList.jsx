import React from "react";
import { BlogExcerpt } from "./BlogExcerpt";

const blogs = [
    {
        id: 1,
        title: "How to Learn React",
        content: "React is a powerful library for building user interfaces. In this blog, we'll explore the basic concepts you need to understand.",
        timestamp: "2024-10-20T10:00:00Z",
        author: "John Doe"
    },
    {
        id: 2,
        title: "Why Use MongoDB with Node.js",
        content: "MongoDB is a flexible, scalable database. Here's why you should consider using it in your next Node.js project.",
        timestamp: "2024-10-21T15:30:00Z",
        author: "Jane Smith"
    },
    {
        id: 3,
        title: "Understanding Redux for State Management",
        content: "Redux can help manage complex application states. Learn how to integrate Redux into your React projects effectively.",
        timestamp: "2024-10-22T08:15:00Z",
        author: "Alice Johnson"
    },
    {
        id: 4,
        title: "Building REST APIs with Express",
        content: "Express makes it easy to build fast, scalable APIs. Here's how you can create your own REST API with Express.",
        timestamp: "2024-10-23T12:45:00Z",
        author: "Bob Brown"
    }
];


export const BlogList = () => {
    return (
        <div className="blog-list">
            {blogs.map((blog) => (
                <BlogExcerpt
                    key={blog.id}
                    title={blog.title}
                    content={blog.content}
                    id={blog.id}
                    timestamp={blog.timestamp}
                    author={blog.author}
                />
            ))}
        </div>
    );
};
