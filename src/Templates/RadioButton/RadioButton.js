import React from 'react';
import classes from "./RadioButton.module.css";

const RadioButton = (props) => {
    return (
        <div>
            <input className={classes.meg_radio} onClick={props.Click}
                   type="radio" id={`set-`+props.id} name="answer"
                   style={{float: "left"}}
                   value={props.value}
            />
            <label className={classes.dark_label} htmlFor={`set-`+props.id}>{props.text}</label>
        </div>
    );
};

export default RadioButton;
