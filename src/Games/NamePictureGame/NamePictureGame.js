import React, {useState} from "react";
import HeaderGameSettings from "../HeaderGameSettings/HeaderGameSettings";
import classes from "./NamePictureGame.module.css";
import RadioButton from "../../Templates/RadioButton/RadioButton";
import ModalWindow from "../../Templates/ModalWindow/ModalWindow";

const NamePictureGame = (props) => {
    const [selectedOption, setSelectedOption] = useState("");
    const [isCorrect, setIsCorrect] = useState(null);
    const [score, setScore] = useState(0);
    const [correct_label, setCorrectLabel] = useState(null);
    const [correctWord, setCorrectWord] = useState(null);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const checkAnswer = () => {
        setCorrectLabel(props.variants[props.correctVariant].text);
        const modalBackground = document.getElementById("modalBackground");

        if (selectedOption === props.variants[props.correctVariant].text) {
            setScore(score + 1);
            setCorrectWord(true);
        } else {
            setIsCorrect(false);
        }
        if (props.namePicturesState.length >= 2){
            if (selectedOption === props.variants[props.correctVariant].text) {
                setScore(score + 1);
                setIsCorrect(true);
                props.setNamePicturesState(props.namePicturesState.filter(transcription => props.namePicturesState[0].id !== transcription.id))
            } else {
                setIsCorrect(false);
                props.setNamePicturesState(props.namePicturesState.filter(transcription => props.namePicturesState[0].id !== transcription.id))
            }
            modalBackground.style.display = "block";
        }
        if (props.namePicturesState.length  === 1){
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
                 style={{"outline": "none", "boxShadow": "none", marginTop: -25}}>
                <div className={classes.white_block}>
                    <img className={classes.block_bg_wh}
                         src="https://umka.aisgorod.ru/Content/NewDesign/img/bg-wh-rec.svg"/>
                    <div className={classes.mental_block_content}>
                        <img width={250} height={250} src={props.picture} alt="предмет"/>
                        <div>
                            <div className={classes.radio_block}>
                                {props.variants.map(variant =>
                                    <RadioButton Click={handleOptionChange} text={variant.text} id={variant.id} value={variant.text}/>
                                )}
                            </div>
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
                </div>
            </div>
            <ModalWindow correctWord={selectedOption === correct_label}
                         user_word_hint={selectedOption}
                         correct_word_hint={correct_label}
                         massive_len={props.namePicturesState.length}
                         score={score}/>
        </div>
    );
};

export default NamePictureGame;