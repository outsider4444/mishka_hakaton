import React from 'react';
import classes from "./MemoryGame.module.css";

const Card = (props) => {
    let itemClass = "";
    if (props.item.stat === "active"){
        itemClass = classes.active;
    }
    else if(props.item.stat === "correct"){
        itemClass = classes.correct;
    }
    else if(props.item.stat === "wrong"){
        itemClass = classes.wrong;
    }
    let card_class = `${classes.card} ${itemClass}`

    if (props.mode === "Only Text"){
        return (
            <div className={card_class} onClick={() => props.handleClick(props.id)}>
                <span style={{textAlign: "center"}}>{props.item["text"]}</span>
            </div>
        );
    } else if (props.mode === "Cards n Text"){
        return (
            <div className={card_class} onClick={() => props.handleClick(props.id)}>
                {props.item["text"] === null ?
                    <img src={props.item["img"]} alt=""/>
                    : <span style={{textAlign: "center"}}>{props.item["text"]}</span>
                }
            </div>
        );
    }
    else if(props.mode === "Only Cards"){
        return (
            <div className={card_class} onClick={() => props.handleClick(props.id)}>
                <img src={props.item["img"]} alt=""/>
            </div>
        )
    }
};

export default Card;
