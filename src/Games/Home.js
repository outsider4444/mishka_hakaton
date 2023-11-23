import React, {useState} from 'react';
import WordsGameSettings from "./WordsGame/WordsGameSettings";
import {Route, Routes} from "react-router-dom";
import WordsGame from "./WordsGame/WordsGame";
import Header from "../Header/Header";
import MemoryGame from "./MemoryGame/MemoryGame";
import MemoryGameSettings from "./MemoryGame/MemoryGameSettings";
import SentenceGame from "./SentenceGame/SentenceGame";
import NamePictureGame from "./NamePictureGame/NamePictureGame";

const Home = (props) => {
    // Для игры в слова
    const [correctWord, setCorrectWord] = useState();
    const [languageType, setLanguageType] = useState("English");

    // Для игры в карточки
    const [modeCardsType, setModeCardsType] = useState("Cards n Text");
    const [cardsItems, setCardsItems] = useState([
        {
            id: 1,
            sub_id: 0,
            text: "Bear",
            img: 'https://i.pinimg.com/originals/b3/50/ae/b350ae1091e71ac6dfadfcaefec2957b.png',
            stat: ""
        },
        {
            id: 1,
            sub_id: 1,
            text: null,
            img: 'https://i.pinimg.com/originals/b3/50/ae/b350ae1091e71ac6dfadfcaefec2957b.png',
            stat: ""
        },
        {
            id: 2,
            sub_id: 0,
            text: null,
            img: 'https://gas-kvas.com/uploads/posts/2023-01/1673475075_gas-kvas-com-p-pingvin-detskii-risunok-13.png',
            stat: ""
        },
        {
            id: 2,
            sub_id: 1,
            text: "Penguin",
            img: 'https://gas-kvas.com/uploads/posts/2023-01/1673475075_gas-kvas-com-p-pingvin-detskii-risunok-13.png',
            stat: ""
        },
        {
            id: 3,
            sub_id: 0,
            text: "Seal",
            img: 'https://clipart-library.com/new_gallery/72-720266_free-to-use-amp-public-domain-sea-lion.png',
            stat: ""
        },
        {
            id: 3,
            sub_id: 1,
            text: null,
            img: 'https://clipart-library.com/new_gallery/72-720266_free-to-use-amp-public-domain-sea-lion.png',
            stat: ""
        },
        {id: 4, sub_id: 0, text: null, img: 'https://www.downloadclipart.net/large/walrus-png-picture.png', stat: ""},
        {
            id: 4,
            sub_id: 1,
            text: "Walrus",
            img: 'https://www.downloadclipart.net/large/walrus-png-picture.png',
            stat: ""
        },
        {
            id: 5,
            sub_id: 0,
            text: "Arctic fox",
            img: 'https://www.freepngimg.com/thumb/fox/132036-arctic-fox-snow-png-free-photo.png',
            stat: ""
        },
        {
            id: 5,
            sub_id: 1,
            text: null,
            img: 'https://www.freepngimg.com/thumb/fox/132036-arctic-fox-snow-png-free-photo.png',
            stat: ""
        },
        {
            id: 6,
            sub_id: 0,
            text: "Whale",
            img: 'https://www.pngkit.com/png/detail/51-515781_png-freeuse-stock-sperm-whale-drawing-killer-whale.png',
            stat: ""
        },
        {
            id: 6,
            sub_id: 1,
            text: null,
            img: 'https://www.pngkit.com/png/detail/51-515781_png-freeuse-stock-sperm-whale-drawing-killer-whale.png',
            stat: ""
        },
        {
            id: 7,
            sub_id: 0,
            text: null,
            img: 'https://www.kindpng.com/picc/m/212-2122185_deer-clipart-real-deer-clipart-hd-png-download.png',
            stat: ""
        },
        {
            id: 7,
            sub_id: 1,
            text: "Northern deer",
            img: 'https://www.kindpng.com/picc/m/212-2122185_deer-clipart-real-deer-clipart-hd-png-download.png',
            stat: ""
        },
        {
            id: 8,
            sub_id: 0,
            text: null,
            img: 'https://clipart-library.com/images_k/owl-clipart-transparent/owl-clipart-transparent-21.png',
            stat: ""
        },
        {
            id: 8,
            sub_id: 1,
            text: "White Owl",
            img: 'https://clipart-library.com/images_k/owl-clipart-transparent/owl-clipart-transparent-21.png',
            stat: ""
        },
    ].sort(() => Math.random() - 0.5));

    //Для игры в предложения-пазлы
    const [words, setWordsList] = useState([
        {id: 1, array: ["This", "is", "a", "simple", "sentence", "word", "bear"]},
        {id: 2, array: ["London", "bear", "is", "a", "capital", "of", "Great Britain", "Moscow"]},
        {id: 3, array: ["White", "bears", "are", "living", "in", "Antarktika", "soup", "motorcycle"]},
    ]);
    const [correctOrder, setCorrectOrder] = useState([{id: 1, array: ["This", "is", "a", "simple", "sentence"]},
        {id: 2, array: ["London", "is", "a", "capital", "of", "Great Britain"]},
        {id: 3, array: ["White", "bears", "are", "living", "in", "Antarktika"]}]);
    const [translation, setTranslation] = useState([{id: 1, array: "Это простое предложение"},
        {id: 2, array: "Лондон - столица Великобритании"},
        {id: 3, array: "Белые медведи живут на северном полюсе"}]);
    const words_translation = Math.floor(Math.random() * words.length);

    return (
        <section>
            <div className={"content-box"}>
                <Header/>
                <Routes>
                    <Route path={"WordsSetting/"} element={<WordsGameSettings languageType={languageType}
                                                                              setLanguageType={setLanguageType}/>}/>
                    <Route path={"Words"} element={<WordsGame languageType={languageType}/>}/>

                    <Route path={"CardsSetting/"}
                           element={<MemoryGameSettings setCardsItems={setCardsItems} modeCardsType={modeCardsType}
                                                        setModeCardsType={setModeCardsType}/>}/>
                    <Route path={"Cards"}
                           element={<MemoryGame items={cardsItems} setItems={setCardsItems}
                                                modeCardsType={modeCardsType}/>}/>

                    {/*todo Дописать варианты для картинок (создать массивы)*/}
                    <Route path={"NamePicture"} element={<NamePictureGame picture={null} variants={null} correctVariant={null}/>}/>

                    <Route path={"Sentence"} element={<SentenceGame
                        words={words[words_translation].array.sort(() => Math.random() - 0.5)}
                        translationWord={translation[words_translation].array}
                        correctOrder={correctOrder[words_translation].array}
                        wordsList={words}
                        translationList={translation}
                        correctOrderList={correctOrder}
                        setWordsList={setWordsList}
                        setCorrectOrder={setCorrectOrder}
                        setTranslation={setTranslation}
                        words_translation={words_translation}
                    />}/>
                </Routes>
            </div>
        </section>
    );
};

export default Home;
