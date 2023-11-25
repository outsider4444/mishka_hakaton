import React, {useState} from 'react';
import classes from "./HeaderGameSettings.module.css";
import StopWatch from "./StopWatch";

const HeaderGameSettings = (props) => {
    const [duration, setDuration] = useState(0);

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
                <div id="TimerAndCounterBlock" style={{marginRight: props.example_visible==="none" ? 150 : 0}}>
                    <div className={classes.status_bar} id="timerstatus">
                        <div className={classes.timer_block}>
                            <span className={classes.small_wh_text} hidden={!props.watch}>время</span>
                            <span id="TimerHeaderBlock" className={classes.big_wh_text}><StopWatch duration={duration}
                                                                                                   setDuration={setDuration} watch={!props.watch}/></span>
                        </div>
                        <div className={classes.scores_block} style={{display: props.example_visible === "none" ? "none" : "flex"}}>
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
