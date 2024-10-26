import React from "react";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../../features/users/usersSlice";
import PropTypes from "prop-types";

export const BlogAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);

  const author =
    typeof userId === "object"
      ? userId
      : users.find((user) => user._id === userId);

  return <span> by {author ? author.username : "Unknown Author"} </span>;
};

BlogAuthor.propTypes = {
  userId: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.object.isRequired,
  ]),
};
