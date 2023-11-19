import React, {useState} from 'react';
import classes from "./WordsGame.module.css"
import HeaderGameSettings from "../HeaderGameSettings/HeaderGameSettings";
import {Link, NavLink} from "react-router-dom";

const WordsGame = (props) => {
    let EnglishWords = [
        {question: "Dog", answer: "Собака"},
        {question: "Car", answer: "Машина"},
        {question: "City", answer: "Город"},
        {question: "Chair", answer: "Стул"},
        {question: "House", answer: "Дом"}
    ]
    let RussianWords = [];
    const [currentWord, setCurrentWord] = useState(EnglishWords);
    const [score, setScore] = useState(0);
    const [unCorrectMessage, setUnCorrectMessage] = useState("");

    function btnCheckAnswer() {
        let input_answer = document.getElementById("input_answer");
        if (currentWord.length > 0){
            if (input_answer.value.toUpperCase() === currentWord[0].answer.toUpperCase()) {
                setScore(score + 1);
                console.log("Верно")
                setCurrentWord(currentWord.filter(word => word.answer.toUpperCase() !== input_answer.value.toUpperCase()))
                input_answer.value = "";
                setUnCorrectMessage("")
                input_answer.focus();
            }
            else{
                setUnCorrectMessage("НЕПРАВИЛЬНО!")
            }
        }
        else{
            const modalBackground = document.getElementById("modalBackground");
            modalBackground.style.display = "block";
        }

    }

    return (
        <div>
            <HeaderGameSettings text={"Слова"} score={score} display={"flex"}/>
            <div id="GameSettingsBlock" className="game-block" tabIndex="-1"
                 style={{"outline": "none", "boxShadow": "none"}}>
                <div className={classes.white_block}>
                    <img className={classes.block_bg_wh}
                         src="https://umka.aisgorod.ru/Content/NewDesign/img/bg-wh-rec.svg"/>
                    <div className={classes.mental_block_content}>
                        <div className={classes.question_label}>{currentWord.length > 0 ? currentWord[0].question : ""}</div>
                        <input type="text" id={"input_answer"} className={classes.inp_inp} autoComplete="off"/>
                        <button id="btn_check_answer" className={classes.orange_button} onClick={btnCheckAnswer}
                                style={{"marginTop": 0, "outline": "none", "boxShadow": "none"}}>
                            <img className={classes.orange_but_bg}
                                 src="https://umka.aisgorod.ru/Content/NewDesign/img/red-button-bg.svg"
                                 alt="red-but"/>
                            <span className={classes.button_text}>Проверить</span>
                        </button>
                        <span className={classes.uncorrect_message}>{unCorrectMessage}</span>
                    </div>
                </div>
            </div>
            <div className={classes.modalBackground} id={"modalBackground"}>
                <div className={classes.modalActive}>
                    <div className={classes.modalWindow}>

                        <Link to={"/"}>Закончить</Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default WordsGame;
