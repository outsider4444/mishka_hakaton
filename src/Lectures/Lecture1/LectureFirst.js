import React, {useState} from 'react';
import Header from "../../Header/Header";
import {Link, Route, Routes} from "react-router-dom";
import Slide1 from "./Slides/Slide1";
import Slide2 from "./Slides/Slide2";
import Slide3 from "./Slides/Slide3";
import Slide4 from "./Slides/Slide4";
import SlideTest1 from "./SlidesTest/SlideTest1";

const LectureFirst = (props) => {
    const [slide, setSlide] = useState(1);

    return (
        // Добавить БГ другого мишку
        <div className={"content-box"}>
            <Header/>
            <Routes>
                <Route path={"/"} element={<Slide1 text={1}/>}/>
                <Route path={"2"} element={<Slide2 text={2}/>}/>
                <Route path={"3"} element={<Slide3 text={3}/>}/>
                <Route path={"4"} element={<Slide4 text={4}/>}/>
                <Route path={"Test1"} element={<SlideTest1 score={props.score} setScore={props.setScore}/>}/>
            </Routes>
        </div>
    );
};

export default LectureFirst;
