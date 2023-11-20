import React, {useState} from 'react';
import Header from "../Header/Header";
import {Link, Route, Routes} from "react-router-dom";
import LecturesMainPage from "./LectureMainPage/LecturesMainPage";
import LectureFirst from "./Lecture1/LectureFirst";

const LectureWrapper = (props) => {
    const [score, setScore] = useState(0);

    return (
        <div>
            <Routes>
                <Route path={"/"} element={<LecturesMainPage/>} />
                <Route path={"1/*"} element={<LectureFirst score={score} setScore={setScore}/>}/>
            </Routes>
        </div>
    );
};

export default LectureWrapper;
