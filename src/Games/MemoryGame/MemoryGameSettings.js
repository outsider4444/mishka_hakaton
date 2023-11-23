import React from 'react';
import HeaderGameSettings from "../HeaderGameSettings/HeaderGameSettings";
import classes from "./MemoryGame.module.css";
import {NavLink} from "react-router-dom";
import RadioButton from "../../Templates/RadioButton/RadioButton";

const MemoryGameSettings = (props) => {
    const itemsEnglishAndCards = [
        {id: 1, sub_id: 0, text: "Bear", img: 'https://i.pinimg.com/originals/b3/50/ae/b350ae1091e71ac6dfadfcaefec2957b.png', stat: ""},
        {id: 1, sub_id: 1,text: null, img: 'https://i.pinimg.com/originals/b3/50/ae/b350ae1091e71ac6dfadfcaefec2957b.png', stat: ""},
        {id: 2, sub_id: 0,text: null, img: 'https://gas-kvas.com/uploads/posts/2023-01/1673475075_gas-kvas-com-p-pingvin-detskii-risunok-13.png', stat: ""},
        {id: 2, sub_id: 1,text: "Penguin" ,img: 'https://gas-kvas.com/uploads/posts/2023-01/1673475075_gas-kvas-com-p-pingvin-detskii-risunok-13.png', stat: ""},
        {id: 3, sub_id: 0,text: "Seal", img: 'https://clipart-library.com/new_gallery/72-720266_free-to-use-amp-public-domain-sea-lion.png', stat: ""},
        {id: 3, sub_id: 1,text: null, img: 'https://clipart-library.com/new_gallery/72-720266_free-to-use-amp-public-domain-sea-lion.png', stat: ""},
        {id: 4, sub_id: 0,text: null, img: 'https://www.downloadclipart.net/large/walrus-png-picture.png', stat: ""},
        {id: 4, sub_id: 1,text: "Walrus", img: 'https://www.downloadclipart.net/large/walrus-png-picture.png', stat: ""},
        {id: 5, sub_id: 0,text: "Arctic fox", img: 'https://www.freepngimg.com/thumb/fox/132036-arctic-fox-snow-png-free-photo.png', stat: ""},
        {id: 5, sub_id: 1,text: null, img: 'https://www.freepngimg.com/thumb/fox/132036-arctic-fox-snow-png-free-photo.png', stat: ""},
        {id: 6, sub_id: 0,text: "Whale", img: 'https://www.pngkit.com/png/detail/51-515781_png-freeuse-stock-sperm-whale-drawing-killer-whale.png', stat: ""},
        {id: 6, sub_id: 1,text: null, img: 'https://www.pngkit.com/png/detail/51-515781_png-freeuse-stock-sperm-whale-drawing-killer-whale.png', stat: ""},
        {id: 7, sub_id: 0,text: null, img: 'https://www.kindpng.com/picc/m/212-2122185_deer-clipart-real-deer-clipart-hd-png-download.png', stat: ""},
        {id: 7, sub_id: 1,text: "Northern deer", img: 'https://www.kindpng.com/picc/m/212-2122185_deer-clipart-real-deer-clipart-hd-png-download.png', stat: ""},
        {id: 8, sub_id: 0,text: null, img: 'https://clipart-library.com/images_k/owl-clipart-transparent/owl-clipart-transparent-21.png', stat: ""},
        {id: 8, sub_id: 1,text: "White Owl", img: 'https://clipart-library.com/images_k/owl-clipart-transparent/owl-clipart-transparent-21.png', stat: ""},
    ].sort(() => Math.random() - 0.5 )
    const itemsTranslated = [
        {id: 1, sub_id: 0, text: "Bear", stat: ""},
        {id: 1, sub_id: 1,text: "Медведь", stat: ""},
        {id: 2, sub_id: 0,text: "Пингвин", stat: ""},
        {id: 2, sub_id: 1,text: "Penguin", stat: ""},
        {id: 3, sub_id: 0,text: "Seal", stat: ""},
        {id: 3, sub_id: 1,text: "Тюлень", stat: ""},
        {id: 4, sub_id: 0,text: "Морж", stat: ""},
        {id: 4, sub_id: 1,text: "Walrus", stat: ""},
        {id: 5, sub_id: 0,text: "Arctic fox", stat: ""},
        {id: 5, sub_id: 1,text: "Песец", stat: ""},
        {id: 6, sub_id: 0,text: "Whale", stat: ""},
        {id: 6, sub_id: 1,text: "Кит", stat: ""},
        {id: 7, sub_id: 0,text: "Северный олень", stat: ""},
        {id: 7, sub_id: 1,text: "Northern deer", stat: ""},
        {id: 8, sub_id: 0,text: "Белая сова", stat: ""},
        {id: 8, sub_id: 1,text: "White Owl", stat: ""},
    ].sort(() => Math.random() - 0.5)

    function onChangeMode(mode){
        let PreStartGame = document.getElementById("PreStartGame");
        PreStartGame.hidden = false;

        props.setModeCardsType(mode);
    }
    function onStartCardsGame(){
        if (props.modeCardsType === "Only Text"){
            props.setCardsItems(itemsTranslated);
        } else{
            props.setCardsItems(itemsEnglishAndCards);
        }
    }

    return (
        <div>
            <HeaderGameSettings text={"Слова"} display={"none"}/>
            <div id="GameSettingsBlock" className="game-block" tabIndex="-1"
                 style={{"outline": "none", "boxShadow": "none"}}>
                <div className={classes.white_block}>
                    <img className={classes.block_bg_wh}
                         src="https://umka.aisgorod.ru/Content/NewDesign/img/bg-wh-rec.svg"/>
                    <div className={classes.mental_block_content}>
                        <div className={classes.but_block_settings1}>
                            <span className={classes.inp_label}>Режим игры:</span>
                            <div className={classes.radio_block}>
                                <RadioButton Click={() => onChangeMode("Only Cards")} text={"Только картинки"} id={"1"} />
                                <RadioButton Click={() => onChangeMode("Cards n Text")} text={"Картинки и текст"} id={"2"} />
                                <RadioButton Click={() => onChangeMode("Only Text")} text={"Только текст"} id={"3"} />
                            </div>
                            <div className={classes.but_block_settings2}>
                                <NavLink to={"/Home/Cards"} onClick={onStartCardsGame}
                                         id="PreStartGame" className={classes.orange_button}
                                         style={{"marginTop": 0, "outline": "none", "boxShadow": "none"}}
                                         hidden={true}>
                                    <img className={classes.orange_but_bg}
                                         src="https://umka.aisgorod.ru/Content/NewDesign/img/red-button-bg.svg"
                                         alt="red-but"/>
                                    <span className={classes.button_text}>Начинаю</span>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemoryGameSettings;
