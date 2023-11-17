import logo from './logo.svg';
import './App.css';
import Header from "./Header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Content from "./Content/Content";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
            <section>
                <Header/>
                {/*<Routes>*/}
                {/*    <Route path={"/"} element={<Content/>}/>*/}
                {/*</Routes>*/}
                <Content/>
                <footer></footer>
            </section>
            </BrowserRouter>
        </div>
    );
}

export default App;
