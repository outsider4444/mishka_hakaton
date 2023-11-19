import React, {useState} from 'react';
import WordsGameSettings from "./WordsGame/WordsGameSettings";
import {Route, Routes} from "react-router-dom";
import WordsGame from "./WordsGame/WordsGame";

const Home = (props) => {
    const [correctWord, setCorrectWord] = useState();
    const [languageType, setLanguageType] = useState("English");
    return (
        <div>
            <Routes>
                <Route path={"WordsSetting/"} element={<WordsGameSettings languageType={languageType}
                                                                           setLanguageType={setLanguageType} />}></Route>
                <Route path={"Words"} element={<WordsGame />}></Route>
            </Routes>
        </div>
    );
};

export default Home;
