import Order from "components/order/order";
import { useState } from "react";
import React from "react";

const FacebookLike = () => {


    const [order, setOrder] = useState(false);
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [img, setImg] = useState();
    const [start, setStart] = useState();
    const [finish, setFinish] = useState();
    const [guarantee, setGuarantee] = useState();
    
    const [link, setLink] = useState('/FacebookLike#1')

  
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

     const [subscribersName, setSubscribersName] = useState('Facebook - Лайки');
     const [subscribersPrice, setSubscribersPrice] = useState(11);
     const [img, setImg] = useState("./facebook_likes1.png");
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
                        
                        <div className="imagelabel h_2 " >Facebook - Лайки</div>
                        <div>
                        
                            <a itemprop="url"><img itemprop="image" className="img-inner"   src={img} title="Facebook - Лайки" alt="Facebook - Лайки"  onerror="this.onerror=null;this.src='https://smmlaba.com/image/cache/data/iconsnew/inst/12-200x200.jpg';"/> </a>
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
                        
                            <div className="space-name-product"><a href="#"><span>Facebook - Лайки</span></a></div> 
                            
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
                            
                            <div className="imagelabel h_2 " >Facebook - Лайки</div>
                            <div>
                            
                                <a itemprop="url"><img itemprop="image" className="img-inner"   src={img} title="Facebook - Лайки" alt="Facebook - Лайки"  onerror="this.onerror=null;this.src='https://smmlaba.com/image/cache/data/iconsnew/inst/12-200x200.jpg';"/> </a>
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
                        
                            <div className="space-name-product"><a href="#"><span>Facebook - Лайки</span></a></div> 
                            
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
                            
                            <div className="imagelabel h_2 " >Facebook - Лайки</div>
                            <div>
                            
                                <a itemprop="url"><img itemprop="image" className="img-inner"   src={img} title="Facebook - Лайки" alt="Facebook - Лайки"  onerror="this.onerror=null;this.src='https://smmlaba.com/image/cache/data/iconsnew/inst/12-200x200.jpg';"/> </a>
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
                        
                            <div className="space-name-product"><a href="#"><span>Facebook - Лайки</span></a></div> 
                            
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
                            
                            <div className="imagelabel h_2 " >Facebook - Лайки</div>
                            <div>
                            
                                <a itemprop="url"><img itemprop="image" className="img-inner"   src={img} title="Facebook - Лайки" alt="Facebook - Лайки"  onerror="this.onerror=null;this.src='https://smmlaba.com/image/cache/data/iconsnew/inst/12-200x200.jpg';"/> </a>
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
                        
                            <div className="space-name-product"><a href="#"><span>Facebook - Лайки</span></a></div> 
                            
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

                <h1>Купить лайки в Фейсбук</h1>

                <p>Сегодня Facebook уверенно занимает лидирующие позиции среди социальных сетей в России. Ежемесячно свою страничку заходят проверить более 2,7 миллиона человек со всего мира, из которых около 40 миллионов приходится на россиян. Поэтому данная платформа как нельзя лучше подходит для продвижения своего бизнеса.</p>

                <p>Своя страничка в Facebook значительно повысит продажи, привлечет новых покупателей и повысит общую узнаваемость бренда. Но для того, чтобы полноценно раскрутиться, потребуется время. В этом случае может помочь платная раскрутка. На нашем сайте есть возможность купить лайки на Фейсбук по выгодным ценам.</p>

                <h2>Зачем нужно покупать лайки в Фейсбук?</h2>

                <p>При покупке услуги по накручиванию лайков, Вам больше не потребуется самостоятельно заниматься этим вопросом. Конечно, можно попросить друзей и знакомых поставить «like» под постом или найти людей в специальных сообществах, которые готовы оставить лайк за взаимный пиар. Но это не всегда приносит должный результат и отнимает слишком много времени.</p>

                <p>Лучшим выходом из сложившейся ситуации будет решение купить лайки в Фейсбук. Накрутка позволит увеличить доход за счет роста активности людей на Вашей странице. Когда человек видит, проявленный к товару или услуге интерес других людей, то и сам неосознанно становится заинтересованным ими. А чем больше внимания к Вашим постам, тем популярнее Ваша страница в целом.</p>

                <p>При заказе услуги по накрутке на нашем сайте Вы получите лайки, оставленные обычными людьми. Такое раскручивание не несет никаких рисков для Вашего бизнеса. Быстрые с гарантией лайки, купленные у нас, позволят вывести популярность Вашей страницы на новый уровень уже сегодня.</p>
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


export default FacebookLike;

