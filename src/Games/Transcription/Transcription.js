import React, {useState} from "react";

import RadioButton from "../../Templates/RadioButton/RadioButton";
import classes from "./Transcription.module.css";
import HeaderGameSettings from "../HeaderGameSettings/HeaderGameSettings";
import ModalWindow from "../../Templates/ModalWindow/ModalWindow";

const Transcription = (props) => {
    const [selectedOption, setSelectedOption] = useState("");
    const [isCorrect, setIsCorrect] = useState(null);
    const [score, setScore] = useState(0);
    const [errorMessage, setErrorMessage] = useState("");

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const checkAnswer = () => {
        if (props.transcriptionState.length >= 2){
            if (selectedOption === props.variants[props.correctVariant].text) {
                setIsCorrect(true);
                props.setTranscriptionsState(props.transcriptionState.filter(transcription => props.transcriptionWord.id !== transcription.id))
                setScore(score + 1);
                setErrorMessage("");
            } else {
                setIsCorrect(false);
                setErrorMessage("НЕПРАВИЛЬНО!")
            }
        }
        else if (props.transcriptionState.length  >= 0){
            if (selectedOption === props.variants[props.correctVariant].text) {
                setIsCorrect(true);
                setScore(score + 1);
                setErrorMessage("");
                const modalBackground = document.getElementById("modalBackground");
                modalBackground.style.display = "block";
            } else {
                setIsCorrect(false);
                setErrorMessage("НЕПРАВИЛЬНО!")
            }
        }
    };

    return (
        <div>
            <HeaderGameSettings text={"Слова"} score={score} display={"flex"}/>
            <div id="GameSettingsBlock" className="game-block" tabIndex="-1"
                 style={{"outline": "none", "boxShadow": "none"}}>
                <div className={classes.white_block}>
                    <img className={classes.block_bg_wh}
                         src="https://umka.aisgorod.ru/Content/NewDesign/img/bg-wh-rec.svg"/>
                    <div className={classes.mental_block_content}>
                        {props.transcriptionWord.transcriptionWord}
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
                        <p>{errorMessage}</p>
                    </div>
                    <ModalWindow score={score}/>
                </div>
            </div>
        </div>
    );
};

export default Transcription;