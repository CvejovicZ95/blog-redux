import React from "react";
import { useSelector } from "react-redux"
import { selectAllUsers } from "../../features/users/usersSlice";

export const UsersList = () => {
    const users = useSelector(selectAllUsers)

    const renderedUsers = users.map(user => (
        <li key={user._id} className="single-user">
            {user.username}
        </li>
    ))

    return (
        <>
        <section className="users">
            <h2>Users</h2>
            <ul className="users-list">{renderedUsers}</ul>
        </section>
        </>
    )
}