import Order from "components/order/order";
import { useState } from "react";
import React from "react";

const History = () => {


    const [order, setOrder] = useState(false);
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [img, setImg] = useState();
    const [start, setStart] = useState();
    const [finish, setFinish] = useState();
    const [guarantee, setGuarantee] = useState();

    const [link, setLink] = useState('/InstagramHistory#1')


  
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

     const [subscribersName, setSubscribersName] = useState('Просмотры историй');
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
                            
                            <div className="imagelabel h_2 " >Просмотры историй</div>
                            <div>
                            
                                <a itemprop="url"><img itemprop="image" className="img-inner"   src={img} title="Instagram - Просмотры историй" alt="Instagram - Просмотры историй"  onerror="this.onerror=null;this.src='https://smmlaba.com/image/cache/data/iconsnew/inst/12-200x200.jpg';"/> </a>
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
                            
                                <div className="space-name-product"><a href="#"><span>Instagram - Просмотры историй</span></a></div> 
                                
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
                                
                                <div className="imagelabel h_2 " >Просмотры историй</div>
                                <div>
                                
                                    <a itemprop="url"><img itemprop="image" className="img-inner"   src={img} title="Instagram - Просмотры историй" alt="Instagram - Просмотры историй"  onerror="this.onerror=null;this.src='https://smmlaba.com/image/cache/data/iconsnew/inst/12-200x200.jpg';"/> </a>
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
                            
                                <div className="space-name-product"><a href="#"><span>Instagram - Просмотры историй</span></a></div> 
                                
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
                                
                                <div className="imagelabel h_2 " >Просмотры историй</div>
                                <div>
                                
                                    <a itemprop="url"><img itemprop="image" className="img-inner"   src={img} title="Instagram - Просмотры историй" alt="Instagram - Просмотры историй"  onerror="this.onerror=null;this.src='https://smmlaba.com/image/cache/data/iconsnew/inst/12-200x200.jpg';"/> </a>
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
                            
                                <div className="space-name-product"><a href="#"><span>Instagram - Просмотры историй</span></a></div> 
                                
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
                                
                                <div className="imagelabel h_2 " >Просмотры историй</div>
                                <div>
                                
                                    <a itemprop="url"><img itemprop="image" className="img-inner"   src={img} title="Instagram - Просмотры историй" alt="Instagram - Просмотры историй"  onerror="this.onerror=null;this.src='https://smmlaba.com/image/cache/data/iconsnew/inst/12-200x200.jpg';"/> </a>
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
                            
                                <div className="space-name-product"><a href="#"><span>Instagram - Просмотры историй</span></a></div> 
                                
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
                <div class="category-info">

                    <h1>Накрутка просмотров истории в Инстаграме</h1>

                    <p>Профессиональная и качественная накрутка просмотров сторис в Инстаграм, недорого купить которую вы можете у нас в сервисе, будет осуществляться с живых и полностью заполненных по правилам социальной сети профилей. Эта платная услуга позволит вам увеличить посещаемость аккаунта в целом и получить весомые преимущества, о которых мы расскажем в этой обзорной статье.</p>

                    <p>Многие пользователи думают о том, что сторис не играют никакой роли, кроме возможности оперативно принести какой-либо контент своим подписчикам, поделиться информацией или провести опрос на животрепещущую тему. Это совсем не так. Механизм работы сторис в этой социальной сети позволяет задействовать огромное количество иных вариантов повышения активности. Это даст возможность быстрого развития вашего профиля.</p>

                    <h3>Начало раскрутки в этом направлении и основные моменты, связанные с ней</h3>

                    <p>Для накрутки просмотров сторис в Инстаграм обязательно нужно, чтобы ваш аккаунт был открытого типа, а не закрытым. Именно в случае, когда ваш профиль открыт для публичного просмотра, вы сможете добиться того, чтобы ваши сторис смогли увидеть не только существующие Просмотры историй, но и другие пользователи, ещё не подписанные на вас. Как добиться того, чтобы любой пользователь этой социальной сети смог увидеть ваши сторис?</p>

                    <p>Обязательно указывайте свою реальную геолокацию (можно выбрать страну пребывания или конкретный город). Однако, стоит знать, что чем больше в городе жителей, тем тяжелее попасть в топ пользователей, опубликовавших сторис с конкретной геолокацией. Основным критерием, оказывающим влияние на вывод в топ, является именно количество просмотров вашего профиля и сторис. Именно поэтому платная накрутка истории Инстаграм является одной из самых часто заказываемых услуг в нашей компании.</p>

                    <p>Накрутка истории в Инстаграме станет вашим шансом на быстрое продвижение аккаунта и возможность стать популярным. Статистика количества просмотров на профиле любого другого пользователя закрыта от остальных юзеров, поэтому точно узнать количество нужных просмотров невозможно. Мы рекомендуем начать с небольшого пакета, чтобы понять, насколько вся раскручиваемая история «заходит» вашей целевой аудитории и обеспечит её приток на ваш профиль. Просмотры сторис могут сыграть роль своеобразной снежной лавины, которая повлечёт за собой увеличение количества подписчиков, лайков, комментариев и появление целевых действий — предложений рекламы и сотрудничества.</p>

                    <h3>Основные преимущества платной накрутки просмотров сторис в Инстаграм</h3>

                    <p>Такая услуга даст положительный эффект во многих аспектах:</p>

                    <ol>
                        <li>Услуга позволяет накрутить просмотры последней опубликованной вами сторис и поднимет её в ТОП-списка по вашему городу или выбранной в геолокации стране. Таким образом вы сможете быстро поднять уровень популярности вашего профиля. Мы нередко сталкиваемся со случаями, когда малоизвестные аккаунты после комплексного продвижения у нас быстро выходят на монетизацию, находя заказчиков рекламы по факту выхода профиля в ТОП случайных показов по городу или региону.</li>
                        <li>Топовое место в сторис вашего региона или города точно принесёт вам всплеск активности на вашем аккаунте. Конверсия при выборе такой услуги необычайно высока. Наши менеджеры рекомендуют использовать комплексное продвижение профиля в Инстаграм, но и одной только накрутки истории в Инстаграме хватит, чтобы сделать ваш профиль более посещаемым на достаточно долгое время, повысить количество просмотров контента и лайков на постах.</li>
                        <li>При выборе большого пакетного предложения вы получите индивидуальные бонусы от нашего сервиса. Чем больше пакет, тем больше бонусов. Да и сама по себе покупка большого пакета, особенно для небольшого областного центра, позволит вам почти гарантированно ворваться в ТОП со всеми вытекающими обстоятельствами.</li>
                    </ol>

                    <p>Стоит не ограничиваться только своей реальной геолокацией: выбирайте различные города и страны при публикации сторис — чем шире аудитория, тем больше реальной активности будет на вашем аккаунте. При достаточном количестве просмотров в выбранном вами пакетном предложении у вас есть все шансы войти в топ региона или страны, что положительно скажется на общей статистике вашего аккаунта.</p>

                    <h3>Маркетинговая польза от накрутки просмотров сторис на вашем аккаунте</h3>

                    <p>Сторис в этой социальной сети являются отличным рабочим инструментом как для личного аккаунта, так и для корпоративного профиля бренда или компании. Это отличная возможность сделать ваш профиль более интересным и живым, то есть привлечь большое количество нативных пользователей, которые могли ранее не знать о вашем существовании, а благодаря услуге накрутки просмотров истории в Инстаграме найдут вас и подпишутся. С помощью коротких сторис вы сможете рассказать людям о том, чем живёт ваша компания или вы сами, чем увлекаетесь и что предлагаете своим подписчикам, а также рассказать о том, чем вы интереснее других. Технические особенности интерфейса приложения отображают сторис на самом ему верху, поэтому многие люди начинают свой день именно с просмотра интересных сторис. Чем выше ваш профиль в топе, тем больше шансов, что ваша сторис окажется на первом экране, который человек увидит сразу после вхожа в приложение Инстаграм или в его браузерную версию. Чем больше фактических просмотров накрученного типа, тем больше просмотров будет и реальных. Наши специалисты знают всё о том, как профессионально и безопасно накрутить большое количество просмотров ваших сторис и охватить ими максимальное количество пользователей в приложении.</p>

                    <h3>Как работает наша услуга и кому она может понадобиться</h3>

                    <p>Автоматическая накрутка просмотров на ваши сторис работает следующим образом:</p>

                    <ol>
                        <li>Вы оставляете заявку нашему менеджеру, сразу определившись с количеством просмотров сторис на вашем профиле. На этом этапе вам посоветуют оптимальный для вас вариант, так как далеко не всегда вам сразу нужен большой и дорогой пакет, накрутка которого для совсем маленького аккаунта может быть бесполезной на первых этапах и старте комплексного продвижения вашего профиля.</li>
                        <li>Выбирайте удобный способ оплаты и оплачивайте подобранное количество просмотров ваших сторис. По предварительному согласованию с менеджером вы можете выбрать время начала раскрутки профиля, приурочив его к выходу нужной сторис или старту конкурса (голосования, викторины или любой другой активности, проводимой в сторис).</li>
                        <li>Сразу после оплаты или в выбранное вами время специальные алгоритмы, разработанные специалистами нашего сервиса с учётом правил безопасности Инстаграм, начнут привлекать пользователей для просмотра последней активной сторис на вашем аккаунте. Далее всё будет происходить автоматически, что гарантирует выполнение поставленной задачи строго в оговоренное время. Кстати, запомните одно простое правило — чем больше пакет накрутки, тем дольше она будет происходить. Это связано с тем, что внутренние сервисы безопасности Инстаграм могут воспринять слишком быстрый рост количества просмотров в качестве нарушения правил «честной игры», после чего вам профиль может быть заблокирован на время или насовсем.</li>
                    </ol>

                    <h3>Кому может понадобиться накрутка просмотров сторис в Инстаграм</h3>

                    <p>С помощью сторис можно рассказывать об интересных событиях в вашей жизни и истории развития вашего бренда, делиться новостями и получать обратную связь от своих подписчиков, показывать интересные факты, дополняя их своими эмоциями и короткими сообщениями. Наличие в вашем аккаунте сторис фактически гарантирует вам пополнение в рядах подписчиков, которые с помощью таких живых эмоциональных моментов больше узнают у вас и начнут интересоваться контентом, который вы предлагаете. Итак, кто же чаще всего пользуется нашими услугами в этом плане:</p>

                    <ol>
                        <li>Компании и бренды. С помощью такой накрутки можно получить рост узнаваемости бренда и его популярности, создать доверие к своей компании и повысить лояльность аудитории, а ваш аккаунт может стать прекрасной базой для того, чтобы начать коммерческую деятельность и активно ей заниматься.</li>
                        <li>Блогеры с различным количеством собственной аудитории. После накрутки количества просмотров можно значительно увеличить охваты, которые привлекут на ваш профиль новых пользователей и увеличат количество реальных подписчиков. Также мы гарантируем, что услуга полностью безопасна и не повлечёт за собой временной или постоянной блокировки вашего профиля в Instagram. А рост активности среди подписчиков быстрее привлечёт к вам рекламодателей и спонсоров.</li>
                        <li>Обычные пользователи получат возможность найти новых друзей и потенциальных рекламодателей, которые обязательно появятся тогда, когда ваш аккаунт приобретёт достаточное количество подписчиков.</li>
                    </ol>

                    <h3>Цели, которых вы точно сможете добиться после накрутки</h3>

                    <ul>
                        <li>быстрый старт продаж предлагаемых вами товаров и услуг или монетизация личного профиля за счёт актуальной по контенту рекламы;</li>
                        <li>возможность добиться популярности своего аккаунта и узнаваемости вашей личности или компании;</li>
                        <li>поэтапный выход в ТОП рейтингов Инстаграм в своём городе или всей стране;</li>
                        <li>быстрая презентация товаров, услуг, новинок продукции или интересных новостей;</li>
                        <li>большой охват пользователей, в том числе и новых, в течение короткого промежутка времени.</li>
                    </ul>

                    <p>Обращайтесь к нам — гарантируем отличное качество всего спектра оказываемых услуг и цены, способные удивить даже самого взыскательного и щепетильного заказчика.</p>
        </div>
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


export default History;

