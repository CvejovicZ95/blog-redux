import React from "react";

const reactionEmoji = {
    thumbsUp: { emoji: "👍", type: "thumbsUp", value: 0 },
    love: { emoji: "❤️", type: "love", value: 0 },
    laugh: { emoji: "😂", type: "laugh", value: 0 },
    surprised: { emoji: "😮", type: "surprised", value: 0 },
    sad: { emoji: "😢", type: "sad", value: 0 },
};


export const ReactionButtons = () => {
    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button
                key={name}
                type="button"
                className="reactionButton"
            >
                {emoji.emoji} {emoji.value}
            </button>
        );
    });
    
    return <div className="reaction-buttons">{reactionButtons}</div>;
}