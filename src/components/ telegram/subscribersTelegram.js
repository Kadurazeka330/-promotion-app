import Order from "components/order/order";
import { useState } from "react";
import React from "react";

const SubscribersTelegram = () => {


    const [order, setOrder] = useState(false);
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [img, setImg] = useState();
    const [start, setStart] = useState();
    const [finish, setFinish] = useState();
    const [guarantee, setGuarantee] = useState();

    const [link, setLink] = useState('/TelegramSubscribers#1')


  
    const OrderTelegram = order? <Order name = {name} price = {price} img = {img} start = {start} finish = {finish} guarantee = {guarantee}/> : null;


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

     const [subscribersName, setSubscribersName] = useState('Подписчики на каналы');
     const [subscribersPrice, setSubscribersPrice] = useState(11);
     const [img, setImg] = useState("/telegram_followers.png");
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
                        
                        <div className="imagelabel h_2 " >Подписчики </div>
                        <div>
                        
                            <a itemprop="url"><img itemprop="image" className="img-inner"   src={img} title="Instagram -Просмотры  " alt="Instagram -Просмотры  "  onerror="this.onerror=null;this.src='https://smmlaba.com/image/cache/data/iconsnew/inst/12-200x200.jpg';"/> </a>
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
                        
                            <div className="space-name-product"><a href="#"><span>Instagram -Просмотры  </span></a></div> 
                            
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
                            
                            <div className="imagelabel h_2 " >Подписчики </div>
                            <div>
                            
                                <a itemprop="url"><img itemprop="image" className="img-inner"   src={img} title="Instagram -Просмотры  " alt="Instagram -Просмотры  "  onerror="this.onerror=null;this.src='https://smmlaba.com/image/cache/data/iconsnew/inst/12-200x200.jpg';"/> </a>
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
                        
                            <div className="space-name-product"><a href="#"><span>Instagram -Просмотры  </span></a></div> 
                            
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
                            
                            <div className="imagelabel h_2 " >Подписчики </div>
                            <div>
                            
                                <a itemprop="url"><img itemprop="image" className="img-inner"   src={img} title="Instagram -Просмотры  " alt="Instagram -Просмотры  "  onerror="this.onerror=null;this.src='https://smmlaba.com/image/cache/data/iconsnew/inst/12-200x200.jpg';"/> </a>
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
                        
                            <div className="space-name-product"><a href="#"><span>Instagram -Просмотры  </span></a></div> 
                            
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
                            
                            <div className="imagelabel h_2 " >Подписчики </div>
                            <div>
                            
                                <a itemprop="url"><img itemprop="image" className="img-inner"   src={img} title="Instagram -Просмотры  " alt="Instagram -Просмотры  "  onerror="this.onerror=null;this.src='https://smmlaba.com/image/cache/data/iconsnew/inst/12-200x200.jpg';"/> </a>
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
                        
                            <div className="space-name-product"><a href="#"><span>Telegram -Просмотры  </span></a></div> 
                            
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

                <h1>Накрутка подписчиков в Телеграм</h1>

                <p>Порой очень важно быстро решить вопрос с приобретением большого количества голосов на таком солидном канале, как Telegram. Возможно, это не так и не стоит заниматься поиском накрутки подписчиков?</p>

                <p>Нет, это действительно важно. Дело в том, что они существенно повышают ценность канала, его авторитет и доверие клиентов. Получается замкнутый круг: нужны клиенты, а клиентов нет, потому что канал редко посещается. Именно в таких случаях самым оптимальным вариантом будет быстро создать себе объем подписчиков. Самостоятельно это сделать не получится, лучше обратиться к надежному партнеру, который сделает все быстро и качественно. Это удобно сделать вместе с SmmLaba.com. Значимость группы измеряется общим количеством подписчиков – значит, их просто нужно купить.</p>

                <h2>Для чего осуществляют накрутку подписчиков в Телеграм</h2>

                <p>Именно с помощью большого количества клиентов в Telegram можно продавать услуги и товары, выгодно заниматься бизнесом. Зашедший новичок видит, что людей на канале много, он раскрученный, следовательно, ему можно доверять и совершать покупки, общаться, обмениваться информацией.</p>

                <p>Если владелец канала покупает подписчиков – он автоматически становится владельцем надежного средства для увеличения клиентов и дохода.</p>

                <h3>Моральные сомнения</h3>

                <p>Если у кого-то еще остались сомнения и угрызения совести, то не стоит мучиться. Накрутка подписчиков – это тот метод, которым пользуются очень многие продавцы и блогеры, владельцы каналов и интернет – магазинов. Все хотят быть успешными и получать большой доход. И уверенность в том, что им есть, что предложить клиентам, подкрепляется большим количеством подписчиков. Ведь накрутка подписчиков в Телеграмм дешево – это просто инструмент развития бизнеса и успешности, который вытянул наверх многих сомневающихся. Боишься за свой бизнес и мечтаешь о его развитии? Добро пожаловать к нам, мы сможем, как никто, накрутить подписчиков в Телеграмме.</p>

                <h3>Пойти медленным путем</h3>

                <p>Если все же сомнения у владельца канала существуют, он обычно идет медленным путем, продвигая себя обычными методами. Это долго, проблематично и не всегда эффективно. Так, создается интересный, качественный контент, увеличивается частотность выхода постов. И начинается ожидание, надежда, что кто-либо зайдет на канал и станет его клиентом. Если неоправданно увеличивать количество постов и рассылать их неподготовленной нелояльной аудитории, они чаще всего расцениваются как простой спам, не вызывают ничего, кроме негатива, раздражают и утомляют.</p>

                <p>Кроме того, иногда пользуются перекрёстными ссылками или просят кого-либо известного порекомендовать новый не раскрученный канал. Это срабатывает не всегда, кроме того, за рекомендации «звезда» может попросить гораздо больше денег, чем стоит накрутка. И если услуга или товар не пользуются спросом, если владелец канала не яркая знаменитость, увеличения подписчиков можно безнадежно ждать годами. Следовательно, медленный путь – это путь в никуда, надежда на авось, которая никогда не сбудется.</p>

                <h3>Лучший выход</h3>

                <p>Какой же путь выбрать? Как не стать заложником ожидания? Как не потерять возможность подняться над конкурентами в такое непростое время? Для этого нужно воспользоваться услугами нашего сайта. Это стопроцентное попадание в успех. Это надежно и проверено опытом. Мы расскажем, как просто и быстро, безопасно и легко увеличить количество подписчиков на любом ресурсе, особенно в Телеграм. Мы занимаемся этим много лет и знаем все варианты, все пути и возможности, все лазейки.</p>

                <h3>Быстрый успех</h3>

                <p>Как насчет того, чтобы подняться сразу на тысячу клиентов? Или больше? Все это мы поможем сделать без проблем. И ваши клиенты будут делать заказы, оставлять комментарии, проходить тесты и высказывать мнения. Ваш канал засияет яркой звездой, которую нельзя будет не заметить. Ваши клиенты – это ваши вложения, ваши потенциальные деньги. Не стоит бояться увеличения клиентов. Стоит плодотворно сотрудничать с нами, чтобы стать одним из успешных преуспевающих лидеров бизнеса. Мы помогли многим из них выйти из кризиса.</p>

                <h3>Простота – залог успеха</h3>

                <p>Неужели так просто? Именно так! Необходимо принять важное решение – и дальше дело за нами. Опытные специалисты увеличат число ваших подписчиков. Все нужные рычаги будут сдвинуты –и успех и раскрученность будут вместе с каналом. Стоит верить в удачу и планомерно работать над нею вместе с нами. Наш опыт, поддержка круглые сутки и квалифицированная помощь никогда не будут лишними. Мы ответим на все вопросы и ликвидируем последние сомнения.</p>

                <p>Мнение клиентов</p>

                <p>Большое количество клиентов равно доверие и успех. Так сейчас думают большинство клиентов. И они не подпишутся на новичка, опасаясь за свои деньги, репутацию и время. Гораздо проще быть с теми, кто уже на вершине. А как кто-то туда добрался, не имеет значения.</p>

                <p>Таким образом, покупка новых участников Telegram у нас на платформе станет отличным стартом для вашей группы или канала Telegram. Это еще и отличная перспектива для любого долгосрочного сотрудничества, возможность заработать прочную репутацию, вложив небольшую сумму денег, что быстро вернется большими дивидендами.</p>

                <h3>Тайны взаимодействия</h3>

                <p>В работе с накруткой есть своя специфика и тайны. Так, есть и недостатки именно в фейковых подписчиках. Их легко создать, но и избавиться от них затем будет сложнее. Это следует помнить. Именно у нас есть свои способы для такой работы, мы легко справимся с такой проблемой.</p>

                <p>Если канал временно блокируется, могут удалиться и фейковые подписчики. Однако мы знаем, как справиться с этой проблемой. Кроме того, с дорогими базами такой проблемы не бывает вообще.</p>

                <h3>Борьба с конкурентами</h3>

                <p>У вас проблемы с конкурентами? Хочется обладать их базой подписчиков, иметь возможность проводить анализ аудитории и прочие взаимодействия? Мы поможем вам в этом. Нужные инструменты настроят таргетинг на аудиторию конкурентов. Участники групп конкурентов станут вашими. Это сразу повысит ценность вашего канала, появится возможность работы с аудиторией, информирования и работы с базой.</p>

                <h3>Безопасность клиента – прежде всего</h3>

                <p>Если есть какие-либо опасения, то они в данном случае напрасны. Все, что мы делаем для вас, делалось для других клиентов, безопасно и проверено временем и опытом. Кроме того, каждый день мы изобретаем новые способы увеличения подписчиков наших клиентов, новые способы безопасности. Не будет ни бана, ни удаления канала или группы. Только безопасное взаимодействие и проверенные методы.</p>

                <h2>Накрутка подписчиков в Телеграм от SmmLaba</h2>

                <p>Почему необходимо купить накрутку подписчиков в Телеграмме на канал именно у нас?</p>

                <ul>
                    <li>Даем гарантию: есть опыт (более семи лет) в продвижения в различных соцсетях, что дает возможность обходить разные блокировки в сообществах. Мы щелкаем их как орешки;</li>
                    <li>Вам нужна качественная база реальных подписчиков? Это наша специфика! Обращайтесь – и информация о вашем товаре или услуге разойдется по сети мгновенно, увеличивая продажи и узнаваемость;</li>
                    <li>Мы ведем наших клиентов на протяжении всей раскрутки канала, понимая этот трудоемкий процесс. Круглосуточная поддержка и присутствие 24 часа в сутки – все для наших клиентов.</li>
                    <li>Надежная долгосрочная работа на безопасной скорости и с полной автоматизацией;</li>
                    <li>Многообразие и ассортимент баз и клиентов: мы предоставляем различные базы клиентов. Это могут быть как реально существующие люди, так и боты, фейки. Все зависит от желания владельца канала.</li>
                    <li>Разумные цены: дешевая накрутка Телеграмм – именно у нас, так как долгосрочные отношения с клиентами – это то, к чему мы стремимся;</li>
                    <li>Продаем услуги напрямую, без посредников. Наши специалисты и собственный опыт говорят сами за себя;</li>
                    <li>Безопасно: не требуем от клиента лишней информации, которая не обязательна, не нужна. Все данные шифруются, доступ к аккаунту также не требуется. Таким образом, работать с нами удобно, комфортно и выгодно.</li>
                </ul>

                <h3>Решение проблем</h3>

                <p>Если именно сейчас вы ломаете голову, как улучшить качество бизнеса и увеличить количество подписчиков – обращайтесь к нам! У нас есть все инструменты для вашего успеха и безопасной работы с клиентами! Создайте себе отличную репутацию вместе с нами! Не ждите клиентов –создавайте их сами!</p>
             </div>
            )
        }



    return(
        <>
            <View/>
            {OrderTelegram}
            <Info/>
        </>
    )

}


export default SubscribersTelegram;

