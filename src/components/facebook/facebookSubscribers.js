import Order from "components/order/order";
import { useState } from "react";
import React from "react";

const FacebookSubscribers = () => {


    const [order, setOrder] = useState(false);
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [img, setImg] = useState();
    const [start, setStart] = useState();
    const [finish, setFinish] = useState();
    const [guarantee, setGuarantee] = useState();

    const [link, setLink] = useState('/FacebookSubscribers#1')


  
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

     const [subscribersName, setSubscribersName] = useState('Подписчики');
     const [subscribersPrice, setSubscribersPrice] = useState(11);
     const [img, setImg] = useState("/facebook_friends1.png" );
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
                        
                        <div className="imagelabel h_2 " >Подписчики на профиль</div>
                        <div>
                        
                            <a itemprop="url"><img itemprop="image" className="img-inner"   src={img} title="Подписчики" alt="Подписчики"  onerror="this.onerror=null;this.src='https://smmlaba.com/image/cache/data/iconsnew/inst/12-200x200.jpg';"/> </a>
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
                        
                            <div className="space-name-product"><a href="#"><span>Подписчики</span></a></div> 
                            
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
                            
                            <div className="imagelabel h_2 " >Подписчики</div>
                            <div>
                            
                                <a itemprop="url"><img itemprop="image" className="img-inner"   src={img} title="Подписчики" alt="Подписчики"  onerror="this.onerror=null;this.src='https://smmlaba.com/image/cache/data/iconsnew/inst/12-200x200.jpg';"/> </a>
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
                        
                            <div className="space-name-product"><a href="#"><span>Подписчики</span></a></div> 
                            
                            <div className="line_title product-recoment-line">
                            <div className="sqr line_title_first"></div>
                            <div className="sqr line_title_second"></div>
                        </div>
                </div>   
                
                <br/>

                    <div>
                
                <button className="button-product"> <a  href={link} onClick={() =>upDataOrder(subscribersName, subscribersPrice2, img, start2, finish2, guarantee2)}  >  Заказать </a></button>
                </div>


                         </div>  

                         <div  className="product">
                    
                                
                        <div className="offer-product"  id="for-product-image">
                            
                            <div className="imagelabel h_2 " >Подписчики</div>
                            <div>
                            
                                <a itemprop="url"><img itemprop="image" className="img-inner"   src={img} title="Подписчики" alt="Подписчики"  onerror="this.onerror=null;this.src='https://smmlaba.com/image/cache/data/iconsnew/inst/12-200x200.jpg';"/> </a>
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
                        
                            <div className="space-name-product"><a href="#"><span>Подписчики</span></a></div> 
                            
                            <div className="line_title product-recoment-line">
                            <div className="sqr line_title_first"></div>
                            <div className="sqr line_title_second"></div>
                        </div>
                </div>   
                
                <br/>

                    <div>
                
                <button className="button-product"> <a  href={link} onClick={() =>upDataOrder(subscribersName, subscribersPrice3, img, start3, finish3, guarantee3)}  >  Заказать </a></button>
                </div>


                         </div>  

                         <div  className="product">
                    
                                
                        <div className="offer-product"  id="for-product-image">
                            
                            <div className="imagelabel h_2 " >Подписчики</div>
                            <div>
                            
                                <a itemprop="url"><img itemprop="image" className="img-inner"   src={img} title="Подписчики" alt="Подписчики"  onerror="this.onerror=null;this.src='https://smmlaba.com/image/cache/data/iconsnew/inst/12-200x200.jpg';"/> </a>
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
                        
                            <div className="space-name-product"><a href="#"><span>Подписчики</span></a></div> 
                            
                            <div className="line_title product-recoment-line">
                            <div className="sqr line_title_first"></div>
                            <div className="sqr line_title_second"></div>
                        </div>
                </div>   
                
                <br/>

                    <div>
                
                <button className="button-product"> <a  href={link} onClick={() =>upDataOrder(subscribersName, subscribersPrice4, img, start4, finish4, guarantee4)}  >  Заказать </a></button>
                </div>


                         </div>  
             </div>
        
        </>
    )
}
    
    
    const Info = () => {
        return(
            <div class="category-info">

            <h1>Накрутка друзей в Фейсбук</h1>

            <p>Фейсбук – одна из самых популярных соц. сетей в мире. На площадке зарегистрировано более 2 млрд. человек со всего мира, что создает прекрасную возможность заявить о себе, познакомить людей с товарами или новыми услугами и заработать.</p>

            <p>Накрутка друзей в Фейсбук – элегантный способ увеличить аудиторию страницы в короткий срок, с минимальными вложениями. Вслед за накрученными подписчиками, в друзья станут добавляться реальные люди, что совершенно естественно.</p>

            <p>Если вы популярны, значит, интересны и полезны. Именно так думают обычные пользователи, когда принимают решение (чаще всего, спонтанное) подписаться на ту или иную страницу.</p>

            <h2>Кому и для чего выгодна накрутка друзей</h2>

            <p>Чтобы разобраться с этим вопросом, для начала следует определить, какую выгоду можно извлечь из аудитории. Что дает накрутка?</p>

            <p>В первую очередь, это повышение рейтинга страницы. Пользователи больше доверяют контенту, опубликованному на популярных ресурсах. Накрутка способствует продвижению определенного товара или бренда, что очень выгодно предпринимателям. Ведь это прекрасный способ заявить о себе, расширить клиентскую базу и увеличить прибыль с продаж.</p>

            <p>Страница с большим количеством подписчиков и друзей вызывает больше доверия к предлагаемым на ней товарам и услугам. Позволяет в самый короткий срок распространять необходимую информацию, например, о предстоящих скидках, акциях, конкурсах. Известить об открытии новых филиалов или познакомить с новинками.</p>

            <p>Закономерность – чем больше подписчиков имеет страница, тем охотнее на нее подписываются. И это далеко не полный перечень выгод от накрутки. Приобретенная подобным образом аудитория, окупится в самый короткий срок. Позволит добиться поставленных целей, извлечь запланированную прибыль.</p>

            <h2>Разница между подписчиками и друзьями в Facebook</h2>

            <p>Для продвижения страницы важны и друзья, и подписчики. Вместе они составляют целевую аудиторию. Если говорить о разнице между этими группами – да, она действительно, есть.</p>

            <p>Описание друзей и подписчиков:</p>

            <ul>
                <li>подписчики – участники соц. сети, подписавшиеся на страницу, но не получившие подтверждения на запрос «добавить в друзья»;</li>
                <li>друзья – люди, получившие подтверждение на запрос о добавлении в друзья.</li>
            </ul>

            <p>Подписчики могут видеть доступные для всех посты. Публикации, предназначенные друзьям, им не видны. Вообще, владелец аккаунта, по своему усмотрению, может ограничить видимость контента любому подписчику или другу, воспользовавшись соответствующей опцией в настройках.</p>

            <p>Накрутка друзей Facebook – важный шаг в стратегии продвижения товара, услуги, обретения популярности. И здесь важно соблюсти определенный баланс, соотношение количества подписчиков и друзей. Страница, имеющая 100 000 подписчиков и всего 30 друзей, будет вызывать недоумение.</p>

            <h2>Польза от большого количества друзей в Фейсбук</h2>

            <p>Накрутить друзей в Фейсбук нужно хотя бы для того, что именно они делают страницу популярнее. Друзья могут видеть все публикации. Они их читают, лайкают, репостят, благодаря чему, контент появляется в лентах людей, подписанных на ваших друзей. Популярность публикаций растет.</p>

            <p>Безусловно, контент должен быть качественный, интересный и полезный. По-другому публикации просто никто не будет читать. Однако, когда страница никому не известна, имеет мало друзей и подписчиков, публикации никто не увидит и не оценит. Вот в этот момент и нужна накрутка френдов.</p>

            <p>Потом включается другой механизм. Люди быстрее подписываются на популярные страницы с большим количеством друзей и подписчиков, чем на те, у кого 50-100 друзей.</p>

            <h3>Почему именно накрутка?</h3>

            <p>Собирать вручную целевую аудиторию – не то чтобы совсем нереально. Скорее, мало осуществимо. Огромные затраты времени с минимальным КПД, если охарактеризовать данный способ одним предложением. Поэтому и остается только накрутка.</p>

            <h2>Возможно ли накрутить друзей бесплатно?</h2>

            <p>Однозначно – да. Фейсбук, как и другие соц. сети предлагает такую опцию. Она называется «Добавить в друзья». Можно синхронизировать станицу в Фейсбуке со своими профилями в других соц. сетях.</p>

            <p>Дополнительные варианты:</p>

            <ul>
                <li>собрать друзей путем взаимной подписки. Заинтересованных в подобном обмене пользователей, можно найти по соответствующим хэштегам и группам. Стоит отметить, шанс собрать целевую аудиторию, практически нулевой. А сам процесс накрутки друзей таким способом займет огромное количество времени;</li>
                <li>публиковать информацию о странице на других площадках и сайтах. Чем больше ссылок на страницу будет размещено на сторонних ресурсах, тем лучше. Единственный минус – все меньше людей в сети переходят по незнакомым ссылкам, опасаясь фишинга и других малоприятных последствий столкновения со злоумышленниками;</li>
                <li>найти в сети бесплатное приложение и воспользоваться им. Прибегать к этому варианту настоятельно не рекомендуем. Большинство подобных приложений заражено вирусами, которые могут нанести достаточно серьезный ущерб. Начиная от кражи хранящихся на компьютере данных, заканчивая взломом аккаунтов, воровством денежных средств с банковских карт и электронных кошельков.</li>
            </ul>

            <p>Получается, что бесплатные способы накрутки или малоэффективны или откровенно, опасны. Целесообразнее заказать качественную SSM-услугу и получить гарантированный результат.</p>

            <h2>О рисках попасть под бан из-за накрутки друзей</h2>

            <p>Политика администрации Фейсбука относительно фейковых аккаунтов и спама, носит жесткий и бескомпромиссный характер. Именно по этой причине неграмотная накрутка, с большой долей вероятности, приведет к блокировке страницы.</p>

            <p>И здесь важно понимать, ни один сервис не сможет содержать штат из нескольких сотен человек с реальными аккаунтами. Никто не будет в заданное время массово добавляться на указанную страницу. Накрутка друзей Facebook – это всегда боты. Разница только в том, какого они качества.</p>

            <p>Если заметно, что страница фейковая, администрация соц. сети обязательно обратит на нее внимание. Безрисковая накрутка возможна только с помощью профилей, максимально похожих на обычных людей.</p>

            <p>Необходимо правильно рассчитать скорость накрутки и ее интенсивность. На самой странице должны обязательно появляться SEO-оптимизированные публикации. Также, желательно, чтобы в момент накрутки в друзья добавлялись и реальные люди.</p>

            <h2>Как минимизировать риск бана аккаунта за накрутку друзей</h2>

            <p>Здесь важно понимать – любая активность в соц. сети отслеживается поисковыми роботами-алгоритмами. Существуют негласные ограничения по скорости и количеству действий. Если они превышаются, администрация незамедлительно отвечает штрафом или блокировкой.</p>

            <p>Бесплатные сервисы не в состоянии осуществить безрисковую накрутку по одной простой причине – несовершенство программного обеспечения и устаревшие сведения о поисковых алгоритмах Фейсбук. Отсюда вывод – минимизировать риск бана возможно, если досконально изучить алгоритмы и принципы работы фильтров Фейсбук. Второй вариант – поручить накрутку профессионалам.</p>

            <h2>Как заказать качественную услугу и не нарваться на мошенников</h2>

            <p>Накрутка друзей в Фейсбук – популярная услуга. Пользователи готовы за нее платить. Именно по этой причине и появилось столько мошенников, предлагающих накрутку по самым низким. Получив деньги, подобные сервисы не выполняют взятых на себя обязательств или накручивают откровенно фейковых ботов, подставляя аккаунт заказчика под штрафные санкции администрации соц. сети.</p>

            <p>Как найти нормальный сервис:</p>

            <ol>
                <li>Выбирайте известные на рынке SSM-услуг сервисы.</li>
                <li>Ознакомьтесь с отзывами клиентов, ранее заказывающих подобную услугу.</li>
                <li>Ищите сайты с детальным описанием услуги. Клиент должен знать, за что он будет платить деньги.</li>
                <li>Отдавайте предпочтение сервисам, работающим с гарантией.</li>
                <li>Обратите внимание на способы оплаты услуг. Предпочтение – компаниям, работающим с известными платежными системами. Финансовые операторы довольно щепетильны в плане партнерства, сотрудничают только с легально зарегистрированными компаниями.</li>
            </ol>

            <p>Перед тем, как заказать большой пакет услуг в незнакомом сервисе, протестируйте качество. Оформите минимальный заказ.</p>

            <h2>Подготовка страницы к накрутке друзей: пошаговая инструкция</h2>

            <p>Грамотное продвижение подразумевает определенную последовательность шагов. Перед накруткой всегда идет работа с контентом.</p>

            <p>Что необходимо сделать на этом этапе:</p>

            <ol>
                <li>Заполнить аккаунт. Сделать его не только привлекательным в глазах других пользователей, но и максимально запоминающимся.</li>
                <li>Добавить вручную 50-60 реальных друзей.</li>
                <li>Опубликовать 25-30 постов. Делать это постепенно, максимум, по 2-3 публикации в день. Разбить их по времени и обязательно поддерживать активность на странице в течение дня.</li>
            </ol>

            <p>Другими словами, страница должна зажить полноценной жизнью. Только после этого можно купить друзей.</p>

            <h2>Как происходит накрутка друзей</h2>

            <p>Процесс полностью автоматизирован. Подписчики добавляются с помощью специальных алгоритмов с заданной скоростью и интенсивностью, которую рекомендуется просчитать заранее, потому как для каждой страницы она своя. В крайнем случае, воспользоваться неким, усредненным вариантом.</p>

            <p>Что нужно, чтобы запустить накрутку:</p>

            <ul>
                <li>зарегистрироваться на сайте сервиса;</li>
                <li>пополнить баланс одним из предлагаемых сервисом способов;</li>
                <li>выбрать социальную сеть (в данном случае рассматриваем Фейсбук);</li>
                <li>на странице заказа, в специальной форме указать количество подписчиков, оставить ссылку на профиль;</li>
                <li>подтвердить заказ. Остальную работу сделает сервис.</li>
            </ul>

            <p>Накрутка друзей начнется через несколько минут после того, как с баланса будет списана стоимость заказа.</p>

            <h2>Цена вопроса</h2>

            <p>Который год Фейсбук держит пальму первенства по количеству активных бизнес-аккаунтов. По некоторым оценкам, каждый второй пользователь платформы заинтересован в продвижении своей страницы. Цель – в большинстве случаев, связана с получением прибыли.</p>

            <p>Диапазон цен на друзей в Фейсбук довольно широк, и многих пользователей интересует, почему так?</p>

            <p>Разницу в цене задают следующие факторы:</p>

            <ol>
                <li>Количество аккаунтов – накрутка низкокачественных ботов стоит в разы дешевле. Увеличение количества реальных подписчиков и друзей обойдется дороже.</li>
                <li>Страна регистрации пользователя – дороже всего стоят англоязычные подписчики.</li>
                <li>Скорость накрутки – чем больше подписчиков добавится на страницу за определенный промежуток времени, тем выше стоимость услуги.</li>
                <li>Таргетирование аудитории – этот пункт относится к заказчикам, заинтересованным только в целевой аудитории. Поиск подписчиков по заданным параметрам (возраст, пол, регион проживания, хобби и увлечения) будет стоить дороже.</li>
            </ol>

            <p>Помимо вышеперечисленных факторов на стоимость услуги влияет качество ее выполнения. Сервис, гарантирующий безрисковое увеличение друзей на странице, никогда не станет занижать стоимость работы. На создание специальных алгоритмов и уникальных схем накрутки требуется не только время, но и определенные финансовые затраты.</p>

            <p>Если вы видите предложение по заниженной цене, будьте уверены, перед вами мошенники.</p>

            <h2>Ищите сервис по накрутке друзей? Давайте знакомиться!</h2>

            <p>Наши клиенты – это пользователи социальных сетей из России и ближнего зарубежья. Мы помогаем накрутить друзей в Facebook просто, быстро, доступно по цене. В нашем сервисе можно выбрать страну проживания, язык и гендерную принадлежность подписчиков. Самостоятельно задать скорость процесса накрутки.</p>

            <p>Хотите узнать о нас больше? Своим постоянным и новым клиентам мы предлагаем:</p>

            <ul>
                <li>профессиональную и эффективную накрутку. Мы не используем низкокачественных ботов, наращиваем вашу целевую аудиторию за счет «живых» аккаунтов;</li>
                <li>разумные, доступные широкому кругу пользователей расценки;</li>
                <li>круглосуточный доступ к сервису в любой день недели. Заказать услугу и начать продвижение своего ресурса можно даже глубокой ночью, если появится такая необходимость;</li>
                <li>эффективную службу тех поддержки. Наши клиенты не висят часами на сайте в ожидании ответа на появившийся вопрос. Операторы компании оперативно реагируют на каждое обращение;</li>
                <li>регистрацию по упрощенной форме, с вводом минимально возможного количества персональных данных;</li>
                <li>накрутку без скачивания и установки на свой компьютер специального программного обеспечения;</li>
                <li>накрутку в автоматическом режиме, которая начнется буквально через несколько минут после оформления заказа;</li>
                <li>абсолютную конфиденциальность. Информация о вашем обращении к нам не будет использована нигде и никогда;</li>
                <li>возможность оформить заказ с любого устройства, при наличии устойчивого интернет-соединения;</li>
                <li>накрутку подписчиков на следующих платформах: Инстаграм, Фейсбук, Вконтакте, Одноклассники. Также нам доступна сеть Гугл+ и Твиттер.</li>
                <li>различные способы оплаты и пополнения личного кошелька на сервисе;</li>
                <li>различные бонусы за пополнение кошелька на сайте и гибкую систему скидок, созданную для крупных заказов.</li>
            </ul>

            <p>Функционал сервиса позволяет накручивать подписчиков одновременно на нескольких аккаунтах, зарегистрированных в разных социальных сетях.</p>
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


export default FacebookSubscribers;

