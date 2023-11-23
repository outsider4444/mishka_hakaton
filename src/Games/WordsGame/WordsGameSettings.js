import React from 'react';
import classes from "./WordsGame.module.css"
import HeaderGameSettings from "../HeaderGameSettings/HeaderGameSettings";
import {Link, NavLink} from "react-router-dom";
import RadioButton from "../../Templates/RadioButton/RadioButton";

const WordsGameSettings = (props) => {

    function onChangeLanguage(language) {
        let PreStartGame = document.getElementById("PreStartGame");
        PreStartGame.hidden = false;

        props.setLanguageType(language);
        console.log(props.languageType)
    }


    return (
        <div>
            <HeaderGameSettings text={"Слова"} display={"none"}/>
            <div id="GameSettingsBlock" className="game-block" tabIndex="-1"
                 style={{"outline": "none", "boxShadow": "none"}}>
                <div className={classes.white_block}>
                    <img className={classes.block_bg_wh}
                         src="https://umka.aisgorod.ru/Content/NewDesign/img/bg-wh-rec.svg"/>
                    <div className={classes.mental_block_content}>
                        <span className={classes.inp_label}>Текст перевода</span>
                        <div className={classes.radio_block}>
                            <RadioButton Click={() => onChangeLanguage("English")} text={"Английский"} id={"1"} />
                            <RadioButton Click={() => onChangeLanguage("Russian")} text={"Русский"} id={"2"} />
                        </div>

                        <div className={classes.but_block}>
                            <NavLink to={"/Home/words"}
                                     id="PreStartGame" c
                                     lassName={classes.orange_button}
                                     style={{"marginTop": 0, "outline": "none", "boxShadow": "none"}}
                                     hidden={true}>
                                <img className={classes.orange_but_bg}
                                     src="https://umka.aisgorod.ru/Content/NewDesign/img/red-button-bg.svg"
                                     alt="red-but"/>
                                <span className={classes.button_text}>Начинаю</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WordsGameSettings;
