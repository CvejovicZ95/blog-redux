import React from "react";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../../features/users/usersSlice";
import { Link } from "react-router-dom";

export const UsersList = () => {
  const users = useSelector(selectAllUsers);

  const renderedUsers = users.map((user) => (
    <li key={user._id} className="single-user">
      <Link className="single-username" to={`/user/${user._id}`}>
        {user.username}
      </Link>
    </li>
  ));

  return (
    <>
      <section className="users">
        <h2>Users</h2>
        <ul className="users-list">{renderedUsers}</ul>
      </section>
    </>
  );
};
