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
                    </div>
                    <Link to={"1"} className={classes.trainer_cards}
                          id={classes["mental"]}>
                        <img src="../../../slides/abacus-png-hd-abacus-clip-art-illustration-6951.png"
                             style={{width: 80, height: 80, marginLeft: 10}}/>
                        <span className={classes.trainer_text}>Что такое "Абакус"?</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default MyComponent;
