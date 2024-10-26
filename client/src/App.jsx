import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { BlogList } from "./components/homePage/BlogList";
import { UsersList } from "./components/users/UsersList";
import { SingleBlogPage } from "./components/singleBlogPage/SingleBlogPage";
import { UserPage } from "./components/users/UsersPage";
import { AddBlogForm } from "./components/addBlogForm/AddBlogForm";
import { EditBlogForm } from "./components/editBlogForm/EditBlogForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<BlogList />} />

        <Route path="users" element={<UsersList />} />

        <Route path="user/:userId" element={<UserPage />} />

        <Route path="blog/:blogId" element={<SingleBlogPage />} />

        <Route path="postBlog" element={<AddBlogForm />} />

        <Route path="editBlog/:blogId" element={<EditBlogForm />} />
      </Route>
    </Routes>
  );
}

export default App;
