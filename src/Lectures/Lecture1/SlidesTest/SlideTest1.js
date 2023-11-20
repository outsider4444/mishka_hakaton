import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {motion} from "framer-motion";
import classes from "./SlidesTest.module.css";

const SlideTest1 = (props) => {
    const [answer, setAnswer] = useState(null);

    function onClickBtn(value, id){
        let check_btn1 = document.getElementById("first");
        let check_btn2 = document.getElementById("second");
        let check_btn3 = document.getElementById("third");
        let check_btn4 = document.getElementById("fourth");
        if (id === "first"){
            check_btn1.src = "https://umka.aisgorod.ru/Content/NewDesign/img/red-button-bg.svg"
            check_btn2.src = "https://umka.aisgorod.ru/Content/NewDesign/img/blue-button-bg.svg"
            check_btn3.src = "https://umka.aisgorod.ru/Content/NewDesign/img/blue-button-bg.svg"
            check_btn4.src = "https://umka.aisgorod.ru/Content/NewDesign/img/blue-button-bg.svg"
        }
        if (id==="second"){
            check_btn1.src = "https://umka.aisgorod.ru/Content/NewDesign/img/blue-button-bg.svg"
            check_btn2.src = "https://umka.aisgorod.ru/Content/NewDesign/img/red-button-bg.svg"
            check_btn3.src = "https://umka.aisgorod.ru/Content/NewDesign/img/blue-button-bg.svg"
            check_btn4.src = "https://umka.aisgorod.ru/Content/NewDesign/img/blue-button-bg.svg"
        }
        if (id==="third"){
            check_btn1.src = "https://umka.aisgorod.ru/Content/NewDesign/img/blue-button-bg.svg"
            check_btn2.src = "https://umka.aisgorod.ru/Content/NewDesign/img/blue-button-bg.svg"
            check_btn3.src = "https://umka.aisgorod.ru/Content/NewDesign/img/red-button-bg.svg"
            check_btn4.src = "https://umka.aisgorod.ru/Content/NewDesign/img/blue-button-bg.svg"
        }
        if (id === "fourth"){
            check_btn1.src = "https://umka.aisgorod.ru/Content/NewDesign/img/blue-button-bg.svg"
            check_btn2.src = "https://umka.aisgorod.ru/Content/NewDesign/img/blue-button-bg.svg"
            check_btn3.src = "https://umka.aisgorod.ru/Content/NewDesign/img/blue-button-bg.svg"
            check_btn4.src = "https://umka.aisgorod.ru/Content/NewDesign/img/red-button-bg.svg"
        }
        setAnswer(id);
    }

    function checkAnswer(){
        if (answer === "second"){
            props.setScore(props.score + 1);
        }
        console.log(props.score, answer)
    }

    return (
        <motion.div
            initial={{opacity: 0, scale: 0.0}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.5}}>
            <div className={classes.white_block}>
                <img className={classes.block_bg_wh}
                     src="https://umka.aisgorod.ru/Content/NewDesign/img/bg-wh-rec.svg"/>
                <div className={classes.mental_block_content}>
                    <div style={{marginLeft: 150}}>
                        <span style={{fontSize: 48}}>Как подготовить абакус к работе?</span>
                    </div>
                    <div style={{marginTop: 100}}>
                        <button className={classes.orange_button} onClick={()=> onClickBtn(0, "first")}
                                style={{outline: "none", boxShadow: "none", float: "left"}}>
                            <img className={classes.orange_but_bg} id={"first"}
                                 src="https://umka.aisgorod.ru/Content/NewDesign/img/blue-button-bg.svg"
                                 alt="red-but"/>
                            <span className={classes.button_text} style={{"fontSize": "18pt", "padding": "10px"}}>
                                Поставить доску на <br/> пол
                            </span>
                        </button>
                        <button className={classes.orange_button} onClick={()=> onClickBtn(1, "second")}
                                style={{"outline": "none", "boxShadow": "none", marginLeft: 100}}>
                            <img className={classes.orange_but_bg} id={"second"}
                                 src="https://umka.aisgorod.ru/Content/NewDesign/img/blue-button-bg.svg"
                                 alt="red-but"/>
                            <span className={classes.button_text} style={{"fontSize": "18pt", "padding": "10px"}}>
                                Поднять счеты в  <br/> вертикальное положение и вернуть их <br/> в горизонтальное
                            </span>
                        </button>
                    </div>
                        <div style={{marginTop: 100}}>
                            <button className={classes.orange_button} onClick={()=> onClickBtn(0, "third")}
                                    style={{"outline": "none", "boxShadow": "none"}}>
                                <img className={classes.orange_but_bg} id={"third"}
                                     src="https://umka.aisgorod.ru/Content/NewDesign/img/blue-button-bg.svg"
                                     alt="red-but"/>
                                <span className={classes.button_text} style={{"fontSize": "18pt", "padding": "10px"}}>
                                Почистить абакус <br/> от пыли
                            </span>
                            </button>
                            <button className={classes.orange_button} onClick={()=> onClickBtn(0, "fourth")}
                                    style={{"outline": "none", "boxShadow": "none", marginLeft: 180}}>
                                <img className={classes.orange_but_bg} id={"fourth"}
                                     src="https://umka.aisgorod.ru/Content/NewDesign/img/blue-button-bg.svg"
                                     alt="red-but"/>
                                <span className={classes.button_text} style={{"fontSize": "18pt", "padding": "10px"}}>
                                Поставить абакус на <br/> край стола
                            </span>
                            </button>
                        </div>
                    <div style={{width: "100%", float: "left"}}>
                        <div style={{float: "left"}}>
                            <NavLink to={"/Lectures/1/3"} className={classes.orange_button_left}
                                     style={{"outline": "none", "boxShadow": "none"}}>
                                <img className={classes.orange_but_bg}
                                     src="https://umka.aisgorod.ru/Content/NewDesign/img/red-button-bg.svg"
                                     alt="red-but"/>
                                <span className={classes.button_text}
                                      style={{"fontSize": "18pt", "padding": "10px"}}> Назад </span>
                            </NavLink>
                        </div>
                        <div style={{float: "right"}}>
                            <NavLink to={"/Lectures/1/5"} className={classes.orange_button_right} onClick={checkAnswer}
                                     style={{"outline": "none", "boxShadow": "none"}}>
                                <img className={classes.orange_but_bg}
                                     src="https://umka.aisgorod.ru/Content/NewDesign/img/red-button-bg.svg"
                                     alt="red-but"/>
                                <span className={classes.button_text}
                                      style={{"fontSize": "18pt", "padding": "10px"}}> Дальше </span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default SlideTest1;
