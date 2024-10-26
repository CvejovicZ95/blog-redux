import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateBlog,
  selectBlogById,
  deleteSingleBlog,
} from "../../features/blogs/blogsSlice";
import { selectAllUsers } from "../../features/users/usersSlice";
import { useNavigate, useParams } from "react-router-dom";

export const EditBlogForm = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();

  const blog = useSelector((state) => selectBlogById(state, blogId));
  const users = useSelector(selectAllUsers);

  const [title, setTitle] = useState(blog ? blog.title : "");
  const [content, setContent] = useState(blog ? blog.content : "");
  const [userId, setUserId] = useState(blog ? blog.userId : "");
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const dispatch = useDispatch();

  useEffect(() => {
    if (blog) {
      setTitle(blog.title);
      setContent(blog.content);
      setUserId(blog.userId._id);
    }
  }, [blog]);

  if (!blog) {
    return (
      <section>
        <h2>Blog not found</h2>
      </section>
    );
  }

  const canSave =
    [title, content, userId].every(Boolean) && addRequestStatus === "idle";

  const onSaveBlogClicked = () => {
    if (canSave) {
      try {
        setAddRequestStatus("pending");
        dispatch(
          updateBlog({
            id: blog._id,
            title,
            content,
            reactions: blog.reactions,
            userId,
          }),
        ).unwrap();

        setTitle("");
        setContent("");
        setUserId("");
        navigate(`/blog/${blogId}`);
      } catch (error) {
        console.error("Failed to save the blog", error);
      } finally {
        setAddRequestStatus("idle");
      }
    }
  };

  let usersOptions = users.map((user) => (
    <option key={user._id} value={user._id}>
      {user.username}
    </option>
  ));

  const onDeletePostClick = () => {
    if (canSave) {
      try {
        setAddRequestStatus("pending");
        dispatch(deleteSingleBlog({ id: blog._id })).unwrap();

        setTitle("");
        setContent("");
        setUserId("");
        navigate("/");
      } catch (error) {
        console.error("Failed to delete post", error);
      } finally {
        setAddRequestStatus("idle");
      }
    }
  };

  return (
    <form>
      <h2>Edit Blog</h2>
      <label htmlFor="blogTitle">Title</label>
      <input
        type="text"
        id="blogTitle"
        name="blogTitle"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label htmlFor="blogAuthor">Author:</label>
      <select
        id="blogAuthor"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      >
        <option value={""}></option>
        {usersOptions}
      </select>

      <label htmlFor="blogContent">Content</label>
      <textarea
        id="blogContent"
        name="blogContent"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        className="form-button"
        type="button"
        onClick={onSaveBlogClicked}
        disabled={!canSave}
      >
        Save Edit
      </button>
      <button
        className="form-button"
        type="button"
        onClick={onDeletePostClick}
        disabled={!canSave}
      >
        Delete Blog
      </button>
    </form>
  );
};
