import React from 'react';
import {useState} from "react";
import Card from "./Card";
import classes from "./MemoryGame.module.css";
import {NavLink} from "react-router-dom";
import HeaderGameSettings from "../HeaderGameSettings/HeaderGameSettings";
import ModalWindow from "../../Templates/ModalWindow/ModalWindow";
import stopWatch from "../HeaderGameSettings/StopWatch";

const MemoryGame = (props) => {
    const [items, setItems] = useState(props.items);

    const [prev, setPrev] = useState(-1);

    function check(current) {
        let count_of_correct = 0;
        const modalBackground = document.getElementById("modalBackground");

        if (items[current].id === items[prev].id) {
            if (items[current].sub_id !== items[prev].sub_id) {
                items[current].stat = "correct"
                items[prev].stat = "correct"
                setPrev(-1);
                for (let i = 0; i < items.length; i++) {
                    if (items[i].stat === "correct") {
                        count_of_correct += 1;
                    }
                }
                if (count_of_correct === items.length) {
                    modalBackground.style.display = "block";
                    console.log()
                }
            }
        } else {
            items[current].stat = "wrong";
            items[prev].stat = "wrong";
            setItems([...items])
            setPrev(-1);
            setTimeout(() => {
                items[current].stat = "";
                items[prev].stat = "";
                setItems([...items])
            }, 1000)
        }
    }

    function handleClick(id) {
        if (prev === -1) {
            items[id].stat = "active"
            setItems([...items])
            setPrev(id);
        } else {
            check(id);
        }
    }

    return (
        <div style={{marginBottom: 30}}>
            <HeaderGameSettings watch={true} example_visible={"none"} display={"flex"} setTime={props.setTimeDuration}/>
            <div style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                marginTop: -10
            }}>
                <div className={classes.container} id={"container_cards"}>
                    {items.map((item, index) =>
                        <Card mode={props.modeCardsType} key={index} item={item} id={index} handleClick={handleClick}/>
                    )}
                </div>
            </div>
            <ModalWindow correctWord={true} timeDuration={props.timeDuration} />
        </div>
    );
};

export default MemoryGame;
