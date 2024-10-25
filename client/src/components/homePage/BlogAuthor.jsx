import React from "react";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../../features/users/usersSlice"

export const BlogAuthor = ({ userId }) => {
    const users = useSelector(selectAllUsers)

    const author = typeof userId === 'object' ? userId : users.find(user => user._id === userId)
    
    return (
        <span> by {author ? author.username : 'Unknown Author'} </span>
    );
};
