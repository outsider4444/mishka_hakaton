import React from 'react';
import {useState} from "react";
import Card from "./Card";
import classes from "./MemoryGame.module.css";
import {NavLink} from "react-router-dom";

const MemoryGame = (props) => {
    const [items, setItems] = useState([
        {id: 1, sub_id: 0, text: "Bear", img: 'https://i.pinimg.com/originals/b3/50/ae/b350ae1091e71ac6dfadfcaefec2957b.png', stat: ""},
        {id: 1, sub_id: 1,text: null, img: 'https://i.pinimg.com/originals/b3/50/ae/b350ae1091e71ac6dfadfcaefec2957b.png', stat: ""},
        {id: 2, sub_id: 0,text: null, img: 'https://gas-kvas.com/uploads/posts/2023-01/1673475075_gas-kvas-com-p-pingvin-detskii-risunok-13.png', stat: ""},
        {id: 2, sub_id: 1,text: "Penguin" ,img: 'https://gas-kvas.com/uploads/posts/2023-01/1673475075_gas-kvas-com-p-pingvin-detskii-risunok-13.png', stat: ""},
        {id: 3, sub_id: 0,text: "Seal", img: 'https://clipart-library.com/new_gallery/72-720266_free-to-use-amp-public-domain-sea-lion.png', stat: ""},
        {id: 3, sub_id: 1,text: null, img: 'https://clipart-library.com/new_gallery/72-720266_free-to-use-amp-public-domain-sea-lion.png', stat: ""},
        {id: 4, sub_id: 0,text: null, img: 'https://www.downloadclipart.net/large/walrus-png-picture.png', stat: ""},
        {id: 4, sub_id: 1,text: "Walrus", img: 'https://www.downloadclipart.net/large/walrus-png-picture.png', stat: ""},
        {id: 5, sub_id: 0,text: "Arctic fox", img: 'https://www.freepngimg.com/thumb/fox/132036-arctic-fox-snow-png-free-photo.png', stat: ""},
        {id: 5, sub_id: 1,text: null, img: 'https://www.freepngimg.com/thumb/fox/132036-arctic-fox-snow-png-free-photo.png', stat: ""},
        {id: 6, sub_id: 0,text: "Whale", img: 'https://www.pngkit.com/png/detail/51-515781_png-freeuse-stock-sperm-whale-drawing-killer-whale.png', stat: ""},
        {id: 6, sub_id: 1,text: null, img: 'https://www.pngkit.com/png/detail/51-515781_png-freeuse-stock-sperm-whale-drawing-killer-whale.png', stat: ""},
        {id: 7, sub_id: 0,text: null, img: 'https://www.kindpng.com/picc/m/212-2122185_deer-clipart-real-deer-clipart-hd-png-download.png', stat: ""},
        {id: 7, sub_id: 1,text: "Northern deer", img: 'https://www.kindpng.com/picc/m/212-2122185_deer-clipart-real-deer-clipart-hd-png-download.png', stat: ""},
        {id: 8, sub_id: 0,text: null, img: 'https://clipart-library.com/images_k/owl-clipart-transparent/owl-clipart-transparent-21.png', stat: ""},
        {id: 8, sub_id: 1,text: "White Owl", img: 'https://clipart-library.com/images_k/owl-clipart-transparent/owl-clipart-transparent-21.png', stat: ""},
    ].sort(() => Math.random() - 0.5 ));

    const [prev, setPrev] = useState(-1);
    function check(current){
        let count_of_correct = 0;
        if (items[current].id === items[prev].id){
            if (items[current].sub_id !== items[prev].sub_id){
                items[current].stat = "correct"
                items[prev].stat = "correct"
                setPrev(-1);
                for (let i=0; i<items.length; i++ ){
                    if (items[i].stat === "correct"){
                        count_of_correct += 1;
                    }
                }
                if (count_of_correct === items.length){
                    let but_block = document.getElementById("nextBtnBlock");
                    let container = document.getElementById("container_cards");
                    but_block.hidden = false;
                    container.style.marginLeft = "300px";
                }
            }
        }
        else {
            items[current].stat = "wrong";
            items[prev].stat = "wrong";
            setItems([...items])
            setPrev(-1);
            setTimeout(() => {
                items[current].stat = "";
                items[prev].stat = "";
                setItems([...items])
            }, 1000)
        }
    }
    function handleClick(id){
        if (prev === -1){
            items[id].stat = "active"
            setItems([...items])
            setPrev(id);
        } else{
            check(id);
        }
    }

    return (
        <div style={{width: "100%", justifyContent: "center", alignItems: "center", display: "flex"}}>
            <div className={classes.container} id={"container_cards"}>
                {items.map((item, index) =>
                    <Card key={index} item={item} id={index} handleClick={handleClick} />
                )}
            </div>

            <div className={classes.but_block} hidden={true} id={"nextBtnBlock"}>
                <NavLink to={"/"} className={classes.orange_button}
                         style={{"marginTop": 0, "outline": "none", "boxShadow": "none"}}>
                    <img className={classes.orange_but_bg}
                         src="https://umka.aisgorod.ru/Content/NewDesign/img/red-button-bg.svg"
                         alt="red-but"/>
                    <span className={classes.button_text}>Далее</span>
                </NavLink>
            </div>
        </div>
    );
};

export default MemoryGame;
