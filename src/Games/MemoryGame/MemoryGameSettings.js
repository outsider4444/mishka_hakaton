import React from 'react';
import HeaderGameSettings from "../HeaderGameSettings/HeaderGameSettings";
import classes from "./MemoryGame.module.css";
import {NavLink} from "react-router-dom";

const MemoryGameSettings = (props) => {
    return (
        <div>
            <HeaderGameSettings text={"Слова"} display={"none"}/>
            <div id="GameSettingsBlock" className="game-block" tabIndex="-1"
                 style={{"outline": "none", "boxShadow": "none"}}>
                <div className={classes.white_block}>
                    <img className={classes.block_bg_wh}
                         src="https://umka.aisgorod.ru/Content/NewDesign/img/bg-wh-rec.svg"/>
                    <div className={classes.mental_block_content}>
                        <div className={classes.but_block_settings}>
                            <NavLink to={"/Home/Cards"} className={classes.orange_button_settings}
                                     style={{"marginTop": 0, "outline": "none", "boxShadow": "none"}}>
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

export default MemoryGameSettings;
