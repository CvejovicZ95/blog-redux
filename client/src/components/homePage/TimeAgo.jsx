import React from "react";
import PropTypes from "prop-types";
import { parseISO, formatDistanceToNow } from "date-fns";

export const TimeAgo = ({ timestamp }) => {
  let timeAgo = "";
  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }

  return (
    <span className="timeago">
      &nbsp; <i>{timeAgo}</i>
    </span>
  );
};

TimeAgo.propTypes = {
  timestamp: PropTypes.string.isRequired,
};
