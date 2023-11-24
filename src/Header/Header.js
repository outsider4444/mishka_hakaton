import React, {useState} from 'react';
import classes from "./Header.module.css";
import {Link, useLocation} from "react-router-dom";

const Header = (props) => {
    let nav_item_active_style = `${classes.nav_item} ${classes.active}`;
    let nav_to_show = document.getElementById("nav_to_show");
    let togle = document.getElementById(classes["toggle"]);
    const [toggler, setToggler] = useState(false);
    const location = useLocation();
    function showDiv() {
        setToggler(!toggler);
    }

    return (
        <div className={classes.header_wrapper}>
            <div className={classes.header}>
                <input type={"checkbox"} id={classes["toggle"]} checked={toggler} onChange={showDiv}/>
                <label htmlFor={classes["toggle"]} className={classes.hamburger}>
                    <div className={classes.top_bun}></div>
                    <div className={classes.meat}></div>
                    <div className={classes.bottom_bun}></div>
                </label>
                <div className={classes.nav} id={"nav_to_show"}>
                    <div className={classes.nav_wrapper}>
                        <nav>
                            <Link to="/" className={location.pathname === "/" ? nav_item_active_style : classes.nav_item}>Тренажёры</Link><br/>
                            <Link to="/Lectures/" className={location.pathname === "/Lectures/" ? nav_item_active_style : classes.nav_item}>Лекции</Link><br/>
                            <a href="/Home/LogOut" className={classes.nav_item}>Выйти</a><br/>
                        </nav>
                    </div>
                </div>
                <div className={classes.menu_logo}>
                    <a className={classes.header_logo} aria-label="МегаУмка" href="/">
                        <img src="https://umka.aisgorod.ru/Content/NewDesign/img/logo.svg" alt="Логотип МегаУмка"/>
                    </a>
                </div>
                <Link to={"/Profile/"} className={classes.user_label}>
                    <img src="https://umka.aisgorod.ru/Content/NewDesign/img/user-face.svg" alt="Пользователь"/>
                    <span className={classes.user_name}>IDK </span>
                </Link>
            </div>
        </div>
    );
};

export default Header;
