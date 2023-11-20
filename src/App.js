import logo from './logo.svg';
import './App.css';
import Header from "./Header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Content from "./Content/Content";
import WordsGame from "./Games/WordsGame/WordsGame";
import {useState} from "react";
import Home from "./Games/Home";
import LectureWrapper from "./Lectures/LectureWrapper";

function App() {
    return (
        <div className="App">
            <div className={"bg-wrapper"}>
                <BrowserRouter>
                    <Routes>
                        <Route path={"/"} element={<Content/>}/>
                        <Route path={"/Lectures/*"} element={<LectureWrapper/>}/>
                        <Route path={"/Home/*"} element={<Home/>}/>
                    </Routes>
                    <footer></footer>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
