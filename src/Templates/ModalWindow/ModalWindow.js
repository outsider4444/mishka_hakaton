import React from 'react';
import classes from "./ModalWindow.module.css";
import {Link, NavLink, useLocation} from "react-router-dom";

const ModalWindow = (props) => {
    const location = useLocation();

    function onClickModalBtn() {
        let modalBackground = document.getElementById("modalBackground");
        modalBackground.hidden = true;
        modalBackground.style.display = "none"

    }

    return (
        <div className={classes.modalBackground} id={"modalBackground"}>
            <div className={classes.modalActive}>
                <div className={classes.modalWindow}>

                    {location.pathname === "/Home/Cards" ?
                        <div>
                            <div style={{marginTop: 10}}
                                 className={classes.correct_title}>ПРАВИЛЬНО!
                            </div>
                            <div style={{marginTop: 20}}>
                                <div className={classes.modal_answer}>
                                    <div style={{marginLeft: 320}}>
                                        <span className={classes.modal_answer_title}>Ваше время:</span><br/>
                                        <span className={classes.modal_answer_label}
                                              style={{color: "#003348"}}>1:10</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        <div>
                            <div style={{marginTop: 10}}
                                 className={props.correctWord === true ? classes.correct_title : classes.uncorrect_title}>
                                {props.correctWord === true ? "ПРАВИЛЬНО!" : "НЕПРАВИЛЬНО!"}
                            </div>
                            <div style={{marginTop: 20}}>
                                <div className={classes.modal_answer}>
                                    <div style={{marginLeft: 100}}>
                                        <span className={classes.modal_answer_title}>Твой ответ:</span><br/>
                                        <span
                                            className={classes.modal_answer_label_uncorrect}>{props.user_word_hint}</span>
                                    </div>
                                </div>
                                <div>
                                    <span className={classes.modal_answer_title}>Верный ответ:</span><br/>
                                    <span className={classes.modal_answer_label}>{props.correct_word_hint}</span>
                                </div>
                                <div>
                                    <span className={classes.modal_answer_title}>У вас осталось:</span><br/>
                                    <span
                                        className={classes.modal_answer_label_uncorrect}>{props.countTry} попытки</span>
                                </div>
                            </div>
                        </div>
                    }

                    {/*// <div>*/}
                    {/*// <div style={{marginTop: 10}}*/}
                    {/*//          className={props.correctWord === true ? classes.correct_title : classes.uncorrect_title}>*/}
                    {/*//         {props.correctWord === true ? "ПРАВИЛЬНО!" : "НЕПРАВИЛЬНО!"}*/}
                    {/*//     </div>*/}
                    {/*//     <div style={{marginTop: 20}}>*/}
                    {/*//         <div className={classes.modal_answer}>*/}
                    {/*//             <div style={{marginLeft: 100}}>*/}
                    {/*//                 <span className={classes.modal_answer_title}>Твой ответ:</span><br/>*/}
                    {/*                <span className={classes.modal_answer_label_uncorrect}>{props.user_word_hint}</span>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div>*/}
                    {/*            <span className={classes.modal_answer_title}>Верный ответ:</span><br/>*/}
                    {/*            <span className={classes.modal_answer_label}>{props.correct_word_hint}</span>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {props.countTry === 0 ?
                        <Link to={"/"}>
                            <button id="EndGame" className={classes.orange_button_link} onClick={onClickModalBtn}
                                    style={{"outline": "none", "boxShadow": "none"}}>
                                <img className={classes.orange_but_bg}
                                     src="https://umka.aisgorod.ru/Content/NewDesign/img/red-button-bg.svg"
                                     alt="red-but"/>
                                <span className={classes.button_text}
                                      style={{"fontSize": "18pt", "padding": "10px"}}>Далее</span>
                            </button>
                        </Link>
                        : props.massive_len === 1 ?
                            <Link to={"/"} style={{marginTop: 50}}>
                                <button id="EndGame" className={classes.orange_button_link} onClick={onClickModalBtn}
                                        style={{"outline": "none", "boxShadow": "none"}}>
                                    <img className={classes.orange_but_bg}
                                         src="https://umka.aisgorod.ru/Content/NewDesign/img/red-button-bg.svg"
                                         alt="red-but"/>
                                    <span className={classes.button_text}
                                          style={{"fontSize": "18pt", "padding": "10px"}}>Далее</span>
                                </button>
                            </Link>
                            :
                            <div style={{marginTop: 50}}>
                                <button id="EndGame" className={classes.orange_button} onClick={onClickModalBtn}
                                        style={{"outline": "none", "boxShadow": "none"}}>
                                    <img className={classes.orange_but_bg}
                                         src="https://umka.aisgorod.ru/Content/NewDesign/img/red-button-bg.svg"
                                         alt="red-but"/>
                                    <span className={classes.button_text}
                                          style={{"fontSize": "18pt", "padding": "10px"}}>Далее</span>
                                </button>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default ModalWindow;
