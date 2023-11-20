import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {motion} from "framer-motion";
import classes from "./Slides.module.css";

const Slide3 = (props) => {
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
                        <span style={{fontSize: 48}}>Как устроен абакус?</span>
                    </div>
                    <div style={{float: "left", marginTop: 10}}>
                        <p style={{textAlign: "left", margin: 0}}>
                            На каждой спице находится пять косточек: одна небесная и четыре земные.
                            Чтобы набрать цифру 1, достаточно поднять одну земную косточку. Остальные цифры до 5
                            набираем по такой же схеме: 2 — поднимаем две земные косточки, 3 — три земные косточки,
                            4 — четыре земные косточки. Дальше все усложняется.
                        </p>
                        <img src="../../../slides/img_1.png" width={500} height={400}
                             style={{borderRadius: 30, marginTop: "20px"}} alt=""/>
                    </div>
                    <div style={{width: "100%", float: "left"}}>
                        <div style={{float: "left"}}>
                            <NavLink to={"/Lectures/1/2"} className={classes.orange_button_left}
                                     style={{"outline": "none", "boxShadow": "none"}}>
                                <img className={classes.orange_but_bg}
                                     src="https://umka.aisgorod.ru/Content/NewDesign/img/red-button-bg.svg"
                                     alt="red-but"/>
                                <span className={classes.button_text} style={{"fontSize": "18pt", "padding":"10px"}}> Назад </span>
                            </NavLink>
                        </div>
                        <div style={{float: "right"}}>
                            <NavLink to={"/Lectures/1/4"} className={classes.orange_button}
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

export default Slide3;
