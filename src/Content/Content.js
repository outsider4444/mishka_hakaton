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
                            <img src="../../../img/icons/icon_words_1.png" className={classes.image_icon}/>
                            <span style={{marginLeft: "15px"}} className={classes.trainer_text}>Веселые слова</span>
                        </Link>
                        <Link className={classes.trainer_cards} to="/Home/CardsSetting" id={classes["flcard"]}>
                            <img src="../../../img/icons/icon_puzzle.png" className={classes.image_icon}/>
                            <span style={{marginLeft: "15px"}} className={classes.trainer_text}>Меморио</span>
                        </Link>
                        <Link className={classes.trainer_cards} to="/Home/Sentence" id={classes["shulte"]}>
                            <img src="https://cdn-icons-png.flaticon.com/512/831/831182.png" className={classes.image_icon}/>
                            <span style={{marginLeft: "15px"}} className={classes.trainer_text}>Предложения - пазлы</span>
                        </Link>
                        <Link className={classes.trainer_cards} to="/Home/NamePicture" id={classes["abacus"]}>
                            <img src="../../../img/icons/icon_loop.png" className={classes.image_icon}/>
                            <span style={{marginLeft: "15px"}} className={classes.trainer_text}>Опиши действие</span>
                        </Link>
                        <Link className={classes.trainer_cards} to="/Home/Transcription" id={classes["jumping"]}>
                            <img src="../../../img/icons/icon_transcription.png" className={classes.image_icon}/>
                            <span style={{marginLeft: "15px"}} className={classes.trainer_text}>Транскрипции</span>
                        </Link>
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
