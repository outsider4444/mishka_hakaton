import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {motion} from "framer-motion";
import classes from "./Slides.module.css";

const Slide1 = (props) => {
    return (
        <motion.div
            initial={{opacity: 0, scale: 0.0}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.5}}>
            <div className={classes.white_block}>
                <img className={classes.block_bg_wh}
                     src="https://umka.aisgorod.ru/Content/NewDesign/img/bg-wh-rec.svg"/>
                <div className={classes.mental_block_content}>
                    <div style={{marginLeft: 250}}>
                        <span style={{fontSize: 48}}>Что такое абакус?</span>
                    </div>
                    <div style={{float: "left", marginTop: 10}}>
                        <p style={{textAlign: "left", margin: 0}}>
                            Абакус - это старинный счетный инструмент с бусинами на спицах для математических
                            операций. Был создан в Китае около пяти тысячелетий назад.
                        </p>
                        <motion.img
                            initial={{opacity: 0, scale: 0.0}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{duration: 2}}
                            src="https://bukvoegka.ru/wp-content/uploads/abacus.png" alt="" width={400} height={300}/>
                    </div>
                    <div style={{width: "100%", float: "left"}}>
                        <div style={{float: "right", marginTop: 150, marginLeft: 130}}>
                            <NavLink to={"2"} className={classes.orange_button}
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

export default Slide1;
