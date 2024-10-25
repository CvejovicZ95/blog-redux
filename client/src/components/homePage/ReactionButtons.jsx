import React from "react";
import { useDispatch } from "react-redux";
import { updateReaction } from "../../features/blogs/blogsSlice";

const reactionEmoji = {
    thumbsUp: { emoji: "👍", type: "thumbsUp" },
    love: { emoji: "❤️", type: "love" },
    laugh: { emoji: "😂", type: "laugh" },
    surprised: { emoji: "😮", type: "surprised" },
    sad: { emoji: "😢", type: "sad" },
};


export const ReactionButtons = ({ blog }) => {
    const dispatch = useDispatch()

    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button
                key={name}
                type="button"
                className="reactionButton"
                onClick={() => dispatch(updateReaction({ blogId: blog._id, emoji: name}))}
            >
                {emoji.emoji} {blog.reactions[name]}
            </button>
        );
    });
    
    return <div className="reaction-buttons">{reactionButtons}</div>;
}