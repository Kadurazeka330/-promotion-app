import Order from "components/order/order";
import { useState } from "react";
import React from "react";

const Video = () => {


    const [order, setOrder] = useState(false);
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [img, setImg] = useState();
    const [start, setStart] = useState();
    const [finish, setFinish] = useState();
    const [guarantee, setGuarantee] = useState();

    const [link, setLink] = useState('/InstagramVideo#1')


  
    const OrderInstagram = order? <Order name = {name} price = {price} img = {img} start = {start} finish = {finish} guarantee = {guarantee}/> : null;


    const upDataOrder = (name, price, img, start, finish, guarantee) => {
        return(
            setName(name),
            setPrice(price),
            setOrder(true),
            setImg(img),
            setStart(start),
            setFinish(finish),
            setGuarantee(guarantee)
        )
    }

    const View = () => {

     const [subscribersName, setSubscribersName] = useState('Просмотры видео');
     const [subscribersPrice, setSubscribersPrice] = useState(11);
     const [img, setImg] = useState("./instagramImg/insta_likes1.png");
     const [start, setStart] = useState('30 мин.');
     const [finish, setFinish] = useState('50-500 в сутки');
     const [guarantee, setGuarantee] = useState('30 дней');

     const [subscribersPrice2, setSubscribersPrice2] = useState(13);
     const [start2, setStart2] = useState('20 мин.');
     const [finish2, setFinish2] = useState('40-500 в сутки');
     const [guarantee2, setGuarantee2] = useState('20 дней');

     const [subscribersPrice3, setSubscribersPrice3] = useState(10);
     const [start3, setStart3] = useState('30 мин.');
     const [finish3, setFinish3] = useState('50-500 в сутки');
     const [guarantee3, setGuarantee3] = useState('30 дней');

     const [subscribersPrice4, setSubscribersPrice4] = useState(10);
     const [start4, setStart4] = useState('30 мин.');
     const [finish4, setFinish4] = useState('50-500 в сутки');
     const [guarantee4, setGuarantee4] = useState('30 дней');

        return(
            <>
    
                <div className="title" style={{"margin-top": "-5px","margin-bottom": "30px"}}>
                    <br/><br/>
                    <p className="title_caption">{subscribersName} </p>
                
                <div className="line_title">
                    <div className="sqr line_title_first"></div>
                <div className="sqr line_title_second"></div>
                </div>
                </div>
    
                <div className="product-list">
                            <div  className="product">
                        
                                    
                        <div className="offer-product"  id="for-product-image">
                            
                            <div className="imagelabel h_2 " >Просмотры видео</div>
                            <div>
                            
                                <a itemprop="url"><img itemprop="image" className="img-inner"   src={img} title="Instagram - Просмотры видео" alt="Instagram - Просмотры видео"  onerror="this.onerror=null;this.src='https://smmlaba.com/image/cache/data/iconsnew/inst/12-200x200.jpg';"/> </a>
                            </div>
    
                                    <div className="bottom-img-describe imagelabel">
                                        
                                        {subscribersPrice} $ | 100
                                    </div>                   
                        </div>
                        
                        <div className="for-product-type">
                                <div className="product-info-type">
                                    <img  width="50" src="./instagramImg/new_start.webp" title="Старт" alt="Старт"/>
                                    
                                </div>

                                <div className="product-info-type">
                                    <img  width="50" src="./instagramImg/new_speed.webp" title="Скорость выполнения" alt="Скорость выполнения"/>
                                
                                
                                </div>
                                <div className="product-info-type" >
                                    <img width="50" src="./instagramImg/new_warranty.webp" title="Гарантия" alt="Гарантия"/>
                                </div>
    
                        </div>
                        
    
                            <div className="for-product-type size-product" >
                                <div className="text-seporated">  </div>
                                <div className="product-info-type-text">
                                    
                                        {start}               </div>
                                <div className="text-seporated">  </div>
    
                                <div className="product-info-type-text">
                                    
                                   {finish}                 
                                
                                </div>
                                <div className="text-seporated">  </div>
                                <div className="product-info-type-text" >
                                    
                                    {guarantee}                 
                                </div>
                                <div className="text-seporated">  </div>
    
                        </div>
                            
                            <div>
                                <div className="line_title product-recoment-line">
                                <div className="sqr line_title_first"></div>
                                <div className="sqr line_title_second"></div>
                            </div>
                            
                                <div className="space-name-product"><a href="#"><span>Instagram - Просмотры видео</span></a></div> 
                                
                                <div className="line_title product-recoment-line">
                                <div className="sqr line_title_first"></div>
                                <div className="sqr line_title_second"></div>
                            </div>
                    </div>   
                    
                    <br/>
    
                        <div>
                    
                    <button className="button-product"> <a href={link} onClick={() =>upDataOrder(subscribersName, subscribersPrice, img, start, finish, guarantee)}  >  Заказать </a></button>
                    </div>
    
    
                             </div>  
    
                             <div  className="product">
                        
                                    
                            <div className="offer-product"  id="for-product-image">
                                
                                <div className="imagelabel h_2 " >Просмотры видео</div>
                                <div>
                                
                                    <a itemprop="url"><img itemprop="image" className="img-inner"   src={img} title="Instagram - Просмотры видео" alt="Instagram - Просмотры видео"  onerror="this.onerror=null;this.src='https://smmlaba.com/image/cache/data/iconsnew/inst/12-200x200.jpg';"/> </a>
                                </div>
        
                                        <div className="bottom-img-describe imagelabel">
                                            
                                            {subscribersPrice2} $ | 100
                                        </div>                   
                        </div>
                        
                        <div className="for-product-type">
                                <div className="product-info-type">
                                    <img  width="50" src="./instagramImg/new_start.webp" title="Старт" alt="Старт"/>
                                    
                                </div>

                                <div className="product-info-type">
                                    <img  width="50" src="./instagramImg/new_speed.webp" title="Скорость выполнения" alt="Скорость выполнения"/>
                                
                                
                                </div>
                                <div className="product-info-type" >
                                    <img width="50" src="./instagramImg/new_warranty.webp" title="Гарантия" alt="Гарантия"/>
                                </div>
    
                        </div>
                        
    
                            <div className="for-product-type size-product" >
                                <div className="text-seporated">  </div>
                                <div className="product-info-type-text">
                                    
                                        {start2}               </div>
                                <div className="text-seporated">  </div>
    
                                <div className="product-info-type-text">
                                    
                                   {finish2}                 
                                
                                </div>
                                <div className="text-seporated">  </div>
                                <div className="product-info-type-text" >
                                    
                                    {guarantee2}                 
                                </div>
                                <div className="text-seporated">  </div>
    
                        </div>
                            
                            <div>
                                <div className="line_title product-recoment-line">
                                <div className="sqr line_title_first"></div>
                                <div className="sqr line_title_second"></div>
                            </div>
                            
                                <div className="space-name-product"><a href="#"><span>Instagram - Просмотры видео</span></a></div> 
                                
                                <div className="line_title product-recoment-line">
                                <div className="sqr line_title_first"></div>
                                <div className="sqr line_title_second"></div>
                            </div>
                    </div>   
                    
                    <br/>
    
                        <div>
                    
                    <button className="button-product"> <a href={link} onClick={() =>upDataOrder(subscribersName, subscribersPrice2, img, start2, finish2, guarantee2)}  >  Заказать </a></button>
                    </div>
    
    
                             </div>  

                             <div  className="product">
                        
                                    
                            <div className="offer-product"  id="for-product-image">
                                
                                <div className="imagelabel h_2 " >Просмотры видео</div>
                                <div>
                                
                                    <a itemprop="url"><img itemprop="image" className="img-inner"   src={img} title="Instagram - Просмотры видео" alt="Instagram - Просмотры видео"  onerror="this.onerror=null;this.src='https://smmlaba.com/image/cache/data/iconsnew/inst/12-200x200.jpg';"/> </a>
                                </div>
        
                                        <div className="bottom-img-describe imagelabel">
                                            
                                            {subscribersPrice3} $ | 100
                                        </div>                   
                            </div>
                            
                        <div className="for-product-type">
                                <div className="product-info-type">
                                    <img  width="50" src="./instagramImg/new_start.webp" title="Старт" alt="Старт"/>
                                    
                                </div>

                                <div className="product-info-type">
                                    <img  width="50" src="./instagramImg/new_speed.webp" title="Скорость выполнения" alt="Скорость выполнения"/>
                                
                                
                                </div>
                                <div className="product-info-type" >
                                    <img width="50" src="./instagramImg/new_warranty.webp" title="Гарантия" alt="Гарантия"/>
                                </div>
    
                        </div>
                        
    
                            <div className="for-product-type size-product" >
                                <div className="text-seporated">  </div>
                                <div className="product-info-type-text">
                                    
                                        {start3}               </div>
                                <div className="text-seporated">  </div>
    
                                <div className="product-info-type-text">
                                    
                                   {finish3}                 
                                
                                </div>
                                <div className="text-seporated">  </div>
                                <div className="product-info-type-text" >
                                    
                                    {guarantee3}                 
                                </div>
                                <div className="text-seporated">  </div>
    
                        </div>
                            
                            <div>
                                <div className="line_title product-recoment-line">
                                <div className="sqr line_title_first"></div>
                                <div className="sqr line_title_second"></div>
                            </div>
                            
                                <div className="space-name-product"><a href="#"><span>Instagram - Просмотры видео</span></a></div> 
                                
                                <div className="line_title product-recoment-line">
                                <div className="sqr line_title_first"></div>
                                <div className="sqr line_title_second"></div>
                            </div>
                    </div>   
                    
                    <br/>
    
                        <div>
                    
                    <button className="button-product"> <a href={link} onClick={() =>upDataOrder(subscribersName, subscribersPrice3, img, start3, finish3, guarantee3)}  >  Заказать </a></button>
                    </div>
    
    
                             </div>  

                             <div  className="product">
                        
                                    
                            <div className="offer-product"  id="for-product-image">
                                
                                <div className="imagelabel h_2 " >Просмотры видео</div>
                                <div>
                                
                                    <a itemprop="url"><img itemprop="image" className="img-inner"   src={img} title="Instagram - Просмотры видео" alt="Instagram - Просмотры видео"  onerror="this.onerror=null;this.src='https://smmlaba.com/image/cache/data/iconsnew/inst/12-200x200.jpg';"/> </a>
                                </div>
    
                                    <div className="bottom-img-describe imagelabel">
                                        
                                        {subscribersPrice4} $ | 100
                                    </div>                   
                        </div>
                        
                        <div className="for-product-type">
                                <div className="product-info-type">
                                    <img  width="50" src="./instagramImg/new_start.webp" title="Старт" alt="Старт"/>
                                    
                                </div>

                                <div className="product-info-type">
                                    <img  width="50" src="./instagramImg/new_speed.webp" title="Скорость выполнения" alt="Скорость выполнения"/>
                                
                                
                                </div>
                                <div className="product-info-type" >
                                    <img width="50" src="./instagramImg/new_warranty.webp" title="Гарантия" alt="Гарантия"/>
                                </div>
    
                        </div>
                        
    
                            <div className="for-product-type size-product" >
                                <div className="text-seporated">  </div>
                                <div className="product-info-type-text">
                                    
                                        {start4}               </div>
                                <div className="text-seporated">  </div>
    
                                <div className="product-info-type-text">
                                    
                                   {finish4}                 
                                
                                </div>
                                <div className="text-seporated">  </div>
                                <div className="product-info-type-text" >
                                    
                                    {guarantee4}                 
                                </div>
                                <div className="text-seporated">  </div>
    
                        </div>
                            
                            <div>
                                <div className="line_title product-recoment-line">
                                <div className="sqr line_title_first"></div>
                                <div className="sqr line_title_second"></div>
                            </div>
                            
                                <div className="space-name-product"><a href="#"><span>Instagram - Просмотры видео</span></a></div> 
                                
                                <div className="line_title product-recoment-line">
                                <div className="sqr line_title_first"></div>
                                <div className="sqr line_title_second"></div>
                            </div>
                    </div>   
                    
                    <br/>
    
                        <div>
                    
                    <button className="button-product"> <a href={link} onClick={() =>upDataOrder(subscribersName, subscribersPrice4, img, start4, finish4, guarantee4)}  >  Заказать </a></button>
                    </div>
    
    
                             </div>  
                 </div>
            
            </>
        )

        }

        const Info = () => {
            return(
               <>
                          <h1>Купить просмотры Инстаграм</h1>

                    <p>Инстаграм — одна из самых популярных социальных сетей. Первоначально Инстаграм рассматривался лишь как мессенджер, где можно делиться фотографиями, видео или просто общаться с друзьями.</p>

                    <p>Однако все больше пользователей видят в нем средство заработка. И действительно, имея раскрученный канал, можно зарабатывать неплохие деньги. Только ключевое, здесь, «раскрученный». Чтобы зарабатывать с помощью этой социальной сети, необходимо создать высокий уровень активности на своей странице. Сделать это можно двумя способами:</p>

                    <ol>
                        <li>В течение нескольких лет планомерно генерировать качественный контент. Со временем, во многом благодаря эффекту «сарафанного радио», количество подписчиков увеличится.</li>
                        <li>Воспользоваться Накруткой. Этот вариант, куда более простой, и намного более быстрый. Однако не стоит думать, что это – способ заработать, не делая ничего. Вовсе нет. Накрутка не решает проблему создания качественного контента. Но если таковой имеется, в десятки раз увеличивает скорость развития канала.</li>
                    </ol>

                    <p>Развивать канал с помощью раскрутки нужно с большой осторожностью, так как данный метод имеет ряд нюансов. Пытаемся разобраться в них.</p>

                    <h2>Для чего нужно купить просмотры в Инстаграм?</h2>

                    <p>Именно количество просмотров и лайков в Инстаграм определяет место страницы в рейтинге. Чем их больше, тем выше можно попасть в ТОП.</p>

                    <p>Таким образом, решившись купить просмотры Инстаграм, пользователь решает сразу несколько задач:</p>

                    <ol>
                        <li>Увеличивает активность страницы. Чем эта активность больше, тем выше интерес потенциальных рекламодателей.</li>
                        <li>Приобретённые просмотры и лайки, кроме своей основной функции, выполняют еще одну, второстепенную. Они выступают в роли гаранта качества контента, чем привлекают новых пользователей, новые лайки и просмотры.</li>
                        <li>Увеличение лояльности к аккаунту. В данном случае срабатывает эффект общественного мнения, когда большое число положительных комментариев, а также просмотров и лайков, создаёт эффект того, что в Инстаграме аккаунт занимает значимое место.</li>
                        <li>Позволяет усилить уже использованные методы. Например, альтернативой накрутки является использование хештегов. Причём оба метода по своему хороши. Однако если использовать их вместе, результат будет повышен.</li>
                    </ol>

                    <p>Иными словами, купив лайки или просмотры, владелец аккаунта снимает с себя часть нагрузки. Доверяя накрутку просмотров нам, он лишает себя необходимости заниматься пиаром – искать того, кто согласился бы разместить рекламу у себя на странице теперь не придется. Вместо этого можно полностью отдаться любимому делу и создавать новый контент. Надо ли говорить, что качество контента, а следовательно и количество просмотров от этого вырастут.</p>

                    <h2>Кому нужна услуга?</h2>

                    <p>Мы постарались угодить каждому. Купить у нас можно не только простые просмотры, но и лайки, подписки, просмотры видео или прямых эфиров.</p>

                    <p>Сделано это для того, чтобы каждый сегмент пользователей, получил то, что нужно именно ему. Разберемся, какие услуги требуются каждому из существующих типов аккаунтов:</p>

                    <ul>
                        <li>Блогеры. Для блогера важнее всего популярность. Именно от популярности зависят ключевые для него показатели. Активность подписчиков, узнаваемость аккаунта, возможность заработать. Исходя из существующих необходимостей, можно понять, что блогеру в основном нужны лайки и подписки. Две этих категории позволяют не только создавать оптимальные условия развития аккаунта, но и являются своеобразным индикатором. Эти показатели, блогер может менять свой контент, в соответствие с требованиями аудитории.</li>
                        <li>Бизнесмен. Инстаграм все чаще используются для бизнеса. Причин такого использования немало, но главная – здесь большой охват аудитории. Для бизнеса главное — наибольший охват. Ему нужно, чтобы его товар или услуги увидела как можно больше людей. Кроме того, желателен отклик аудитории. Это позволяет понимать потребности рынка, и выбирать направление развития. Таким образом, оптимальным набором наших услуг для бизнесмена является связка «просмотры-Просмотры видео». Кроме своей основной задачи, накрученные просмотры и Просмотры видео постепенно сформируют узнаваемость бренда, создадут доверительное отношение к нему.</li>
                        <li>Обычный пользователь. Накрутка лайков или просмотров для штатного пользователя – возможность попробовать монетизировать свою страницу. Если в аккаунте регулярно появляется новый, качественный контент, стоит задуматься о накрутке просмотров и подписок. Со временем это позволит увеличить количество подписчиков, и начать переговоры с рекламными компаниями.</li>
                    </ul>

                    <p>У нас можно заказать накрутку любых параметров аккаунта. Купить просмотры в инстаграм, лайки или Просмотры видео – мы предоставляем самые разные услуги.</p>

                    <h2>Услуги и их виды: какую накрутку можно заказать у нас?</h2>

                    <p>Как уже было сказано, для разных типов аккаунтов есть разные типы раскрутки. Посмотрим основные элементы раскрутки, где они применяются и для чего нужны.</p>

                    <h3>Истории</h3>

                    <p>Накрутка просмотров истории является одним из универсальных методов раскрутки аккаунта. Все потому, что именно история – специфическая черта инстаграма.</p>

                    <p>Несмотря на то, что сторис — один из самых простых типов контента, она обладает огромным функционалом. С её помощью можно проводить опросы, транслировать простую информацию, демонстрировать фотографии и даже продавать товары и услуги.</p>

                    <p>Купить просмотры в инстаграм для сторис – значит воспользоваться самым быстрым способом, повысить активность аккаунта.</p>

                    <p>До того, сторис обладает очень важной чертой – ненавязчивость. Даже самая откровенная реклама в рамках сторис не выглядит таковой.</p>

                    <h2>Живые просмотры видео в Инстаграм</h2>

                    <p>Возможность просматривать видео в Инстаграм появилась относительно недавно. В 2016 году. Купить просмотры видео в инстаграм стоит, если:</p>

                    <ul>
                        <li>Необходимо утвердиться среди пользователей сервиса;</li>
                        <li>За короткое время нужно привлечь большой объем трафика;</li>
                    </ul>

                    <p>Именно с помощью просмотров видео можно быстро раскрутить аккаунт. Однако нужно быть осторожным. Покупать накрутку просмотров на видео стоит только вместе с лайками и комментариями. В противном случае слишком быстрое развитие аккаунта может привести к тому, что им заинтересуется администрация, и аккаунт будет удален.</p>

                    <h2>IGTV – живые просмотры видео в Инстаграм</h2>

                    <p>IGTV – возможность пользоваться полноформатным видео в рамках платформы. После того как инстаграм ввёл возможность записывать длинные видео, он стал намного популярнее, особенно среди блогеров. Ведь они получили еще одну площадку, на которой могут размещать свой контент и зарабатывать деньги.</p>

                    <p>Аккаунты, на которых много IGTV видео, особенно интересны рекламодателям. Ведь информация о товарах и услугах может быть размещена в контексте медиаматериала. Однако, купить просмотры Инстаграм для полнометражных видео, выгоднее всего в комплекте с комментариями и лайками. Так аккаунт будет выглядеть более убедительно и презентабельно.</p>

                    <h2>IGTV или YouTube?</h2>

                    <p>Говоря накрутка просмотров видео, возникает резонный вопрос. Почему не сделать то же самое, на платформе предназначено исключительно для видеороликов? Ответ прост: IGTV имеет ряд преимуществ перед YouTube. В частности:</p>

                    <ul>
                        <li>Горизонтальный формат видео намного удобнее, когда речь идет о видеороликах средней длины;</li>
                        <li>Отсутствует предварительная обработка. Это огромный плюс IGTV, когда нужно поделиться срочной новостью;</li>
                        <li>От снятия видеоролика, до его размещения на площадке проходит всего пара секунд. Не нужны специальные программы для обработки и монтажа. Все что нужно – смартфон.</li>
                    </ul>

                    <h2>Почему так важно выйти в ТОП? Разбор алгоритма Инстаграм</h2>

                    <p>О том, что аккаунт нужно выводить в ТОП знают все. Однако для чего это делается, и тем более как – знания доступные не многим. Разберёмся с этим вопросом.</p>

                    <p>Владелец аккаунта, находящегося в ТОП, получает:</p>

                    <ul>
                        <li>Повышенное внимание рекламодателей. Как правило, с предложением разместить рекламу, обращаются люди, которым не хватает охвата и клиентов в реальном мире. Аналогичная ситуация в сети им совершенно ни к чему. Именно поэтому многие рекламодатели предпочтут переплатить, но заключить контракт с тем аккаунтом, у которого большая целевая аудитория;</li>
                        <li>Автоматическое увеличение активности. Аккаунты находящиеся в топ, привлекают к себе много внимания. Процесс становится замкнутым – остается лишь наполнять страницу качественным контентом.</li>
                    </ul>

                    <p>Однако, попасть в ТОП не так просто. Это процесс происходит в несколько этапов:</p>

                    <ol>
                        <li>Снимается интересный ролик, который соответствует запросам целевой аудитории. Начинаются просмотры первой волны.</li>
                        <li>Вторая волна – те просмотры, который получены благодаря тому, что подписчики поделились данным видео, отправили его своим друзьям и знакомым.</li>
                        <li>Третья волна – те просмотры, которые получены за счет хештегов. Именно на этом этапе нужно вовремя подключить услугу накрутки просмотров. Это повысит вероятность того, что система заинтересуется видеозаписью, сочтет ее популярной и самостоятельно займется ее продвижением. Именно это и называется «попасть в ТОП».</li>
                    </ol>

                    <p>Выходит, что своевременно купить просмотры instagram – значит приобрести огромное количество бесплатных просмотров и подписок.</p>

                    <p>Однако следует помнить, что для того, чтобы удержаться в ТОПе своей ниши, мало туда попасть. Нужно регулярно заниматься своим аккаунтом и докупать лайки и просмотры.</p>

                    <h2>Как сделать накрутку безопасной?</h2>

                    <p>Если бы все проходило так, как описано выше, каждый второй пользователи был бы быть обладателем аккаунта с сотнями тысяч подписчиков. В чем же дело?</p>

                    <p>А дело в том, что при накрутке можно столкнуться с двумя основными проблемами:</p>

                    <ol>
                        <li>Ненадёжная контора. Если довериться такой – отсутствие результата, это лучше из того, что может произойти. В худшем же случае, помимо финансовых потерь придётся попрощаться со своим аккаунтом. Администрация Инстаграм внимательно следит за подозрительной активностью, и в случае, если есть подозрения на раскрутку, блокирует аккаунт.</li>
                        <li>Даже самая качественная накрутка не исправить некачественного контента. Относиться к накрутке просмотров или лайков нужно правильно. А именно, не как к основному инструменту, а как к вспомогательному. Если аккаунт будет переполнен полезной информацией, раскрутка просмотров ему пойдет, лишь на пользу. Администрация не увидеть ничего подозрительного в том, что люди интересуются полезным и интересным контентом.</li>
                    </ol>

                    <h2>Как выжать максимум от накрутки? Советы по оформлению аккаунта и контента</h2>

                    <p>Как уже было сказано, накрутка не может стать основой развития аккаунта. Основе должен лежать качественный контент и несколько других элементов. Именно их совокупность, помноженная на раскрутку, даёт наилучший результат.</p>

                    <p>К числу этих элементов относятся несколько правил оформления аккаунта. Выглядят они следующим образом:</p>

                    <ol>
                        <li>Краткость – сестра таланта. У аккаунта должно быть простое и понятное описание. Не нужно писать сочинения на несколько предложений. Достаточно двух-трех слов об аккаунте. И одного-двух слов о своей деятельности.</li>
                        <li>Дополнительные ссылки. На странице аккаунта необходимо разместить информацию о своём профиле в другой социальной сети. Если есть свой сайт — ещё лучше. Так удастся не только привлечь новый трафик в свой проект, но и заслужить лояльность аудитории.</li>
                        <li>Первичные подписчики. Данный пункт обязателен к исполнению. Если на момент начала раскрутки нет хотя бы небольшой живой аудитории, аккаунт с большой вероятностью будет забанен. В зависимости от масштабов раскрутки достаточно от 30 человек. Набрать их не так сложно</li>
                        <li>Не стоит мнить себя королём маркетинга. Начинать публиковать рекламные посты первые несколько месяцев не стоит. Аудитория должна привыкнуть к аккаунту, понять, что он даёт полезную, или интересную информацию. В противном случае увеличение подписчиков будет происходить только в рамках раскрутки. Аккаунтам, которые перегибают с рекламой, сарафанное радио не светит.</li>
                        <li>Не стоит накручивать сразу большой объем просмотров. Все должно выглядеть максимально естественно. Именно поэтому заказывать раскрутку лучше всего небольшими партиями.</li>
                        <li>Необходимо проводить постоянный мониторинг. Реальных подписчиков должно быть не меньше 50%. В противном случае риск того что аккаунт будет заблокирован возрастает.</li>
                        <li>Наряду с накруткой, можно пользоваться разрешенными Инстаграм методами. Например, заплатить известному блогеру за лайк или репост записи. Это привлечёт немало реальных подписчиков. В отличие от накрутки, такой способ не запрещен. И, как правило, привлекает заинтересованную целевую аудиторию.</li>
                    </ol>

                    <h2>Почему мы?</h2>

                    <p>Компания smmlaba – один из лидеров рынка накрутки. Работа с нами, это:</p>

                    <ul>
                        <li>Возможность дешево купить просмотры в Инстаграм;</li>
                        <li>Безопасность сделки. Сделка заключается анонимно – при регистрации потребуется лишь адрес электронной почты.</li>
                        <li>Большой выбор предложений. Раскрутка у нас доступна в самых разных форматах и рассчитана на любой бюджет.</li>
                        <li>Есть возможность заказать раскрутку на другую платформу. Это актуально, когда платформы развиваются парно.</li>
                    </ul>
               </>
            )
        }

    return(
        <>
            <View/>
            {OrderInstagram}
            <Info/>
        </>
    )
}

export default Video;
