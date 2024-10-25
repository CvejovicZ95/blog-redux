import React from "react";
import { useSelector } from "react-redux";
import { selectUserById } from "../../features/users/usersSlice"
//import { selectBlogsByUser } from "../../features/blogs/blogsSlice";
import { useParams } from "react-router-dom"

export const UserPage = () => {
    const { userId } = useParams()

    const user = useSelector(state => selectUserById(state, userId))
    
    /*const blogsForUser = useSelector(state => selectBlogsByUser(state, userId._id))*/
    

    /*const blogTitles = blogsForUser.map(blog => (
        <li key={blog._id}>
            <Link to={`/blog/${blog._id}`}>{blog.title}</Link>
        </li>
    ))*/

    return (
        <section>
            <h2>{user?.username}</h2>
            {/*<ol>{blogTitles}</ol>*/}
        </section>
    )
}