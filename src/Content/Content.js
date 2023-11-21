import React from 'react';
import classes from "./Content.module.css";
import {Link} from "react-router-dom";
import Header from "../Header/Header";

const Content = (props) => {
    return (

        <section className={"bg_bear"}>
            <div className={"content-box"}>
                <Header/>
                <div className={classes.content_box}>
            <span className={classes.heading_block}
                  style={{marginLeft: "auto", marginRight: "auto", marginTop: 0}}>Тренажёры</span>
                    {/*<div className={classes.trainer_block}>*/}
                    {/*    <a className={classes.trainer_cards} href="/Home/MentalCount" id={classes["mental"]}>*/}
                    {/*        <img src="/Content/NewDesign/img/mental.svg"/>*/}
                    {/*        <span className={classes.trainer_text}>Ментальный счёт</span>*/}
                    {/*    </a>*/}
                    {/*    <a className={classes.trainer_cards} href="/Home/Flashcards" id={classes["flcard"]}>*/}
                    {/*        <img src="/Content/NewDesign/img/flcard.svg"/>*/}
                    {/*        <span className={classes.trainer_text}>Флеш-карты</span>*/}
                    {/*    </a>*/}
                    {/*    <a className={classes.trainer_cards} href="/Home/ShulteTables" id={classes["shulte"]}>*/}
                    {/*        <img src="/Content/NewDesign/img/shulte.svg"/>*/}
                    {/*        <span className={classes.trainer_text}>Таблицы Шульте</span>*/}
                    {/*    </a>*/}
                    {/*    <a className={classes.trainer_cards} href="/Home/Abacus" id={classes["abacus"]}>*/}
                    {/*        <img src="/Content/NewDesign/img/abacus.svg"/>*/}
                    {/*        <span className={classes.trainer_text}>Абакус</span>*/}
                    {/*    </a>*/}
                    {/*    <a className={classes.trainer_cards} href="/Home/JumpingNumbers" id={classes["jumping"]}>*/}
                    {/*        <img src="/Content/NewDesign/img/jumping.svg"/>*/}
                    {/*        <span className={classes.trainer_text}>Прыгающие числа</span>*/}
                    {/*    </a>*/}
                    {/*    <a className={classes.trainer_cards} href="/Home/Columns" id={classes["stacks"]}>*/}
                    {/*        <img src={"/Content/NewDesign/img/jumping.svg"}/>*/}
                    {/*        <span className={classes.trainer_text}>Столбики</span>*/}
                    {/*    </a>*/}
                    {/*</div>*/}
                    <div className={classes.trainer_block}>
                        <Link to={"/Home/WordsSetting"} className={classes.trainer_cards}
                              id={classes["mental"]}>
                            <img src="../../../img/Translation-Icon-PNG-File.png" style={{width: 80, height: 80, marginLeft: 10}}/>
                            <span style={{marginLeft: "15px"}} className={classes.trainer_text}>Слова</span>
                        </Link>
                        <a className={classes.trainer_cards} href="/Home/CardsSetting" id={classes["flcard"]}>
                            <img src="https://cdn4.iconfinder.com/data/icons/gambling-line-icons-vol-1/48/25-1024.png" style={{width: 80, height: 80, marginLeft: 10}}/>
                            <span style={{marginLeft: "15px"}} className={classes.trainer_text}>Меморио</span>
                        </a>
                        {/*<a className={classes.trainer_cards} href="/Home/ShulteTables" id={classes["shulte"]}>*/}
                        {/*    <img src="/Content/NewDesign/img/shulte.svg"/>*/}
                        {/*    <span className={classes.trainer_text}>Таблицы Шульте</span>*/}
                        {/*</a>*/}
                        {/*<a className={classes.trainer_cards} href="/Home/Abacus" id={classes["abacus"]}>*/}
                        {/*    <img src="/Content/NewDesign/img/abacus.svg"/>*/}
                        {/*    <span className={classes.trainer_text}>Абакус</span>*/}
                        {/*</a>*/}
                        {/*<a className={classes.trainer_cards} href="/Home/JumpingNumbers" id={classes["jumping"]}>*/}
                        {/*    <img src="/Content/NewDesign/img/jumping.svg"/>*/}
                        {/*    <span className={classes.trainer_text}>Прыгающие числа</span>*/}
                        {/*</a>*/}
                        {/*<a className={classes.trainer_cards} href="/Home/Columns" id={classes["stacks"]}>*/}
                        {/*    <img src={"/Content/NewDesign/img/jumping.svg"}/>*/}
                        {/*    <span className={classes.trainer_text}>Столбики</span>*/}
                        {/*</a>*/}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Content;
