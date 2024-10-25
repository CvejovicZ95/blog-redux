import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addNewBlog } from "../../features/blogs/blogsSlice";
import { selectAllUsers, fetchUsers, getUsersStatus, getUsersError } from "../../features/users/usersSlice";
import { useNavigate } from "react-router-dom";

export const AddBlogForm = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')
    const [addRequestStatus, setAddRequestStatus] = useState('idle')

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const users = useSelector(selectAllUsers)
    const usersStatus = useSelector(getUsersStatus)
    const error = useSelector(getUsersError)

    useEffect(() => {
        if (usersStatus === 'idle') {
            dispatch(fetchUsers())
        }
    }, [usersStatus, dispatch])

    const canSave = [title, content, userId].every(Boolean) && addRequestStatus === 'idle'

    const onSaveBlogClicked = () => {
        if (canSave) {
            try {
                setAddRequestStatus('pending')
                dispatch(addNewBlog({ title, content, userId})).unwrap()

                setTitle('');
                setContent('');
                setUserId('');
                navigate('/')
            } catch (error) {
                console.error('Failed to save the blog', error)
            } finally {
                setAddRequestStatus('idle')
            }
        }
    }

        let usersOptions = users.map((user) => (
            <option key={user._id} value={user._id}>
                {user.username}
            </option>
        ))

        if (usersStatus === 'loading') {
            return <p>Loading users...</p>;
        }
    
        if (usersStatus === 'failed') {
            return <p>{error}</p>;
        }
    
        if (users.length === 0) {
            usersOptions = <option value="">No users available</option>;
        }
    
    return (
        <form>
            <label htmlFor="blogTitle">Title</label>
            <input
                type="text"
                id="blogTitle"
                name="blogTitle"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <label htmlFor='blogAuthor'>Author:</label>
            <select
                id='blogAuthor'
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
                disabled = {!canSave}
                >
                Save
            </button>
        </form>
    )
}