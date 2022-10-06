import React, { useEffect, useState, useContext }  from "react";
import Form from 'react-bootstrap/Form';
import { Context } from "components/context";

import './order.css'

const Order = (props) =>{

    const [link, setLink] = useState();
    const [count, setCount] = useState(100);
    const [ordersum, setOrdersum]= useState(props.price);
    const [next, setNext] = useState(true);

    const {basket} = useContext(Context);

    const baskett = (name, sum) => {
        basket(name, sum);
        setNext(true);
        if(localStorage.getItem('link').length < 4){
            alert('Заполните поле Ссылка');
            setNext(false);
        }
    } 

    useEffect(()=>{
        setOrdersum(props.price)
    },[props.price]);

    const initCount = (e) => {
        setCount(e.target.value);
         let price = props.price;
         price = sumPrice(price, e.target.value);
         setOrdersum(price);
          }

    const initLink = (e) => {
        setLink(e.target.value)
        localStorage.setItem('link', e.target.value)
    }

    const sumPrice = (pr, count) =>{

            let sum = (pr * count)/ 100;
            return(
                sum
        )
    }
    return(
        <>
                        <br/>
            <div  id = '1'className="box">
            <br/>
            
            <div className="product-info" >

            <div className="product-image">            
            <div >
            <h2>Заказ:</h2>
                    
                <div style={{'padding-bottom': '15px'}}  className="offer-product"  id="for-product-image">
                    
                    <div className="imagelabel h_2">{props.name}</div>
                    <div className="mini-image-text"> </div>

                    <div>
                
                        <a  href="#"><img className="img-inner"   src={props.img}  alt="#"/> </a>
                    </div>

                            <div className="bottom-img-describe imagelabel" >
                                
                                        {props.price} $ | 100
                            </div>                   
        

                </div>
                
            </div>

            </div>
            

            <div className="product-data" style={{'padding-top': '25px'}} >
    
        
                        <div id="option-668" className="option">
        
                       <span className="required need"></span> <input onChange={(e) => initLink(e)}  placeholder="Ссылка" className="icon" type="text"  size="50" /> 
                <span className="error" id="error-668"></span> 
                
                        
                        </div>
            

                        <div id="option-1495" className="option">
        
                                
                      <div className="custom-numbers">
                    <div style={{'margin-top': "15px"}}>

                        <Form.Select onClick={(e) => initCount(e)} aria-label="Default select example">
                            <option value="100">Количество</option>
                            <option value="100">100</option>
                            <option value="200">200</option>
                            <option value="300">300</option>
                            <option value="400">400</option>
                        </Form.Select>

                    </div>
                        <div className="custom">
                        <div id="upcount" ><i className="zmdi zmdi-chevron-up zmdi-hc-2x"></i></div>
                        <div id="downcount"><i style={{"margin-top": "-5px"}} className="zmdi zmdi-chevron-down zmdi-hc-2x"></i></div>

                        </div>
                    </div>

                    <span className="error" id="error-1495"></span>
                        </div>
                                                        
        <br/>
        <div className="option" id="price">
                    
            <b className="bluetext " style={{"margin-top": "15px"}}> Стоимость:  </b><b>  {ordersum} $ </b>
                    
        </div>
                <div  id="order" >

                    <input type="hidden" name="product_id" size="2" value="238" />
                    

                    <button  style={{"position": "unset"}} onClick ={()=>baskett(props.name, ordersum)}  className="button button-cart button-product" id="order"> <a  href={next? "/Basket": "#1"}>Заказать</a></button>

                                
            </div>
            <br/>
            <span className="required"></span> <span className="greytext">Поля обязательные для заполнения</span> 
            
            </div>
        </div>

        <br/><br/>
            <div className="after-data greytext"> </div>
            <br/><br/>
                <div className="product-meta">
                <div className="column">
            <div><img src="./speed.webp"/></div>
            <div><h3>Скорость выполнения</h3><p className="column-text">{props.start}</p></div>

                
                </div>
                <div className="column">
            <div><img src="./start.webp"/></div>
            <div><h3>Скорость старта</h3><p className="column-text">{props.finish}</p></div>
                </div>

            <div className="column">
            <div><img src="./garant.webp"/></div>
            <div><h3>Гарантия</h3><p className="column-text">{props.guarantee}</p></div>
                </div>

                <br/><br/><br/>

             </div>
            </div>
        </>
    )
}

export default Order;