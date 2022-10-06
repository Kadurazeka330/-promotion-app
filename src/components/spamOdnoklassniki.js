import Order from "components/order/order";
import { useState } from "react";
import React from "react";

const SpamOdnoklassniki = () => {


    const [order, setOrder] = useState(false);
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [img, setImg] = useState();
    const [start, setStart] = useState();
    const [finish, setFinish] = useState();
    const [guarantee, setGuarantee] = useState();

    const [link, setLink] = useState('/SpamOdnoklassniki#1')


  
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

     const [subscribersName, setSubscribersName] = useState('Спам-рассылки - Одноклассники');
     const [subscribersPrice, setSubscribersPrice] = useState(11);
     const [img, setImg] = useState("./envelope-with-spam-icon-isolated-concept-virus-vector-25530204.jpg");
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
                        
                        <div className="imagelabel h_2 " >Spam - Спам-рассылки</div>
                        <div>
                        
                            <a itemprop="url"><img itemprop="image" className="img-inner"   src={img} title="Spam - Спам-рассылки" alt="Spam - Спам-рассылки"  onerror="this.onerror=null;this.src='https://smmlaba.com/image/cache/data/iconsnew/inst/12-200x200.jpg';"/> </a>
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
                        
                            <div className="space-name-product"><a href="#"><span>Spam - Спам-рассылки</span></a></div> 
                            
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
                            
                            <div className="imagelabel h_2 " >Spam - Спам-рассылки</div>
                            <div>
                            
                                <a itemprop="url"><img itemprop="image" className="img-inner"   src={img} title="Spam - Спам-рассылки" alt="Spam - Спам-рассылки"  onerror="this.onerror=null;this.src='https://smmlaba.com/image/cache/data/iconsnew/inst/12-200x200.jpg';"/> </a>
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
                        
                            <div className="space-name-product"><a href="#"><span>Spam - Спам-рассылки</span></a></div> 
                            
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
                            
                            <div className="imagelabel h_2 " >Spam - Спам-рассылки</div>
                            <div>
                            
                                <a itemprop="url"><img itemprop="image" className="img-inner"   src={img} title="Spam - Спам-рассылки" alt="Spam - Спам-рассылки"  onerror="this.onerror=null;this.src='https://smmlaba.com/image/cache/data/iconsnew/inst/12-200x200.jpg';"/> </a>
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
                        
                            <div className="space-name-product"><a href="#"><span>Spam - Спам-рассылки</span></a></div> 
                            
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
                            
                            <div className="imagelabel h_2 " >Spam - Спам-рассылки</div>
                            <div>
                            
                                <a itemprop="url"><img itemprop="image" className="img-inner"   src={img} title="Spam - Спам-рассылки" alt="Spam - Спам-рассылки"  onerror="this.onerror=null;this.src='https://smmlaba.com/image/cache/data/iconsnew/inst/12-200x200.jpg';"/> </a>
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
                        
                            <div className="space-name-product"><a href="#"><span>Spam - Спам-рассылки</span></a></div> 
                            
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
    


    return(
        <>
            <View/>
            {OrderInit}
        </>
    )

}


export default SpamOdnoklassniki;
