import Order from "components/order/order";
import { useState } from "react";
import React from "react";

const Comments = () => {


    const [order, setOrder] = useState(false);
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [img, setImg] = useState();
    const [start, setStart] = useState();
    const [finish, setFinish] = useState();
    const [guarantee, setGuarantee] = useState();

    const [link, setLink] = useState('/InstagramComments#1')


  
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

     const [subscribersName, setSubscribersName] = useState('Комментарии');
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
                            
                            <div className="imagelabel h_2 " >Комментарии</div>
                            <div>
                            
                                <a itemprop="url"><img itemprop="image" className="img-inner"   src={img} title="Instagram - Комментарии" alt="Instagram - Комментарии"  onerror="this.onerror=null;this.src='https://smmlaba.com/image/cache/data/iconsnew/inst/12-200x200.jpg';"/> </a>
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
                            
                                <div className="space-name-product"><a href="#"><span>Instagram - Комментарии</span></a></div> 
                                
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
                                
                                <div className="imagelabel h_2 " >Комментарии</div>
                                <div>
                                
                                    <a itemprop="url"><img itemprop="image" className="img-inner"   src={img} title="Instagram - Комментарии" alt="Instagram - Комментарии"  onerror="this.onerror=null;this.src='https://smmlaba.com/image/cache/data/iconsnew/inst/12-200x200.jpg';"/> </a>
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
                            
                                <div className="space-name-product"><a href="#"><span>Instagram - Комментарии</span></a></div> 
                                
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
                                
                                <div className="imagelabel h_2 " >Комментарии</div>
                                <div>
                                
                                    <a itemprop="url"><img itemprop="image" className="img-inner"   src={img} title="Instagram - Комментарии" alt="Instagram - Комментарии"  onerror="this.onerror=null;this.src='https://smmlaba.com/image/cache/data/iconsnew/inst/12-200x200.jpg';"/> </a>
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
                            
                                <div className="space-name-product"><a href="#"><span>Instagram - Комментарии</span></a></div> 
                                
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
                                
                                <div className="imagelabel h_2 " >Комментарии</div>
                                <div>
                                
                                    <a itemprop="url"><img itemprop="image" className="img-inner"   src={img} title="Instagram - Комментарии" alt="Instagram - Комментарии"  onerror="this.onerror=null;this.src='https://smmlaba.com/image/cache/data/iconsnew/inst/12-200x200.jpg';"/> </a>
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
                            
                                <div className="space-name-product"><a href="#"><span>Instagram - Комментарии</span></a></div> 
                                
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
                     <h1>Купить комментарии в Инстаграме</h1>

                        <p>Комментарии в Instagram - это отзывы фанатов под вашими фотографиями и видео в Instagram. Если вы мечтаете о десятках или сотнях русских комментариев в Instagram от нашего сервиса, они у вас под рукой. Мы поможем вам повысить вовлеченность поклонников и развить ваш профиль. При настройке пакета вы можете оставить свои комментарии или воспользоваться предложенными нами идеями. Реальные комментарии в Instagram заставят алгоритм заметить рост интереса к вашему посту, и в результате ваша фотография будет продвигаться еще больше. Большое количество комментариев под фотографиями в Instagram также побуждает новых людей подписаться на профиль. Кроме того:</p>

                        <ol>
                            <li>Если вы являетесь влиятельным лицом, большое количество комментариев под вашими фотографиями в Instagram значительно упростит вам налаживание нового сотрудничества с компаниями. Бренды с большей вероятностью отправят вам свою продукцию.</li>
                            <li>Если у вас бизнес-аккаунт, большое количество комментариев в Instagram сделает ваш бренд более профессиональным. Ведь если на ваши фото реагирует так много клиентов, значит, стоит воспользоваться вашими услугами или купить ваши товары!</li>
                        </ol>

                        <p>Если вы хотите купить комментарии в Инстаграме, сделайте свой профиль общедоступным на время кампании. Важно, чтобы фотографии в вашем аккаунте могли комментировать все, а не только люди, которые подписаны на вас. Не меняйте имя профиля во время кампании. Если вы все настроите правильно, у вас есть шанс насладиться исполнением заказа даже через час после оплаты заказа. Максимальное время выполнения заказа - 48 часов.</p>

                        <p>Выберите из списка количество комментариев, которые вы хотите получать, и укажите ссылку на фотографию.</p>

                        <h3>Где взять ссылку на фото в Instagram, если я использую компьютер?</h3>

                        <p>Зайдите в свой профиль Instagram в браузере и нажмите на фото, под которым вы хотите оставить комментарий. Фотография увеличится. Затем скопируйте адрес веб-сайта с верхней панели и вставьте его в нужное место при оформлении заказа.</p>

                        <h3>Как получить ссылку на фото в Instagram, если я использую приложение на своем телефоне?</h3>

                        <p>Откройте приложение Instagram и перейдите в свой профиль. Нажмите на фото, под которым хотите оставить комментарий. Затем над фотографией в правом верхнем углу вы нажимаете на три точки. Появятся дополнительные параметры. Выберите «Копировать ссылку», а затем вставьте ее в нужное место при размещении заказа.</p>

                        <h2>Как бесплатно получать комментарии в Instagram?</h2>

                        <p>Или вы можете получить комментарии в Instagram бесплатно. Однако это потребует небольшой работы. Эти советы могут привлечь новых подписчиков, и это абсолютно бесплатно! Как бесплатно получать комментарии в Instagram?</p>

                        <ol>
                            <li>Просто прокомментируйте фотографии других пользователей. Однако стоит делать это как можно естественнее, не спамить и не уговаривать людей посетить ваш профиль.</li>
                            <li>Постарайтесь отвечать на каждый комментарий, который вы получаете под фотографией, и посмотрите на человека, который оставил вам этот комментарий. Если вы прокомментируете ее фото, она обязательно с радостью вернется к вам в профиль.</li>
                            <li>Вы также можете время от времени проводить конкурсы в Instagram. Они могут, например, означать, что побеждает человек, который наиболее активен в вашем профиле.</li>
                        </ol>

                        <p>К сожалению, получить комментарии в Instagram бесплатно не так-то просто и часто это занимает много времени. Если вы не хотите тратить время на вышеперечисленные способы, стоит купить.</p>

                        <p>Где купить комментарии в Instagram? Чтобы сэкономить ваше время, специально для наших клиентов мы подготовили сервис комментариев в Instagram.</p>

                        <h2>Платные комментарии в Инстаграм</h2>

                        <p>Купить комментарии в Инстаграм можно всего за несколько копеек за комментарий. Чтобы узнать точную цену на услугу, достаточно выбрать количество комментариев, которые вы хотите купить, и наша система сразу покажет их цену.</p>

                        <p>Надеемся, вы уже знаете, почему стоит покупать комментарии в Instagram!</p>

                        <p>Если вы хотите, чтобы ваша учетная запись была высокоразвитой, обязательно ознакомьтесь с другими нашими услугами: Комментарии в Instagram, подписчики в Instagram, просмотры в Instagram и прочие услуги в других социальных сетях.</p>

                        <h2>Реальные комментарии в Instagram</h2>

                        <p>Предлагаем вам качественные комментарии в Instagram в нашем магазине. Благодаря тому, что наши комментарии от живых людей они помогут вам правильно продвигать ваш профиль в Instagram. Приобретая комментарии на нашем сайте вы можете быть уверены, что ваш аккаунт не будет заблокирован, а фотографии не будут удалены!</p>

                        <p>Наши действия полностью совместимы с алгоритмом Instagram. Остерегайтесь подозрительных сайтов, которые ориентированы на получение быстрой прибыли или кражу данных. Вам не нужно вводить пароль или другую личную информацию, чтобы покупать комментарии в Instagram. Нам просто нужна ссылка на ваш пост. Вы можете быстро и легко получить комментарии в Instagram. Надежность и качество наших услуг подтверждают сотни довольных клиентов. Если вы заботитесь о популярности, а ваша учетная запись все еще не номер один в insta, пора воспользоваться нашим предложением</p>

                        <p>Вы можете купить живые комментарии в Инстаграм в Instagram только на SSL-сертифицированных веб-сайтах с полной информацией о компании, подробной информацией, услугами и четким прейскурантом.</p>

                        <h2>5 способов получить больше комментариев в Instagram</h2>

                        <ul>
                            <li>Публикуйте интересные фото, видео и истории в Instagram каждый день.</li>
                            <li>Добавьте соответствующие хэштеги - вы можете использовать приложение, которое вам в этом поможет.</li>
                            <li>Взаимодействуйте с чужими аккаунтами, добавляя Комментарии и комментарии в Instagram.</li>
                            <li>Никогда не игнорируйте комментарии, даже простое «спасибо» будет оценено по достоинству.</li>
                            <li>Поддерживать высокий уровень вовлеченности фанатов.</li>
                        </ul>

                        <h2>Могу ли я получить бан за комментарии в Instagram?</h2>

                        <p>Здесь стоит отметить, что мы действуем так, чтобы вы были полностью удовлетворены услугами нашего магазина. Комментарии к вашим фотографиям, сообщениям или видео не повлияют негативно на вашу репутацию. Так что вас не забанят и не отстранят от возможности накрутки. Вы должны помнить, что комментарии проверяются на постоянной основе. Это путь к вашему успеху в интернете. Так что покупайте комментарии сегодня и пользуйтесь хорошей репутацией в сети.</p>

                        <h3>Немедленный эффект в день заказа</h3>

                        <p>Большинство заказов обрабатываются в течение нескольких минут, в зависимости от посещаемости нашего веб-сайта и размера заказа. У нас есть специальные скидки и акции для крупных заказов и постоянных клиентов. Наша компания гарантирует конфиденциальность и конфиденциальность даже при самых крупных заказах. Многие клиенты уже попробовали и остались полностью довольны нашими услугами. Мы поддерживаем многих людей, в том числе ютуберов, спортсменов, личных тренеров, блогеров и телезвезд. Так что ждем и вас!</p>

                        <h2>Как купить комментарии в Instagram</h2>

                        <p>На первом этапе вам нужно выбрать количество комментариев, которые нужно добавить к вашим фотографиям или видео в Instagram. Среди доступных пакетов вы найдете те, которые клиенты выбирают чаще всего. Они отмечены звездочкой, чтобы помочь вам решить, какой пакет выбрать. Все комментарии в Instagram можно равномерно разделить на несколько фотографий. Это позволит вам продвигать профиль постепенно и достоверно в рациональном темпе.</p>

                        <p>Настройка пакета</p>

                        <p>Покупайте комментарии в Instagram, выбрав реальные или поддельные аккаунты. Мы даем вам возможность выбрать и скорректировать цену, чтобы вы платили только за то, что вам нужно. Если вы производите впечатление, потому что вы общественный деятель, вам нужно выбирать только услуги высочайшего качества. Однако, если вы просто хотите повысить свою популярность, достаточно искусственных аккаунтов.</p>

                        <p>Введите имя учетной записи</p>

                        <p>Валидное имя учетной записи Instagram очень важно. На следующем шаге вам нужно будет ввести свой и найти профиль. Нам необходим общедоступный профиль для выполнения и до начала поиска. Это позволит нам найти ваш профиль и оформить заказ. Вам не нужно давать ссылки или копировать ссылку на фото. Вы указываете имя и выбираете фотографии, которые хотите продвигать.</p>

                        <p>Оплатить заказ</p>

                        <p>Оплата комментариев в Instagram производится с помощью платежных систем. Благодаря этому мы легко можем принимать платежи по безналичному расчету из любого банка Польши и сразу же оказывать услугу! Для иностранных клиентов мы рекомендуем выбрать оплату кредитной картой.</p>

                        <h2>Частые вопросы покупателей о комментариях в Instagram</h2>

                        <p>1 Как долго длится обслуживание?</p>

                        <p>Мы стараемся выполнять заказы в кратчайшие сроки. Для комментариев в Instagram большинство заказов обрабатывается сразу или в тот же день после оплаты заказа. Обычно время обслуживания не превышает 72 часов. Заказы с мгновенным исполнением поступают на исполнение сразу, а стандартные заказы - через 10 минут ожидания в очереди.</p>

                        <p>2 Вы выставляете счета-фактуры по НДС?</p>

                        <p>Мы являемся юридически действующей компанией и выставляем счета за оказанные услуги. Если вы хотите получить счет-фактуру, введите такие данные, как NIP, название компании или НДС в ЕС, и он будет автоматически отправлен на адрес электронной почты, указанный в заказе.</p>

                        <p>3 Получу ли я русские комментарии при покупке этой услуги?</p>

                        <p>Да. Комментарии доступны на русском языке.</p>

                        <p>4 Какой пакет выбрать?</p>

                        <p>Лучший пакет комментариев - тот, который соответствует размеру вашей учетной записи. Профили с количеством подписчиков от 100 до 1000 должны иметь от 10 до 20 комментариев к фотографии. Кроме того, если в вашем профиле больше фотографий, выберите пакет большего размера и равномерно распределите их между всеми фотографиями.</p>

                        <h3>Преимущества покупки на нашем сайте</h3>

                        <p>Самое быстрое исполнение</p>

                        <p>Первые эффекты кампании обычно видны уже через 10 минут после оплаты заказа. Если это слишком быстро для вас, купите комментарии в Instagram, используя постепенное добавление, чтобы все выглядело еще более естественно.</p>

                        <p>Служба поддержки</p>

                        <p>Мы предлагаем бесплатную поддержку клиентов в форме горячей линии и электронной почты для новых клиентов и через систему продажи билетов для существующих клиентов и заказов. Кроме того, это позволяет нам экономить время и еще более эффективно отвечать на сообщения.</p>

                        <p>Цена и качество</p>

                        <p>Мы осознаем, что каждая акция - это реальная стоимость для клиента, поэтому мы предлагаем только те услуги, которые хотели бы получить сами. Мы уважаем вас и ваши деньги, поэтому вы получаете только лучший сервис по разумной цене.</p>

                        <h2>Как покупаются комментарии к фотографиям в Instagram?</h2>

                        <p>В связи с многочисленными вопросами о том, как покупать фото комментарии, мы решили подготовить краткое описание нашего сервиса и развеять все сомнения. Прежде всего ваша учетная запись должна быть общедоступной. Кроме того, заказы и действующие ссылки на личные профили также не выполняются. Другие проблемы, которые могут возникнуть, - это отключение возможности комментировать фото или видео. Как и в случае с частными профилями, мы также не сможем выполнять такие заказы.</p>

                        <h3>Какую ссылку добавить?</h3>

                        <p>Из-за многочисленных ошибок или запросов нам пришлось объяснять, почему правильные настройки так важны для продвижения. Из-за большого количества заказов мы уже не можем обрабатывать заказы вручную, и программа нам помогает. Наша система автоматически передает все заказы на исполнение. Не забудьте указать действующую ссылку на фото или видео, по которым будут появляться комментарии. Это связано с большим количеством заказов, которые мы не можем «обработать» самостоятельно. В отличие от наших конкурентов, мы не используем программы или приложения для размещения комментариев. Кроме того, автоматическая система, которую мы используем, передает заказы только нужным пользователям и полностью безопасна. Тем не менее, если возникла проблема с реализацией, или вы забыли про информацию выше, ничего не потеряно! Мы точно не пропустим ваш заказ! Все, что вам нужно сделать, это связаться с нами, и мы решим проблему или подскажем, что делать.</p>

                        <h3>Дополнительные опции, разделение пакетов и оплата</h3>

                        <p>Наконец, мы опишем некоторые дополнительные возможности, которые вы найдете при оформлении заказа. Мы ответим на ваши вопросы о способах оплаты и о том, сколько времени занимает обслуживание. В первую очередь обратите внимание на качество аккаунтов, с которых проводится кампания. В связи с тем, что не все пользователи заботятся о реальных комментариях, мы также ввели профили более низкого стандарта. Решите для себя, что вас больше волнует, качество или цена? Как и в случае с остальными услугами на нашем сайте, вы можете купить комментарии в Instagram, заплатив: быстрым переводом из любого банка или по SMS! Кроме того, если вы хотите более быстрое внедрение или постепенное добавление, вы также можете выбрать эти дополнительные параметры.</p>

                        <p>Большинство компаний, которые используют платформы социальных сетей для поиска подрядчиков и постоянных клиентов, рано или поздно покажут необходимость покупать подписчиков в Instagram. На самом деле все начинают с нуля, и большое количество подписчиков также является показателем успеха вашей компании. Ожидание такой аудитории может занять много времени и может быть использовано конкурентами. Пока вы публикуете отличные записи и создаете отличный контент, ваш успех зависит от крутого расчета.</p>

                        <p>Одна из самых эффективных стратегий, которые использовали многие маркетологи нашей компании для максимального успеха в Instagram, - это покупка подписчиков. Увеличение базы подписчиков означает, что у вас будет больше потенциальных клиентов для вашего бизнеса. Кстати, тот факт, что Instagram растет день ото дня, означает, что вам следует сосредоточиться на конкретных делах. Таким образом, только те компании, которые знают, как воспользоваться преимуществами этой платформы социальных сетей, будут подниматься в ее структуры.</p>

                        <p>Покупка подписчиков выгодна не только компаниям. Некоторые люди хотели бы оказаться в центре внимания и использовать Instagram в личных целях. Наличие большой базы наблюдателей на платформе может помочь вам в достижении вашей цели стать известным.</p>

                        <p>К сожалению, многие люди слишком мало знают обо всем процессе и стратегии покупки, поэтому делают это неправильно. Если вы один из этих людей, вам не о чем беспокоиться, потому что, читая дальше, вы узнаете причины, по которым вам стоит покупать настоящих подписчиков в Instagram прямо здесь.</p>

                        <h3>Укрепить авторитет</h3>

                        <p>Больше комментариев означает больше взаимодействий и больше продаж. Это также дает вашей учетной записи более высокий «авторитет», так что больше пользователей склонны следовать за вами.</p>

                        <h3>Увеличение продаж</h3>

                        <p>Имея все больше и больше комментариев в вашей учетной записи Instagram, вы создаете репутацию компании, которая может более эффективно продавать ваши услуги или продукты. Это стопроцентный путь к успеху!</p>

                        <h3>Укрепите свой бренд</h3>

                        <p>Покупка комментариев в Instagram поможет вашей учетной записи выглядеть более популярной, что значительно увеличит ее охват и доверие естественных получателей.</p>
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

export default Comments;
