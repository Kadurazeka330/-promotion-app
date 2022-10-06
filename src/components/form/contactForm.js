import React, { useRef } from 'react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Menu from 'components/menu/menu';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


export const ContactUs = () => {
  const form = useRef();

  const [window, setWindow] = useState(true);


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_oijkqup', 'template_yp47cq2', form.current, '7Rkc6DbN_xYYcgT5v')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setWindow(false);
  };

  const WindowBin = () => {

    return(
        <>
          <form style = {{'margin-top': '50px'}} ref={form} onSubmit={sendEmail}>
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
                  <Col  style = {{'margin-top': '15px'}} xs="auto">
                  <Button  type="submit" className="mb-2 p-1 m-3 button-product" >
                      Оформление 
                  </Button>
                  </Col>
              </Row>
           </form>
        </>

    )
  }

  const Sent = () => {
    return (<>
                <Modal.Dialog style={{'width': '100%', 'max-width': '550px', 'padding-top': '100px'}}>
                <Modal.Header>
                  <Modal.Title  style={{'text-align': 'center'}}>Спасибо. Заявка принята. В ближайшее время с Вами свяжется наш менеджер</Modal.Title>
                </Modal.Header>

                <Modal.Footer>
                  <Button href = '/' variant="primary">Назад</Button>
                </Modal.Footer>
              </Modal.Dialog>
              </>
      );
  }

  const aee = window? <WindowBin/>: <Sent/>;

  return (
      <>
      <Menu />
       {aee}
      </>
  );
};
