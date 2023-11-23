import React from 'react';
import classes from "./ModalWindow.module.css";
import {NavLink} from "react-router-dom";

const ModalWindow = (props) => {
    return (
        <div className={classes.modalBackground} id={"modalBackground"}>
            <div className={classes.modalActive}>
                <div className={classes.modalWindow}>
                    <div>
                        Ваш результат: {props.score} верных ответов
                    </div>
                    <div style={{marginTop: 150}}>
                        <NavLink to={"/"} id="EndGame" className={classes.orange_button}
                                 style={{"outline": "none", "boxShadow": "none"}}>
                            <img className={classes.orange_but_bg}
                                 src="https://umka.aisgorod.ru/Content/NewDesign/img/red-button-bg.svg"
                                 alt="red-but"/>
                            <span className={classes.button_text} style={{"fontSize": "18pt", "padding":"10px"}}>Закончить</span>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalWindow;
