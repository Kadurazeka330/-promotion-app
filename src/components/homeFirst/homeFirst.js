import secondimg from './home-second.webp'

function HomeFirst () {

    return (
        <>
            <div className="home-first">


                <div >
                <img className="big-img-second" src={secondimg}/>
                </div>


                <div style={{"margin-left": "10px"}}>
             
                <h1 style={{"font-size":"40px", "line-height": "1.2"}}>Добро пожаловать в site.com</h1>

                <div className="sqr" style={{"float":"left"}}></div>
                <div className="sqr" style={{"float":"left", "width": "10px", "margin-left": "5px"}}></div>
                <br/>
                <p>
                
                Наш автоматический сервис по раскрутке социальных сетей позволит вам быстро добиться нужного результата, значительно повысив активность на нужном аккаунте или в сообществе. Нередки случаи, когда подобная профессиональная накрутка вызывает своеобразный эффект снежного кома, привлекая реальных пользователей социальных сетей, которые, заметив активность на вашем профиле, начинают приходить сами, повышая популярность вашей личной или корпоративной страницы и принося продажи и деньги из ВК, Ютуб и Инстаграм.

                <br/>

                </p>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                
                </div>



            </div>
        </>
    )
}

export default HomeFirst;