import React, {useState} from "react";

import RadioButton from "../../Templates/RadioButton/RadioButton";
import classes from "./Transcription.module.css";
import HeaderGameSettings from "../HeaderGameSettings/HeaderGameSettings";
import ModalWindow from "../../Templates/ModalWindow/ModalWindow";

const Transcription = (props) => {
    const [selectedOption, setSelectedOption] = useState("");
    const [isCorrect, setIsCorrect] = useState(null);
    const [score, setScore] = useState(0);

    const [correct_label, setCorrectLabel] = useState(null);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const checkAnswer = () => {
        const modalBackground = document.getElementById("modalBackground");

        setCorrectLabel(props.variants[props.correctVariant].text);

        if (props.transcriptionState.length >= 2){
            if (selectedOption === props.variants[props.correctVariant].text) {
                setScore(score + 1);
                setIsCorrect(true);
                props.setTranscriptionsState(props.transcriptionState.filter(transcription => props.transcriptionWord.id !== transcription.id))
            } else {
                setIsCorrect(false);
                props.setTranscriptionsState(props.transcriptionState.filter(transcription => props.transcriptionWord.id !== transcription.id))
            }
            modalBackground.style.display = "block";
        }
        if (props.transcriptionState.length  === 1){
            if (selectedOption === props.variants[props.correctVariant].text) {
                setIsCorrect(true);
                setScore(score + 1);
            } else {
                setIsCorrect(false);
            }
            modalBackground.style.display = "block";
        }
    };

    return (
        <div>
            <HeaderGameSettings watch={true} text={"Слова"} score={score} display={"flex"}/>
            <div id="GameSettingsBlock" className="game-block" tabIndex="-1"
                 style={{"outline": "none", "boxShadow": "none", marginTop: -20}}>
                <div className={classes.white_block}>
                    <img className={classes.block_bg_wh}
                         src="https://umka.aisgorod.ru/Content/NewDesign/img/bg-wh-rec.svg"/>
                    <div className={classes.mental_block_content}>
                        <span className={classes.title_word}>{props.transcriptionWord.transcriptionWord}</span>
                        <div className={classes.radio_block}>
                            {props.variants.map(variant =>
                                <RadioButton key={variant.id} Click={handleOptionChange} text={variant.text} id={variant.id}
                                             value={variant.text}/>
                            )}
                        </div>
                        <button id="EndGame" onClick={checkAnswer} className={classes.orange_button}
                                style={{"outline": "none", "boxShadow": "none"}}>
                            <img className={classes.orange_but_bg}
                                 src="https://umka.aisgorod.ru/Content/NewDesign/img/red-button-bg.svg"
                                 alt="red-but"/>
                            <span className={classes.button_text}
                                  style={{"fontSize": "18pt", "padding": "10px"}}>Проверить</span>
                        </button>
                    </div>
                    <ModalWindow correctWord={selectedOption === props.variants[props.correctVariant].text}
                                 user_word_hint={selectedOption}
                                 correct_word_hint={correct_label}
                                 score={score}/>
                {/*    massive_len={currentWord.length}*/}
                </div>
            </div>
        </div>
    );
};

export default Transcription;