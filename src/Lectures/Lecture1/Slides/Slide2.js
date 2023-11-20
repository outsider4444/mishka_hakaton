import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {motion} from "framer-motion";
import classes from "./Slides.module.css";

const Slide2 = (props) => {
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
                        <span style={{fontSize: 48}}>Как использовать абакус?</span>
                    </div>
                    <div style={{float: "left", marginTop: 10}}>
                        <p style={{textAlign: "left", margin: 0}}>
                            Для использования абакуса, нужно подготовить счеты. Поставьте доску на столе, поднимите
                            счеты в вертикальное положение, чтобы верхние бусинки приклеились к разделительной перекладине.
                            Затем верните абакус в исходное горизонтальное положение на столе и проведите указательным
                            пальцем между небесными косточками и перекладиной.
                        </p>
                        <img src="https://www.npr.org/assets/img/2014/11/07/abacustest6.gif" width={400} height={300} style={{borderRadius: 30}} alt=""/>
                    </div>
                    <div style={{width: "100%", float: "left", marginTop: 50}}>
                        <div style={{float: "left"}}>
                            <NavLink to={"/Lectures/1/"} className={classes.orange_button_left}
                                     style={{"outline": "none", "boxShadow": "none"}}>
                                <img className={classes.orange_but_bg}
                                     src="https://umka.aisgorod.ru/Content/NewDesign/img/red-button-bg.svg"
                                     alt="red-but"/>
                                <span className={classes.button_text} style={{"fontSize": "18pt", "padding":"10px"}}> Назад </span>
                            </NavLink>
                        </div>
                        <div style={{float: "right"}}>
                            <NavLink to={"/Lectures/1/3"} className={classes.orange_button}
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

export default Slide2;
