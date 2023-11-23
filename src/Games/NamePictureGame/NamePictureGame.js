import React, {useState} from "react";
import HeaderGameSettings from "../HeaderGameSettings/HeaderGameSettings";
import classes from "./NamePictureGame.module.css";
import RadioButton from "../../Templates/RadioButton/RadioButton";

const NamePictureGame = (props) => {
    const [selectedOption, setSelectedOption] = useState("");
    const [isCorrect, setIsCorrect] = useState(null);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const checkAnswer = () => {
        if (selectedOption === "правильный вариант") {
            setIsCorrect(true);
        } else {
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
                        <img src="http://ii.yakuji.moe/vg/thumb/1641833179696s.png" alt="предмет"/>
                        <div>
                            <div className={classes.radio_block}>
                                <RadioButton Click={handleOptionChange} text={"Вариант 1"} id={"1"} value={"Вариант1"}/>
                                <RadioButton Click={handleOptionChange} text={"Вариант 2"} id={"2"} value={"Вариант2"}/>
                                <RadioButton Click={handleOptionChange} text={"Вариант 3"} id={"3"} value={"правильный вариант"}/>
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
                        {isCorrect === true && <p>Правильный ответ!</p>}
                        {isCorrect === false && <p>Неправильный ответ!</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NamePictureGame;