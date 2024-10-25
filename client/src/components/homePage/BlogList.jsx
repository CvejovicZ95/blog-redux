import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { selectAllBlogs, getBlogsStatus, getBlogsError, fetchBlogs } from "../../features/blogs/blogsSlice";
import { BlogExcerpt } from "./BlogExcerpt";


export const BlogList = () => {
    const dispatch = useDispatch()
    const allBlogs = useSelector(selectAllBlogs)
    const blogStatus = useSelector(getBlogsStatus)
    const error = useSelector(getBlogsError)

    useEffect(() => {
        if (blogStatus === 'idle') {
            dispatch(fetchBlogs())
        }
    },[blogStatus, dispatch])

    let content;
    if (blogStatus === 'loading') {
        content = <p>Loading...</p>
    } else if (blogStatus === 'succeeded') {
        content = allBlogs.map(blog => <BlogExcerpt key={blog._id} blogId={blog._id}/>)
    } else if ( blogStatus === 'failed') {
        content = <p>{error}</p>
    }


    return (
        <div className="blog-list">
            {content}
        </div>
    );
};
