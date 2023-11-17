import React from 'react';
import classes from "./Content.module.css";

const Content = (props) => {
    return (
        <div className={classes.content_box}>
            <span className={classes.heading_block}
                  style={{marginLeft: "auto", marginRight: "auto", marginTop: 0}}>Тренажёры</span>
            <div className={classes.trainer_block}>
                <a className={classes.trainer_cards} href="/Home/MentalCount" id={classes["mental"]}>
                    <img src="/Content/NewDesign/img/mental.svg"/>
                    <span className={classes.trainer_text}>Ментальный счёт</span>
                </a>
                <a className={classes.trainer_cards} href="/Home/Flashcards" id={classes["flcard"]}>
                    <img src="/Content/NewDesign/img/flcard.svg"/>
                    <span className={classes.trainer_text}>Флеш-карты</span>
                </a>
                <a className={classes.trainer_cards} href="/Home/ShulteTables" id={classes["shulte"]}>
                    <img src="/Content/NewDesign/img/shulte.svg"/>
                    <span className={classes.trainer_text}>Таблицы Шульте</span>
                </a>
                <a className={classes.trainer_cards} href="/Home/Abacus" id={classes["abacus"]}>
                    <img src="/Content/NewDesign/img/abacus.svg"/>
                    <span className={classes.trainer_text}>Абакус</span>
                </a>
                <a className={classes.trainer_cards} href="/Home/JumpingNumbers" id={classes["jumping"]}>
                    <img src="/Content/NewDesign/img/jumping.svg"/>
                    <span className={classes.trainer_text}>Прыгающие числа</span>
                </a>
                <a className={classes.trainer_cards} href="/Home/Columns" id={classes["stacks"]}>
                    <img src={"/Content/NewDesign/img/jumping.svg"}/>
                    <span className={classes.trainer_text}>Столбики</span>
                </a>
            </div>
        </div>
    );
};

export default Content;
