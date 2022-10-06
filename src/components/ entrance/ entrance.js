import './entrance.css'

import bigImg from "./home-first.webp"

function Entrance () {
    
    return(
        <>
        <br/><br/><br/><br/>
            <div className="home-first">

            <div style={{"margin-top": "-50px"}}>

                <h1 className="home-first-p"> Быстрая раскрутка <br/> и продвижение <br/> <span className="ncolor"> в социальных сетях</span></h1>

                <div className="sqr" style={{"float":"left"}}></div>
                <div className="sqr" style={{"float":"left", "width": "10px", "margin-left": "5px"}}></div>
                <br/>
                <p> Профессиональная и безопасная SMM-накрутка лайков и подписчиков в популярных социальных сетях. В наше время активность корпоративного или личного аккаунта в социальных сетях может принести не только чувство радости за свою популярность, но и вполне реальные деньги и славу. С использованием качественных и полностью безопасных услуг нашего сервиса вы сможете накрутить показатели в профилях популярных и всех соцсетей, повысить количество зарегистрированных в ваших сообществах пользователей, добиться большого числа лайков и просмотров</p> 
                <br/>
                <br/>
                    <div className="home-first buttons-home-first">
            
                <div><a  href='/Contact' className="button-aut font-button">Задать вопрос</a></div>

                </div>
                
                
                <br/>
                <br/>
                <br/>
                <br/>
                
            
            </div>

            <div>
                <img className="big-img" src={bigImg}/>
            </div>



            </div>

          </>
    )
}

export default Entrance;