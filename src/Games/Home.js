import React, {useState} from 'react';
import WordsGameSettings from "./WordsGame/WordsGameSettings";
import {Route, Routes} from "react-router-dom";
import WordsGame from "./WordsGame/WordsGame";
import Header from "../Header/Header";

const Home = (props) => {
    const [correctWord, setCorrectWord] = useState();
    const [languageType, setLanguageType] = useState("English");
    return (
        <section>
            <div className={"content-box"}>
                <Header/>
                <Routes>
                    <Route path={"WordsSetting/"} element={<WordsGameSettings languageType={languageType}
                                                                              setLanguageType={setLanguageType}/>}></Route>
                    <Route path={"Words"} element={<WordsGame/>}></Route>
                </Routes>
            </div>
        </section>
    );
};

export default Home;
