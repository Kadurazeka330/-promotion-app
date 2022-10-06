import React from "react";
import { Link } from "react-router-dom";

import "./newhead.css"
function MenuTop() {
    return(
        <>
            <div style={{'padding-top': '15px'}} className="head-first ">

                <div className="header-menu-main">
                        <ul className="menu-main">
                        <li><a a href="/">Главная</a></li>
                        <li><a href="#"  >Отзывы</a></li>
                        </ul>
                    </div>
    
                          <div className="left-menu-active ops" style={{"display": "flex"}}>
                             <div className="text-voiti"><a  className="text_black">Оформление заказа</a></div><a className="text_black" style= {{"margin-top" : "-20px"}}> <a href="/Basket"><div className="Mbutton" id="accaunt"> </div></a> <div className="head-info-voiti">
                                <a className="text_black" >Войти</a></div></a>
                 </div>
                            
             </div>
        </>
    )
}

export default MenuTop;