import Order from "components/order/order";
import { useState } from "react";
import React from "react";

const Like = () => {


    const [order, setOrder] = useState(false);
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [img, setImg] = useState();
    const [start, setStart] = useState();
    const [finish, setFinish] = useState();
    const [guarantee, setGuarantee] = useState();

    const [link, setLink] = useState('/InstagramLike#1')


  
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

     const [subscribersName, setSubscribersName] = useState('Лайки');
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
                            
                            <div className="imagelabel h_2 " >Лайки</div>
                            <div>
                            
                                <a itemprop="url"><img itemprop="image" className="img-inner"   src={img} title="Instagram - Лайки" alt="Instagram - Лайки"  onerror="this.onerror=null;this.src='https://smmlaba.com/image/cache/data/iconsnew/inst/12-200x200.jpg';"/> </a>
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
                            
                                <div className="space-name-product"><a href="#"><span>Instagram - Лайки</span></a></div> 
                                
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
                                
                                <div className="imagelabel h_2 " >Лайки</div>
                                <div>
                                
                                    <a itemprop="url"><img itemprop="image" className="img-inner"   src={img} title="Instagram - Лайки" alt="Instagram - Лайки"  onerror="this.onerror=null;this.src='https://smmlaba.com/image/cache/data/iconsnew/inst/12-200x200.jpg';"/> </a>
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
                            
                                <div className="space-name-product"><a href="#"><span>Instagram - Лайки</span></a></div> 
                                
                                <div className="line_title product-recoment-line">
                                <div className="sqr line_title_first"></div>
                                <div className="sqr line_title_second"></div>
                            </div>
                    </div>   
                    
                    <br/>
    
                        <div>
                    
                    <button className="button-product"> <a href={link}  onClick={() =>upDataOrder(subscribersName, subscribersPrice2, img, start2, finish2, guarantee2)}  >  Заказать </a></button>
                    </div>
    
    
                             </div>  

                             <div  className="product">
                        
                                    
                            <div className="offer-product"  id="for-product-image">
                                
                                <div className="imagelabel h_2 " >Лайки</div>
                                <div>
                                
                                    <a itemprop="url"><img itemprop="image" className="img-inner"   src={img} title="Instagram - Лайки" alt="Instagram - Лайки"  onerror="this.onerror=null;this.src='https://smmlaba.com/image/cache/data/iconsnew/inst/12-200x200.jpg';"/> </a>
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
                            
                                <div className="space-name-product"><a href="#"><span>Instagram - Лайки</span></a></div> 
                                
                                <div className="line_title product-recoment-line">
                                <div className="sqr line_title_first"></div>
                                <div className="sqr line_title_second"></div>
                            </div>
                    </div>   
                    
                    <br/>
    
                        <div>
                    
                    <button className="button-product"> <a href={link}  onClick={() =>upDataOrder(subscribersName, subscribersPrice3, img, start3, finish3, guarantee3)}  >  Заказать </a></button>
                    </div>
    
    
                             </div>  

                             <div  className="product">
                        
                                    
                            <div className="offer-product"  id="for-product-image">
                                
                                <div className="imagelabel h_2 " >Лайки</div>
                                <div>
                                
                                    <a itemprop="url"><img itemprop="image" className="img-inner"   src={img} title="Instagram - Лайки" alt="Instagram - Лайки"  onerror="this.onerror=null;this.src='https://smmlaba.com/image/cache/data/iconsnew/inst/12-200x200.jpg';"/> </a>
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
                            
                                <div className="space-name-product"><a href="#"><span>Instagram - Лайки</span></a></div> 
                                
                                <div className="line_title product-recoment-line">
                                <div className="sqr line_title_first"></div>
                                <div className="sqr line_title_second"></div>
                            </div>
                    </div>   
                    
                    <br/>
    
                        <div>
                    
                    <button className="button-product"> <a href={link}  onClick={() =>upDataOrder(subscribersName, subscribersPrice4, img, start4, finish4, guarantee4)}  >  Заказать </a></button>
                    </div>
    
    
                             </div>  
                 </div>
            
            </>
        )

        }

        const Info = () => {
            return(
                <div class="category-info">

                <h1>Накрутка лайков в Инстаграме</h1>

        <p>Узнать новости? Купить вещи? Найти друзей? В инстаграм! Сегодня это соцсеть стала основной платформой для общения, шопинга и работы. Но как пробиться, чтобы людей заинтересовал именно ваш профиль? Нужно набирать подписчиков, лайки и комментарии! С нашим сервисом вы можете их получить на видео и фото максимально легко и недорого! Вы будете все время оставаться в ТОПе среди пользователей социальной сети без малейших усилий!</p>

        <h2>Кому нужна накрутка лайков?</h2>

        <p>Таргетологи рекомендуют обратить внимание на накрутку владельцам бизнеса, блоггерам, инфльюенсерам и владельцам личных страниц. Накрутить лайки вы можете без входа, просто добавив ссылку на свой профиль!</p>

        <p>Накрутка позволяет привлечь больше внимания к товарам на странице. Фотографии с предложениями магазина с большим количеством сердечек вызывают доверие у пользователей. Люди привыкли мыслить стадно. Им кажется, что если тысяче человек понравилось что-то в интернете, то и эта вещь особенная и интересная. Это подогревает интерес к ней.</p>

        <p>Накрутить лайки в Инстаграме на пост стоит, если вы:</p>

        <ul>
            <li>ведете блог;</li>
            <li>продаете товары;</li>
            <li>развиваете свой бренд;</li>
            <li>предлагаете услуги;</li>
            <li>занимаетесь инфобизнесом;</li>
            <li>работаете моделью.</li>
        </ul>

        <p>Это верный способ быстро поднять число отметок под публикацией и завоевать доверие аудитории. С нашим сервисом вы всегда можете быть уверены в том, что ваш пост увидят люди.</p>

        <h2>Что дают лайки в Инстаграм</h2>

        <p>Накрутка лайков в Инстаграм позволяет вам привлечь внимание к своему профилю. Большое количество лайков сигнализирует другим пользователям о том, что ваши услуги и товары интересны. Последнее время люди ставят сердечки все реже, а потому их наличие сигнализирует о реальной заинтересованности в посте. Если на ваших публикациях много лайков, мы можете быть уверены, что пользователи не боятся стать вашим клиентом или подписчиком.</p>

        <p>Последние обновления социальной сети ввели новое правило ранжирования ленты. Теперь пользователям сначала показываются те фотографии, которые собрали больше всего реакций. Все очень просто: если ваши фото лайкает мало человек – его не покажут другим, а если на нем много сердец и комментариев, – оно облетит интернет.</p>

        <p>Благодаря добавлению большего количества сердечек в инсте вы сможете обеспечить большую посещаемость страниц в социальных сетях, улучшить охват, усилить приток подписчиков, лайков, комментариев. Наши интсрументы позволяют вам оставаться в ТОП-е пользователей.</p>

        <h2>Безопасна ли накрутка лайков?</h2>

        <p>Накрутка лайков в Инстаграме абсолютно безопасна, если ей пользоваться с умом. Мы не передаем ваши данные: будьте спокойны о своей конфиденциальности! Ваш аккаунт не будет взломан или похищен!</p>

        <p>Не увлекайтесь накруткой, если у вас немного подписчиков в профиле. Очень важно сохранять баланс: количество сердец не должно превышать 30% от числа подписчиков. Если же у вас 1 тысяча подписчиков и 900 лайков – это вызовет вопросы у пользователей. Такое несоответствие может вызвать недоверие у вашей аудитории, а также у самой системы instagram. За чрезмерную подозрительную активность социальная сеть может ограничить вам действия в ней или даже заблокировать аккаунт. Однако если вы действуете аккуратно и не накручиваете сразу миллионы сердечек, вам нечего боятся.</p>

        <p>Вы получаете:</p>

        <ul>
            <li>быструю скорость накрутки;</li>
            <li>качественные лайки;</li>
            <li>удобный интерфейс сайта;</li>
            <li>бонусную систему;</li>
            <li>подробную статистику.</li>
        </ul>

        <p>С нами вы можете не переживать о безопасности своих данных и доступе к странице. Накрутка – это быстро, безопасно и легко!</p>

        <h2>Сколько стоит накрутить лайки в Инстаграме?</h2>

        <p>Накрутка лайков в Инстаграм доступная услуга. Вы можете увеличить количество сердечек даже бесплатно, оставляя взаимные «нравится» другим пользователям или воспользоваться улсугой за деньги, открыв дополнительные опции. Выбирать только вам: мы гарантируем качественную услугу в любом тарифном плане!</p>

        <p>Стоимость накрутки сердечек зависит от геолокации подписчиков, которые будут ставить вам сердечки. Если вы хотите получать их только от пользователей из России, выберите нужную категорию. Целевые Лайки стоит немного дороже. Цены на накрутку на нашем сайте минимальны. Вы можете получить сердечки без заданий и без регистрации: экономьте свое время и получайте желанные лайки!</p>

        <p>Вы можете быстро купить любое количество лайков на ваши посты в социальных сетхя: будь то 50 лайков или 10 000. Мы добавили подробную инструкцию к каждому выбранному вами тарифу. Вы сами решает от людей из какого региона вам получать отметки «нравится». Не хотите самостоятельно вводить все данные и тратить время? У нас есть автоматическая функция накрутки! Несмотря на то, что эта функция открывается платно, она все равно дешевая. Вы получаете лайки от реальных пользователей без риска попасть в серый бан. Накручивать можно и без ссылок, просто войдя в свой профиль через систему.</p>

        <p>Современное провдижение в Инстаграм невозможно представить без накрутки определенного количества лайков. Вы можете легко повысить выдачу своего профиля в поиске по хештегам и геолокации. С SMMLaba оставаться популярным может каждый! Накрутить лайки в Инстаграме – легко и быстро! Убедитесь в этом сами!</p>

        <h2>Накрутка лайков в Инстаграме без регистрации</h2>

        <p>Использование сервиса SMMLaba на сегодня востребованное. Благодаря тому, что происходит накрутка лайков в Инстаграме без регистрации, можно быстро получить результат. Необходимо выбрать подходящее предложение на сайте. После этого сделать заказ на него и оплатить удобным способом, описанном после подачи заявки.</p>

        <h2>Накрутить лайки без заданий: удобно и недорого</h2>

        <p>Не нужно выполнять задания, как это требуют бесплатные аналоги. Такие действия забирают свободное время, не результативны. При использовании предложения, выбранного на сервисе, можно оценить такие плюсы:</p> <ul> <li style={{"font-weight": "400" }}>результативность будет проявляться быстро;</li> <li style={{"font-weight": "400" }}>публикации начинают набирать число просмотров, лайков, комментариев;</li> <li style={{"font-weight": "400"}}>накрутка лайков в Инстаграме без заданий удобная в применении, не требует дополнительных действий.</li> </ul> <p></p> <p>Использование сервиса SMMLaba удобное, результат – быстрый.</p>
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

export default Like;
