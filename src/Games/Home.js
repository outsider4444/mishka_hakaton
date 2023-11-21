import React, {useState} from 'react';
import WordsGameSettings from "./WordsGame/WordsGameSettings";
import {Route, Routes} from "react-router-dom";
import WordsGame from "./WordsGame/WordsGame";
import Header from "../Header/Header";
import MemoryGame from "./MemoryGame/MemoryGame";
import MemoryGameSettings from "./MemoryGame/MemoryGameSettings";

const Home = (props) => {
    const [correctWord, setCorrectWord] = useState();
    const [languageType, setLanguageType] = useState("English");
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
                </Routes>
            </div>
        </section>
    );
};

export default Home;
