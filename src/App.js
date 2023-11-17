import logo from './logo.svg';
import './App.css';
import Header from "./Header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Content from "./Content/Content";
import WordsGame from "./Games/WordsGame/WordsGame";

function App() {
    return (
        <div className="App">
            <div className={"bg-wrapper"}>
                <BrowserRouter>
                    <section>
                        <Header/>
                        <div className={"content-box"}>
                            <Routes>
                                <Route path={"/"} element={<Content/>}/>
                                <Route path={"/Home/Words"} element={<WordsGame/>}/>
                            </Routes>
                        </div>
                        {/*<Content/>*/}
                        <footer></footer>
                    </section>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
