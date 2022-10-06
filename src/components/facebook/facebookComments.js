import Order from "components/order/order";
import { useState } from "react";
import React from "react";

const FacebookComments = () => {


    const [order, setOrder] = useState(false);
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [img, setImg] = useState();
    const [start, setStart] = useState();
    const [finish, setFinish] = useState();
    const [guarantee, setGuarantee] = useState();

    const [link, setLink] = useState('/FacebookComments#1')
    


  
    const OrderInit = order? <Order name = {name} price = {price} img = {img} start = {start} finish = {finish} guarantee = {guarantee}/> : null;


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

     const [subscribersName, setSubscribersName] = useState('Facebook - Комментарии');
     const [subscribersPrice, setSubscribersPrice] = useState(11);
     const [img, setImg] = useState("./facebook_comments1.png");
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
                        
                        <div className="imagelabel h_2 " >Facebook - Комментарии</div>
                        <div>
                        
                            <a itemprop="url"><img itemprop="image" className="img-inner"   src={img} title="Facebook - Комментарии" alt="Facebook - Комментарии"  onerror="this.onerror=null;this.src='https://smmlaba.com/image/cache/data/iconsnew/inst/12-200x200.jpg';"/> </a>
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
                        
                            <div className="space-name-product"><a href="#"><span>Facebook - Комментарии</span></a></div> 
                            
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
                            
                            <div className="imagelabel h_2 " >Facebook - Комментарии</div>
                            <div>
                            
                                <a itemprop="url"><img itemprop="image" className="img-inner"   src={img} title="Facebook - Комментарии" alt="Facebook - Комментарии"  onerror="this.onerror=null;this.src='https://smmlaba.com/image/cache/data/iconsnew/inst/12-200x200.jpg';"/> </a>
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
                        
                            <div className="space-name-product"><a href="#"><span>Facebook - Комментарии</span></a></div> 
                            
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
                            
                            <div className="imagelabel h_2 " >Facebook - Комментарии</div>
                            <div>
                            
                                <a itemprop="url"><img itemprop="image" className="img-inner"   src={img} title="Facebook - Комментарии" alt="Facebook - Комментарии"  onerror="this.onerror=null;this.src='https://smmlaba.com/image/cache/data/iconsnew/inst/12-200x200.jpg';"/> </a>
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
                        
                            <div className="space-name-product"><a href="#"><span>Facebook - Комментарии</span></a></div> 
                            
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
                            
                            <div className="imagelabel h_2 " >Facebook - Комментарии</div>
                            <div>
                            
                                <a itemprop="url"><img itemprop="image" className="img-inner"   src={img} title="Facebook - Комментарии" alt="Facebook - Комментарии"  onerror="this.onerror=null;this.src='https://smmlaba.com/image/cache/data/iconsnew/inst/12-200x200.jpg';"/> </a>
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
                        
                            <div className="space-name-product"><a href="#"><span>Facebook - Комментарии</span></a></div> 
                            
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

                <h1>Накрутка комментариев в Фейсбук (Facebook)</h1>

                <p>Являясь самой популярной международной социальной сетью, Facebook представляет собой идеальное пространство для продвижения товаров и услуг. Возможность купить и накрутить комментарии в FaceBook, которую предлагает вам наша компания, значительно ускорит данный процесс за счет увеличения пользовательской активности.</p>

                <h2>Быстрая накрутка комментариев FaceBook</h2>

                <p>Накрутка комментариев может происходить двумя способами:</p>

                <ol>
                    <li>Вы предлагаете свое собственное задание, согласно которому пользователи будут составлять тексты/ответы, размещать их на вашей странице и ставить нужную вам оценку.</li>
                    <li>Также ответы могут содержать предложенные вами тексты, которые при оформлении заявки на покупку отзывов и комментариев прилагаются к заданию.</li>
                </ol>

                <p>Обратите внимание: чем более развернуто представлены ваши требования к содержанию комментариев в накрутке, тем более убедительной и естественной будет реакция на них в FaceBook со стороны исполнителей.</p>

                <p>Также мы предлагаем возможность купить репосты в данной социальной сети. Это самый простой и быстрый способ распространить интересующие вас записи, фото- и видеоматериалы. Публикация одной и той же записи на страницах многочисленных пользователей неизменно привлекает внимание к ее содержанию.</p>

                <p>В течение одних суток реально получить до 800 репостов. Данное количество может уменьшаться или увеличиваться в зависимости от условий и сложности задания.</p>

                <p><strong>Как добиться максимальной отдачи от покупки отзывов?</strong></p>

                <p>Людей, которые комментируют записи и пишут отзывы на заказ, называют офферами. Как правило, хорошие исполнители подходят к своей работе ответственно, вникая в суть дела. Чтобы отзывы на Фейсбук пошли на пользу вашему бизнесу, необходимо знать, о чем следует писать и как грамотно преподнести информацию.</p>

                <p>Для заказчика услуги накрутки очень важно правильно определиться с фокус-группой. Потребители подсознательно больше доверяют людям, с которыми у них есть что-то общее. Чтобы отзывы и комментарии выглядели естественно, укажите возрастной диапазон предполагаемых комментаторов, страну проживания, половую принадлежность.</p>

                <p>Заявки на написание отзывов и накрутку комментариев FaceBook у нас принимаются круглосуточно.</p>
            </div>
        )
    }


    return(
        <>
            <View/>
            {OrderInit}
            <Info/>
        </>
    )

}


export default FacebookComments;


