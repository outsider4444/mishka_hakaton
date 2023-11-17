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
                <div id="TitleHeaderBlock" className="heading-block-center">
                    <span className={classes.heading_block} id="MentalTitle" style={{"marginLeft": 0}}>{props.text}</span>
                </div>
            </div>
        </div>
    );
};

export default HeaderGameSettings;
