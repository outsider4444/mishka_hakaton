import React from 'react';
import classes from "./WordsGame.module.css"
import HeaderGameSettings from "../HeaderGameSettings/HeaderGameSettings";

const WordsGame = (props) => {
    return (
        <div>
            <HeaderGameSettings text={"Слова"}/>
            <div id="GameSettingsBlock" className="game-block" tabIndex="-1"
                 style={{"outline": "none", "boxShadow": "none"}}>
                <div className={classes.white_block}>
                    <img className={classes.block_bg_wh}
                         src="https://umka.aisgorod.ru/Content/NewDesign/img/bg-wh-rec.svg"/>
                    <div className={classes.mental_block_content}>
                        <span className={classes.inp_label}>Текст перевода</span>
                        <div className={classes.radio_block}>
                            <input className={classes.meg_radio} type="radio" id="set-1" name="nosoundset"
                                   value="Сигналы"/>
                            <label className={classes.dark_label} htmlFor="set-1">Английский</label>
                            <input className={classes.meg_radio} type="radio" id="set-2" name="nosoundset"
                                   value="Сигналы"/>
                            <label className={classes.dark_label} htmlFor="set-2">Русский</label>
                            <input className={classes.meg_radio} type="radio" id="set-3" name="nosoundset"
                                   value="Сигналы"/>
                            <label className={classes.dark_label} htmlFor="set-3">По переменно</label>
                        </div>

                        <div className={classes.but_block}>
                            <button id="PrestartGame" className={classes.orange_button}
                                    style={{"marginTop": 0, "outline": "none", "boxShadow": "none"}}>
                                <img className={classes.orange_but_bg} src="https://umka.aisgorod.ru/Content/NewDesign/img/red-button-bg.svg"
                                     alt="red-but"/>
                                <p className={classes.button_text}>Начинаю</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WordsGame;
