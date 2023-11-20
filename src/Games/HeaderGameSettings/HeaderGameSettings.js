import React from 'react';
import classes from "./HeaderGameSettings.module.css";

const HeaderGameSettings = (props) => {
    function BackButton_Click(){
        window.location="/";
    }
    return (
        <div id="HeadBlockGame">
            <div className={classes.status_bar}
                 style={{"display":"flex", "flexDirection":"row", "alignItems":"center", "justifyContent": "space-between"}}>
                <div id="BackButtonBlock" >
                    <div id="timerstatus">
                        <button className={classes.but_back} onClick={BackButton_Click}> &lt; Назад</button>
                    </div>
                </div>
                <div id="TimerAndCounterBlock" style={{display:props.display}}>
                    <div className={classes.status_bar} id="timerstatus">
                        <div className={classes.timer_block} style={{display: "none"}}>
                            <span className={classes.small_wh_text}>время</span>
                            <span id="TimerHeaderBlock" className={classes.big_wh_text}>00:00</span>
                        </div>
                        <div className={classes.scores_block}>
                            <span className={classes.small_wh_text}>Примеров решено</span>
                            <span id="CounterExampleBlock" className={classes.big_wh_text}>{props.score}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderGameSettings;
