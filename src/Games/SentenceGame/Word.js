import React from 'react';
import classes from "./SentenceGame.module.css";

const Word = ({text, onDragStart}) => {
    const handleDragStart = (e) => {
        e.dataTransfer.setData("text/plain", text);
        onDragStart();
    };
    return (
        <div className={classes.word_card} draggable onDragStart={handleDragStart}>
            {text}
        </div>
    );
};

export default Word;
