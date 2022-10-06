import Menu from 'components/menu/menu';
import Order from 'components/order/order';
import React from 'react';

const OrderPage = (props) => {
  

    return  (
        <div> 
        <Menu/>
        <Order  info = {props.info}/>
        </div>
    ) 
}

export  default OrderPage;