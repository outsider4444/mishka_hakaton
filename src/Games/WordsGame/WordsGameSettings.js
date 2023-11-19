import React from 'react';
import classes from "./WordsGame.module.css"
import HeaderGameSettings from "../HeaderGameSettings/HeaderGameSettings";
import {Link, NavLink} from "react-router-dom";

const WordsGameSettings = (props) => {
    let set_3 = document.getElementById("set-3")
    let set_2 = document.getElementById("set-2")
    let set_1 = document.getElementById("set-1")

    function onChangeLanguage(language) {
        let PrestartGame = document.getElementById("PrestartGame");
        PrestartGame.hidden = false;

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
                            <input className={classes.meg_radio} onClick={() => onChangeLanguage("English")}
                                   type="radio" id="set-1" name="nosoundset"
                                   value="Сигналы"/>
                            <label className={classes.dark_label} htmlFor="set-1">Английский</label>
                            <input className={classes.meg_radio} onClick={() => onChangeLanguage("Russian")}
                                   type="radio" id="set-2" name="nosoundset"
                                   value="Сигналы"/>
                            <label className={classes.dark_label} htmlFor="set-2">Русский</label>
                            <input className={classes.meg_radio} onClick={() => onChangeLanguage("Both")} type="radio"
                                   id="set-3" name="nosoundset"
                                   value="Сигналы"/>
                            <label className={classes.dark_label} id={"set-3_label"} htmlFor="set-3">По
                                переменно</label>
                        </div>

                        <div className={classes.but_block}>
                            <NavLink to={"/Home/words"} id="PrestartGame" className={classes.orange_button}
                                     style={{"marginTop": 0, "outline": "none", "boxShadow": "none"}} hidden={true}>
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
