import React, {useState} from 'react';
import Word from "./Word";
import HeaderGameSettings from "../HeaderGameSettings/HeaderGameSettings";
import classes from "./SentenceGame.module.css";
import {NavLink} from "react-router-dom";
import ModalWindow from "../../Templates/ModalWindow";


const SentenceGame = ({words, translation, correctOrder}) => {
    const [selectedWord, setSelectedWord] = useState(null);
    const [sentence, setSentence] = useState([]);
    const [isCorrect, setIsCorrect] = useState(false);
    const [unCorrectMessage, setUnCorrectMessage] = useState("");

    const handleDrop = (e) => {
        e.preventDefault();
        const droppedWord = e.dataTransfer.getData("text/plain");
        setSentence([...sentence, droppedWord]);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDragStart = () => {
        setSelectedWord(null);
    };

    const handleWordClick = (word) => {
        setSelectedWord(word);
    };

    const handleRemoveWord = (index) => {
        const newSentence = [...sentence];
        newSentence.splice(index, 1);
        setSentence(newSentence);
    };

    const checkAnswer = () => {
        // const correctOrder = ["This", "is", "a", "sample", "sentence"]; // Здесь вы можете установить правильный порядок слов
        if (sentence.join(" ") === correctOrder.join(" ")) {
            setIsCorrect(true);
            const modalBackground = document.getElementById("modalBackground");
            modalBackground.style.display = "block";
            setUnCorrectMessage(" ")
        } else {
            setUnCorrectMessage("НЕПРАВИЛЬНО!")
            setIsCorrect(false);
        }
    };

    return (
        <div>
            <HeaderGameSettings text={"Слова"} display={"none"}/>
            <div id="GameSettingsBlock" className="game-block" tabIndex="-1"
                 style={{"outline": "none", "boxShadow": "none"}}>
                <div className={classes.white_block}>
                    <img className={classes.block_bg_wh}
                         src="https://umka.aisgorod.ru/Content/NewDesign/img/bg-wh-rec.svg"/>
                    <div className={classes.mental_block_content}>
                        <div className={classes.question_label}>{translation}</div>
                        <div style={{float: "left", marginTop: 10}}>
                            {words.map((word, index) => (
                                <Word
                                    key={index}
                                    text={word}
                                    onDragStart={handleDragStart}
                                    onClick={() => handleWordClick(word)}
                                />
                            ))}
                        </div>
                        <h3>Предложение:</h3>
                        <div onDrop={handleDrop} onDragOver={handleDragOver} className={classes.on_drop_sentence}>
                            {sentence.map((word, index) => (
                                <div key={index} className={classes.word_card_on_sentence}>
                                    {word}
                                    <img src="https://bumper-stickers.ru/7055-thickbox_default/znak-otmeny.jpg"
                                         width={15} height={15} onClick={() => handleRemoveWord(index)}
                                        style={{marginBottom: 15, cursor: "pointer"}}
                                    />
                                </div>
                            ))}
                        </div>
                        <button id="EndGame" onClick={checkAnswer} className={classes.orange_button}
                                 style={{"outline": "none", "boxShadow": "none"}}>
                            <img className={classes.orange_but_bg}
                                 src="https://umka.aisgorod.ru/Content/NewDesign/img/red-button-bg.svg"
                                 alt="red-but"/>
                            <span className={classes.button_text} style={{"fontSize": "18pt", "padding":"10px"}}>Проверить</span>
                        </button>
                        {unCorrectMessage}
                        <ModalWindow/>
                        {/*{isCorrect && <p>Правильный ответ!</p>}*/}
                        {/*{!isCorrect && isCorrect !== null && <p>Неправильный ответ!</p>}*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SentenceGame;
