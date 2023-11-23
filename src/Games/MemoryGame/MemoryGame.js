import React from 'react';
import {useState} from "react";
import Card from "./Card";
import classes from "./MemoryGame.module.css";
import {NavLink} from "react-router-dom";
import HeaderGameSettings from "../HeaderGameSettings/HeaderGameSettings";

const MemoryGame = (props) => {
    const [items, setItems] = useState(props.items);

    const [prev, setPrev] = useState(-1);

    function check(current) {
        let count_of_correct = 0;
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
                    let but_block = document.getElementById("nextBtnBlock");
                    but_block.hidden = false;
                    but_block.style.display = "grid"
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
            <HeaderGameSettings display={"none"}/>
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
            <div className={classes.but_block} id={"nextBtnBlock"} hidden={true}>
                <NavLink to={"/"} className={classes.orange_button}
                         style={{"marginTop": 0, "outline": "none", "boxShadow": "none"}}>
                    <img className={classes.orange_but_bg}
                         src="https://umka.aisgorod.ru/Content/NewDesign/img/red-button-bg.svg"
                         alt="red-but"/>
                    <span className={classes.button_text}>Далее</span>
                </NavLink>
            </div>
        </div>
    );
};

export default MemoryGame;
