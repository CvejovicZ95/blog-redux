import React from "react";
import { useSelector } from "react-redux";
import { selectUserById } from "../../features/users/usersSlice";
import { selectBlogsByUser } from "../../features/blogs/blogsSlice";
import { useParams, Link } from "react-router-dom";

export const UserPage = () => {
  const { userId } = useParams();

  const user = useSelector((state) => selectUserById(state, userId));

  const blogsForUser = useSelector((state) => selectBlogsByUser(state, userId));

  const blogTitles = blogsForUser.map((blog) => (
    <li className="user-blogs" key={blog._id}>
      <Link className="blog-title" to={`/blog/${blog._id}`}>
        {blog.title}
      </Link>
    </li>
  ));

  return (
    <section className="user-page">
      <h2>{user?.username} blogs:</h2>
      <ol>{blogTitles}</ol>
    </section>
  );
};
