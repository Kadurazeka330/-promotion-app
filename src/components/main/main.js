import './main.css'

import men1 from './selected/men1.png'
import men2 from './selected/men2.png'
import men3 from './selected/men3.png'
import men4 from './selected/men4.png'

function Main () {

    return(
        <>
             <div style={{"text-align": "center", "margin-top": "-50px",  "margin-bottom": "-50px"}}>

                <div className="title">
                <div className="title_helper">    
                </div>
                    <br/><br/>
                <p className="title_caption">Почему нас выбирают?</p>

                <div className="line_title">
                <div className="sqr line_title_first"></div>
                <div className="sqr line_title_second"></div>
                </div>
                </div>

                    <br/>



                <div className="main" >
                    <div className="help_image"><span className="helper"></span>
                    <img src={men1}/>
                    </div>
                    <div className="help_image helpdiv">
                        <p className="for_text_helper_bold">Качество и цена 24/7</p>
                            <div className="sqr" style={{"float":"left"}}></div>
                        <div className="sqr" style={{"float":"left","width": "10px", "margin-left": "5px"}}></div>
                        <br/>
                
                        <p className="for_text_helper"> Будьте уверены, у нас<br/> самые лучшие цены на самые<br/> качественные услуги.</p>

                    </div>
                    <div className="help_elipse"><div className="ellipse_blue helpelipse"><div>01</div></div></div>
                </div>  
                





                <div className="main" >
                    <div className="help_image"><span className="helper"></span>
                    <img src={men2}/>
                    </div>
                    <div className="help_image helpdiv">
                        <p className="for_text_helper_bold">Надежность</p>
                            <div className="sqr" style={{"float":"left"}}></div>
                        <div className="sqr" style={{"float":"left", "width": "10px", "margin-left": "5px"}}></div>
                        <br/>

                        <p className="for_text_helper">Полная автоматизация <br/>запуска и выполнения всех<br/> услуг на максимально<br/> безопастной скорости.</p>

                    </div>
                    <div className="help_elipse"><div className="ellipse_blue helpelipse"><div>02</div></div></div>
                </div>   





                <div className="main" >
                    <div className="help_image"><span className="helper"></span>
                    <img src={men3}/>
                    </div>
                    <div className="help_image helpdiv">
                        <p className="for_text_helper_bold">Техподдержка 24/7</p>
                            <div className="sqr" style={{"float":"left"}}></div>
                        <div className="sqr" style={{"float":"left", "width": "10px", "margin-left": "5px"}}></div>
                        <br/>

                        <p className="for_text_helper">Нужна помощь? <br/>Постараемся быстро помочь<br/>в тикетах или чате практически<br/>в любое время суток.</p>

                    </div>
                    <div className="help_elipse"><div className="ellipse_blue helpelipse"><div>03</div></div></div>
                </div>  




                <div className="main" >
                    <div className="help_image"><span className="helper"></span>
                    <img src={men4}/>
                    </div>
                    <div className="help_image helpdiv">
                        <p className="for_text_helper_bold">Опыт работы</p>
                            <div className="sqr" style={{"float":"left"}}></div>
                        <div className="sqr" style={{"float":"left", "width": "10px", "margin-left": "5px"}}></div>
                        <br/>

                        <p className="for_text_helper"> Мы качаем соц. сети<br/>уже более 7 лет и выполнили<br/> более 13 миллионов заказов.</p>

                    </div>
                    <div className="help_elipse"><div className="ellipse_blue helpelipse"><div>04</div></div></div>
                </div>  


                </div>

                    
                <div className="title">
                <div className="title_helper">    
                    <br/><br/>
                <p className="title_caption" >Популярные услуги SMM</p>

                <div className="line_title">
                <div className="sqr line_title_first"></div>
                <div className="sqr line_title_second"></div>
                </div>
            </div>
            </div>

                <br/>
        </>
    )
}

export default Main