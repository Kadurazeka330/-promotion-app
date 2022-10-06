import { Context } from "components/context";
import { useContext } from "react";
import { useState } from "react";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import './basket.css'
import Menu from "components/menu/menu";

const Basket = () => {
    let name = localStorage.getItem('name');
    let sum = localStorage.getItem('sum');
    let link = localStorage.getItem('link');
    const {basket} = useContext(Context);

    const [window, setWindow] = useState(true);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_oijkqup', 'template_37g7m4d', form.current, '7Rkc6DbN_xYYcgT5v')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            setWindow(false);
    }

    const cleanerBin = () => {
        localStorage.removeItem('name');
        localStorage.removeItem('sum');
        localStorage.removeItem('link');
    }


    const WindowBin = () => {

    return(
        <>
        <Menu/>
            <div className="title p-3" style={{"margin-top": "20px"}}>
                    <p className="title_caption" style={{"font-size": "40px"}}>Оформление заказа</p>
                
                <div className="line_title">
                    <div className="sqr line_title_first"></div>
                <div className="sqr line_title_second"></div>
                </div>
            </div>

        <Form  style = {{'box-shadow': '0 4px 4px 4px black'}} ref={form} onSubmit={sendEmail}>
            <Row className="row__top p-3">
            <Col>
                <Form.Label>Послуга</Form.Label>
                <Form.Control style = {{'color': 'black'}} type="text" placeholder={name} value = {name} name="name_cart" readOnly />
                </Col>
                <Col>
                <Form.Label>Ссылка</Form.Label>
                <Form.Control style = {{'color': 'black'}} type="text" placeholder={link} value = {link} name="link" readOnly />
                </Col>
                <Col>
                <Form.Label>Сума $</Form.Label>
                <Form.Control style = {{'color': 'black'}} type="text" placeholder={sum} value = {sum}  name="sum"  readOnly />
                </Col>
            </Row>
            <Row style = {{'margin-top': '15px'}}>
                <Col>
                <Form.Control type = "text" placeholder="Імя"  name="name"/>
                </Col>
                <Col>
                <Form.Control  type = "text" placeholder="+380988872311"  name="number"/>
                </Col>
                <Col>
                <Form.Control type="email" name="email"  placeholder="name@example.com" />
                </Col>
            </Row>
            <Col  style = {{'margin-top': '15px'}} xs="auto">
                <Button  onClick={()=>cleanerBin()} type="submit" className="mb-2 p-1 m-3 button-product" >
                     Оформление 
                </Button>
                </Col>
      </Form>
    </>
    )
    }

    const Sent = () => {
        return (
            <Modal.Dialog style={{'width': '100%', 'max-width': '550px', 'padding-top': '100px'}}>
              <Modal.Header>
                <Modal.Title  style={{'text-align': 'center'}}>Ваш заказ успешно оформлен</Modal.Title>
              </Modal.Header>

              <Modal.Footer>
                <Button href = '/' variant="primary">Назад</Button>
              </Modal.Footer>
            </Modal.Dialog>
          );
    }

    const aee = window? <WindowBin/>: <Sent/>;
 
    return(
        <>
            {aee}
        </>
        
    )
}


export default Basket;