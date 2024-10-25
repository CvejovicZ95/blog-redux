import React from "react";

const reactionEmoji = {
    thumbsUp: { emoji: "👍", type: "thumbsUp" },
    love: { emoji: "❤️", type: "love" },
    laugh: { emoji: "😂", type: "laugh" },
    surprised: { emoji: "😮", type: "surprised" },
    sad: { emoji: "😢", type: "sad" },
};


export const ReactionButtons = ({ blog }) => {
    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button
                key={name}
                type="button"
                className="reactionButton"
            >
                {emoji.emoji} {blog.reactions[name]}
            </button>
        );
    });
    
    return <div className="reaction-buttons">{reactionButtons}</div>;
}