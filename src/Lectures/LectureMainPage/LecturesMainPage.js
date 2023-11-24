import React from 'react';
import Header from "../../Header/Header";
import {Link} from "react-router-dom";
import classes from "./LecturesMainPage.module.css";

const MyComponent = () => {
    return (
        <section className={"bg_bear"}>
            <div className={"content-box"}>
                <Header/>
                <div className={classes.content_box}>
                <span className={classes.heading_block}
                      style={{marginLeft: "auto", marginRight: "auto", marginTop: 0}}>Лекции</span>
                    <div className={classes.trainer_block}>
                        <Link to={"1"} className={classes.trainer_cards}
                              id={classes["mental"]}>
                            <img src="../../../slides/abacus-png-hd-abacus-clip-art-illustration-6951.png"
                                 style={{width: 80, height: 80, marginLeft: 10}}/>
                            <span className={classes.trainer_text}>Что такое "Абакус"?</span>
                        </Link>
                        <Link className={classes.trainer_cards} to={"2"} id={classes["stacks"]}>
                            <img src="../../../img/icons/icon_puzzle.png"
                                 style={{width: 80, height: 80, marginLeft: 10}}/>
                            <span style={{marginLeft: "15px"}} className={classes.trainer_text}>Транскрипция</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyComponent;
