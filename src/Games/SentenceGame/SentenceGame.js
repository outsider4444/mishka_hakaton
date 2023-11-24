import React, {useState} from 'react';
import Word from "./Word";
import HeaderGameSettings from "../HeaderGameSettings/HeaderGameSettings";
import classes from "./SentenceGame.module.css";
import {NavLink} from "react-router-dom";
import ModalWindow from "../../Templates/ModalWindow/ModalWindow";


const SentenceGame = (props) => {
    const [selectedWord, setSelectedWord] = useState(null);
    const [sentence, setSentence] = useState([]);
    const [isCorrect, setIsCorrect] = useState(false);
    const [unCorrectMessage, setUnCorrectMessage] = useState("");
    const [score, setScore] = useState(0);

    const [correct_label, setCorrectLabel] = useState(null);

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
        if (props.wordsList.length > 1) {
            if (sentence.join(" ") === props.correctOrder.join(" ")) {
                setIsCorrect(true);
                setScore(score + 1);
                props.setWordsList(props.wordsList.filter((word => word.id !== props.wordsList[props.words_translation].id)))
                props.setCorrectOrder(props.correctOrderList.filter(word => word.id !== props.correctOrderList[props.words_translation].id))
                props.setTranslation(props.translationList.filter(word => word.id !== props.translationList[props.words_translation].id))
                setSentence([]);
                setUnCorrectMessage(" ")
            } else {
                setUnCorrectMessage("НЕПРАВИЛЬНО!")
                setIsCorrect(false);
            }
        }
        else if (props.wordsList.length === 1){
            if (sentence.join(" ") === props.correctOrder.join(" ")) {
                setIsCorrect(true);
                setScore(score + 1);
                const modalBackground = document.getElementById("modalBackground");
                modalBackground.style.display = "block";
                setUnCorrectMessage(" ")
            } else {
                setUnCorrectMessage("НЕПРАВИЛЬНО!")
                setIsCorrect(false);
            }
        }
    };

    return (
        <div>
            <HeaderGameSettings watch={true} score={score} display={"flex"}/>
            <div id="GameSettingsBlock" className="game-block" tabIndex="-1"
                 style={{"outline": "none", "boxShadow": "none", marginTop: -50}}>
                <div className={classes.white_block}>
                    <img className={classes.block_bg_wh}
                         src="https://umka.aisgorod.ru/Content/NewDesign/img/bg-wh-rec.svg"/>
                    <div className={classes.mental_block_content}>
                        <div className={classes.question_label}>{props.translationWord}</div>
                        <div style={{float: "left", marginTop: 10}}>
                            {props.words.map((word, index) => (
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
                            <span className={classes.button_text}
                                  style={{"fontSize": "18pt", "padding": "10px"}}>Проверить</span>
                        </button>
                        {unCorrectMessage}
                        <ModalWindow score={score}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SentenceGame;
