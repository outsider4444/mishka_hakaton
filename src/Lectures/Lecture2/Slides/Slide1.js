import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {motion} from "framer-motion";
import classes from "./Slides.module.css";
import ReactPlayer from 'react-player';

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
                        <span style={{fontSize: 48}}>Транскрипция</span>
                    </div>
                            <ReactPlayer width={'80%'} height='80%'
                                         url="../../../video/zvuki.mp4"
                                         playing={true}
                                         controls={true}
                            />
                    <div style={{width: "100%", float: "left"}}>
                        <div style={{float: "right", marginTop: 50, marginLeft: 130}}>
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
