import React, {useState} from 'react';
import WordsGameSettings from "./WordsGame/WordsGameSettings";
import {Route, Routes} from "react-router-dom";
import WordsGame from "./WordsGame/WordsGame";
import Header from "../Header/Header";
import MemoryGame from "./MemoryGame/MemoryGame";
import MemoryGameSettings from "./MemoryGame/MemoryGameSettings";
import SentenceGame from "./SentenceGame/SentenceGame";

const Home = (props) => {
    const [correctWord, setCorrectWord] = useState();
    const [languageType, setLanguageType] = useState("English");
    const words = [
        ["This", "is", "a", "sample", "sentence", "word", "bear"].sort(),
        ["London", "bear", "is", "a", "capital", "of", "Great Britain", "Moscow"],
        ["White", "bears", "are", "living", "in", "Antarktika", "soup", "motorcycle"],
    ];
    const correctOrder = [
        ["This", "is", "a", "sample", "sentence"],
        ["London", "is", "a", "capital", "of", "Great Britain"],
        ["White", "bears", "are", "living", "in", "Antarktika"]
    ]
    const translation = [
        "Это простое предложение",
        "Лондон - столица Великобритании",
        "Белые медведи живут на северном полюсе" // Дописать перевод верно
    ]

    const words_translation = Math.floor(Math.random() * words.length);

    return (
        <section>
            <div className={"content-box"}>
                <Header/>
                <Routes>
                    <Route path={"WordsSetting/"} element={<WordsGameSettings languageType={languageType}
                                                                              setLanguageType={setLanguageType}/>}/>
                    <Route path={"Words"} element={<WordsGame languageType={languageType}/>}/>


                    <Route path={"CardsSetting/"} element={<MemoryGameSettings/>}/>
                    <Route path={"Cards"} element={<MemoryGame/>}/>
                    <Route path={"Sentence"}
                           element={<SentenceGame
                               words={words[words_translation].sort(() => Math.random() - 0.5)}
                               translation={translation[words_translation]}
                               correctOrder={correctOrder[words_translation]}
                           />}/>
                </Routes>
            </div>
        </section>
    );
};

export default Home;
