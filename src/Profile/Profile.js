import React from 'react';
import Header from "../Header/Header";
import classes from "./Profile.module.css";

const Profile = (props) => {
    return (
        <div>
            <Header/>
            <div id="GameSettingsBlock" className="game-block" tabIndex="-1"
                 style={{"outline": "none", "boxShadow": "none"}}>
                <div className={classes.white_block}>
                    <img className={classes.block_bg_wh}
                         src="https://umka.aisgorod.ru/Content/NewDesign/img/bg-wh-rec.svg"/>
                    <div className={classes.mental_block_content}>

                        <div className={classes.avatar}>
                        </div>
                        <div className={classes.profile_tag1}>
                            <label htmlFor="" className={classes.label_profile_title}>Фамилия</label>
                            <div className={classes.label_profile}>Круглов</div>
                        </div>
                        <div className={classes.profile_tag2}>
                            <label htmlFor="" className={classes.label_profile_title}>Имя</label>
                            <div className={classes.label_profile}>Егор</div>
                        </div>
                        <div className={classes.profile_tag3}>
                            <label htmlFor="" className={classes.label_profile_title}>Класс</label>
                            <div className={classes.label_profile}>3 А</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
