import React, {useState} from 'react';
import classes from "./WordsGame.module.css"
import HeaderGameSettings from "../HeaderGameSettings/HeaderGameSettings";
import {Link, NavLink} from "react-router-dom";
import ModalWindow from "../../Templates/ModalWindow/ModalWindow";

const WordsGame = (props) => {
    let EnglishWords = [
        {question: "Dog", answer: "Собака"},
        {question: "Car", answer: "Машина"},
        {question: "City", answer: "Город"},
        {question: "Chair", answer: "Стул"},
        {question: "House", answer: "Дом"}
    ]
    let RussianWords = [{question: "Собака", answer: "Dog"},
        {question: "Машина", answer: "Car"},
        {question: "Город", answer: "City"},
        {question: "Стул", answer: "Chair"},
        {question: "Дом", answer: "House"}];
    const [currentWord, setCurrentWord] = useState(props.languageType === "English" ? EnglishWords : RussianWords);

    const [score, setScore] = useState(0);

    const [correctWord, setCorrectWord] = useState(null);

    const [inputAnswerValue, setInputAnswerValue] = useState();

    const [correct_label, setCorrectLabel] = useState(null);

    function btnCheckAnswer() {
        let input_answer = document.getElementById("input_answer");
        const modalBackground = document.getElementById("modalBackground");
        setInputAnswerValue(input_answer.value);
        setCorrectLabel(currentWord[0].answer);

        if (currentWord.length >= 2) {
            if (input_answer.value.toUpperCase() === currentWord[0].answer.toUpperCase()) {
                setScore(score + 1);
                setCorrectWord(true);
                setCurrentWord(currentWord.filter(word => word.answer.toUpperCase() !== input_answer.value.toUpperCase()));
            } else {
                setCorrectWord(false);
                play();
                setCurrentWord(currentWord.filter(word => word.question !== currentWord[0].question));
            }
            input_answer.value = "";
            modalBackground.style.display = "block";
        }
        if (currentWord.length === 1) {
            if (input_answer.value.toUpperCase() === currentWord[0].answer.toUpperCase()) {
                setScore(score + 1);
                setCorrectWord(true);
            } else {
                setCorrectWord(false);
                play();
            }
            input_answer.value = "";
            modalBackground.style.display = "block";
        }
    }
    function play() {
        let audio = document.getElementById("audio");
        audio.play();
    }
    return (
        <div>
            <HeaderGameSettings hidden_watch={"none"} watch={true} text={"Слова"} score={score} display={"flex"}/>
            <div id="GameSettingsBlock" className="game-block" tabIndex="-1"
                 style={{"outline": "none", "boxShadow": "none", marginTop: -50}}>
                <div className={classes.white_block}>
                    <img className={classes.block_bg_wh}
                         src="https://umka.aisgorod.ru/Content/NewDesign/img/bg-wh-rec.svg"/>
                    <div className={classes.mental_block_content}>
                        <div
                            className={classes.question_label}>{currentWord.length > 0 ? currentWord[0].question : ""}</div>
                        <input type="text" id={"input_answer"} className={classes.inp_inp} autoComplete="off"/>
                        <button id="btn_check_answer" className={classes.orange_button} onClick={btnCheckAnswer}
                                style={{"marginTop": 0, "outline": "none", "boxShadow": "none"}}>
                            <img className={classes.orange_but_bg}
                                 src="https://umka.aisgorod.ru/Content/NewDesign/img/red-button-bg.svg"
                                 alt="red-but"/>
                            <span className={classes.button_text}>Проверить</span>
                        </button>
                    </div>
                </div>
            </div>
            <audio id="audio" src="../../../sound/1_4z1fBqw.mp3"></audio>
            <ModalWindow correctWord={correctWord}
                         user_word_hint={inputAnswerValue} correct_word_hint={correct_label}
                         massive_len={currentWord.length} score={score}
            />
        </div>
    );
};

export default WordsGame;
