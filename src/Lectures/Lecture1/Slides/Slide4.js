import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {motion} from "framer-motion";
import classes from "./Slides.module.css";

const Slide4 = (props) => {
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
                        <span style={{fontSize: 48}}>Как выполнять сложение и вычитание</span>
                    </div>
                    <div style={{float: "left", marginTop: 10}}>
                        <p style={{textAlign: "left", margin: 0}}>
                            Простой счет выполняется последовательным набором чисел на абакусе, в результате которого счеты показывают ответ.
                            Допустим, нам нужно решить, чему равно 22 + 15. Чтобы набрать 22, поднимаем две земные косточки в разряде десятков и делаем то же самое в разряде единиц.
                        </p>
                        <img src="../../../slides/img_2.png" width={550} height={400} style={{borderRadius: 30}} alt=""/>
                    </div>
                    <div style={{width: "100%", float: "left"}}>
                        <div style={{float: "left"}}>
                            <NavLink to={"/Lectures/1/3"} className={classes.orange_button_left}
                                     style={{"outline": "none", "boxShadow": "none"}}>
                                <img className={classes.orange_but_bg}
                                     src="https://umka.aisgorod.ru/Content/NewDesign/img/red-button-bg.svg"
                                     alt="red-but"/>
                                <span className={classes.button_text} style={{"fontSize": "18pt", "padding":"10px"}}> Назад </span>
                            </NavLink>
                        </div>
                        <div style={{float: "right"}}>
                            <NavLink to={"/Lectures/1/test1"} className={classes.orange_button}
                                     style={{"outline": "none", "boxShadow": "none"}}>
                                <img className={classes.orange_but_bg}
                                     src="https://umka.aisgorod.ru/Content/NewDesign/img/red-button-bg.svg"
                                     alt="red-but"/>
                                <span className={classes.button_text} style={{"fontSize": "18pt", "padding":"10px"}}> Дальше </span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Slide4;
