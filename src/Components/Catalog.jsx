import React from 'react'
import img1 from "../__images/img1.png"
import img2 from "../__images/img2.png"
import img3 from "../__images/img3.png"
import peoples from "../__images/peoples.png"
import alarm from "../__images/alarm.png"
import shopping_bag from "../__images/shopping_bag.png"
import down from "../__images/down.png"
import Footer from './Footer'
import { Link } from 'react-router-dom'


const Catalog = () => {
  return (
    <div className='Catalog'>
        
        <div className="turnir">
        <h2>Октябрьский турнир Warhammer 40000</h2>
        <p>
          У тебя есть команда и вы готовы принять <br/> участие в турнире Warhammer
          40000?
        </p>
      </div>
      <div className="games">
        <p><Link className='main_l' to={"/Главная"} >  Главная</Link>   <Link className='main_l' to={"/catalog"}>  /  Каталог</Link> </p>
        <h1>Дуэльные настольные игры</h1>
        <div className="games_content">
            <div className="first">
    
            </div>
            <div className="items">
                <div className="item">
                    <img src={img1}/>
                    <div className="info">
                        <h6><img src={peoples}/> 2-4</h6>
                        <h6><img src={alarm}/> 60-80</h6>
                        <h6>16+</h6>
                    </div>
                    <h2>Broken Realms: Horrek's Dreadlance</h2>
                    <h3>3657 ₽</h3>
                    <button className="first">В корзину <img src={shopping_bag} /></button>
                    <button className="second">Купить в 1 клик</button>
                </div>
                <div className="item">
                    <img src={img2}/>
                    <div className="info">
                        <h6><img src={peoples}/> 2-4</h6>
                        <h6><img src={alarm}/> 60-80</h6>
                        <h6>16+</h6>
                    </div>
                    <h2>Broken Realms: Horrek's Dreadlance</h2>
                    <h3>3657 ₽</h3>
                    <button className="first">В корзину <img src={shopping_bag} alt=""/></button>
                    <button className="second">Купить в 1 клик</button>
                </div>
                <div className="item">
                    <img src={img3}/>
                    <div className="info">
                        <h6><img src={peoples}/> 2-4</h6>
                        <h6><img src={alarm}/> 60-80</h6>
                        <h6>18+</h6>
                    </div>
                    <h2>Broken Realms: Horrek's Dreadlance</h2>
                    <h3>3657 ₽</h3>
                    <button className="first">В корзину <img src={shopping_bag} alt=""/></button>
                    <button className="second">Купить в 1 клик</button>
                </div>
                <div className="item">
                    <img src={img1}/>
                    <div className="info">
                        <h6><img src={peoples}/> 2-4</h6>
                        <h6><img src={alarm}/> 60-80</h6>
                        <h6>16+</h6>
                    </div>
                    <h2>Broken Realms: Horrek's Dreadlance</h2>
                    <h3>3657 ₽</h3>
                    <button className="first">В корзину <img src={shopping_bag} /></button>
                    <button className="second">Купить в 1 клик</button>
                </div>
                <div className="item">
                    <img src={img2}/>
                    <div className="info">
                        <h6><img src={peoples}/> 2-4</h6>
                        <h6><img src={alarm}/> 60-80</h6>
                        <h6>16+</h6>
                    </div>
                    <h2>Broken Realms: Horrek's Dreadlance</h2>
                    <h3>3657 ₽</h3>
                    <button className="first">В корзину <img src={shopping_bag} alt=""/></button>
                    <button className="second">Купить в 1 клик</button>
                </div>
                <div className="item">
                    <img src={img3}/>
                    <div className="info">
                        <h6><img src={peoples}/> 2-4</h6>
                        <h6><img src={alarm}/> 60-80</h6>
                        <h6>18+</h6>
                    </div>
                    <h2>Broken Realms: Horrek's Dreadlance</h2>
                    <h3>3657 ₽</h3>
                    <button className="first">В корзину <img src={shopping_bag} alt=""/></button>
                    <button className="second">Купить в 1 клик</button>
                </div>
                <div className="item">
                    <img src={img1}/>
                    <div className="info">
                        <h6><img src={peoples}/> 2-4</h6>
                        <h6><img src={alarm}/> 60-80</h6>
                        <h6>16+</h6>
                    </div>
                    <h2>Broken Realms: Horrek's Dreadlance</h2>
                    <h3>3657 ₽</h3>
                    <button className="first">В корзину <img src={shopping_bag} /></button>
                    <button className="second">Купить в 1 клик</button>
                </div>
                <div className="item">
                    <img src={img2}/>
                    <div className="info">
                        <h6><img src={peoples}/> 2-4</h6>
                        <h6><img src={alarm}/> 60-80</h6>
                        <h6>16+</h6>
                    </div>
                    <h2>Broken Realms: Horrek's Dreadlance</h2>
                    <h3>3657 ₽</h3>
                    <button className="first">В корзину <img src={shopping_bag} alt=""/></button>
                    <button className="second">Купить в 1 клик</button>
                </div>
                <div className="item">
                    <img src={img3}/>
                    <div className="info">
                        <h6><img src={peoples}/> 2-4</h6>
                        <h6><img src={alarm}/> 60-80</h6>
                        <h6>18+</h6>
                    </div>
                    <h2>Broken Realms: Horrek's Dreadlance</h2>
                    <h3>3657 ₽</h3>
                    <button className="first">В корзину <img src={shopping_bag} alt=""/></button>
                    <button className="second">Купить в 1 клик</button>
                </div>
                <div className="item">
                    <img src={img1}/>
                    <div className="info">
                        <h6><img src={peoples}/> 2-4</h6>
                        <h6><img src={alarm}/> 60-80</h6>
                        <h6>16+</h6>
                    </div>
                    <h2>Broken Realms: Horrek's Dreadlance</h2>
                    <h3>3657 ₽</h3>
                    <button className="first">В корзину <img src={shopping_bag} /></button>
                    <button className="second">Купить в 1 клик</button>
                </div>
                <div className="item">
                    <img src={img2}/>
                    <div className="info">
                        <h6><img src={peoples}/> 2-4</h6>
                        <h6><img src={alarm}/> 60-80</h6>
                        <h6>16+</h6>
                    </div>
                    <h2>Broken Realms: Horrek's Dreadlance</h2>
                    <h3>3657 ₽</h3>
                    <button className="first">В корзину <img src={shopping_bag} alt=""/></button>
                    <button className="second">Купить в 1 клик</button>
                </div>
                <div className="item">
                    <img src={img3}/>
                    <div className="info">
                        <h6><img src={peoples}/> 2-4</h6>
                        <h6><img src={alarm}/> 60-80</h6>
                        <h6>18+</h6>
                    </div>
                    <h2>Broken Realms: Horrek's Dreadlance</h2>
                    <h3>3657 ₽</h3>
                    <button className="first">В корзину <img src={shopping_bag} alt=""/></button>
                    <button className="second">Купить в 1 клик</button>
                </div>
                <div className="item">
                    <img src={img1}/>
                    <div className="info">
                        <h6><img src={peoples}/> 2-4</h6>
                        <h6><img src={alarm}/> 60-80</h6>
                        <h6>16+</h6>
                    </div>
                    <h2>Broken Realms: Horrek's Dreadlance</h2>
                    <h3>3657 ₽</h3>
                    <button className="first">В корзину <img src={shopping_bag} /></button>
                    <button className="second">Купить в 1 клик</button>
                </div>
                <div className="item">
                    <img src={img2}/>
                    <div className="info">
                        <h6><img src={peoples}/> 2-4</h6>
                        <h6><img src={alarm}/> 60-80</h6>
                        <h6>16+</h6>
                    </div>
                    <h2>Broken Realms: Horrek's Dreadlance</h2>
                    <h3>3657 ₽</h3>
                    <button className="first">В корзину <img src={shopping_bag} alt=""/></button>
                    <button className="second">Купить в 1 клик</button>
                </div>
                <div className="item">
                    <img src={img3}/>
                    <div className="info">
                        <h6><img src={peoples}/> 2-4</h6>
                        <h6><img src={alarm}/> 60-80</h6>
                        <h6>18+</h6>
                    </div>
                    <h2>Broken Realms: Horrek's Dreadlance</h2>
                    <h3>3657 ₽</h3>
                    <button className="first">В корзину <img src={shopping_bag} alt=""/></button>
                    <button className="second">Купить в 1 клик</button>
                </div>
                <div className="item">
                    <img src={img1}/>
                    <div className="info">
                        <h6><img src={peoples}/> 2-4</h6>
                        <h6><img src={alarm}/> 60-80</h6>
                        <h6>16+</h6>
                    </div>
                    <h2>Broken Realms: Horrek's Dreadlance</h2>
                    <h3>3657 ₽</h3>
                    <button className="first">В корзину <img src={shopping_bag} /></button>
                    <button className="second">Купить в 1 клик</button>
                </div>
                <div className="item">
                    <img src={img2}/>
                    <div className="info">
                        <h6><img src={peoples}/> 2-4</h6>
                        <h6><img src={alarm}/> 60-80</h6>
                        <h6>16+</h6>
                    </div>
                    <h2>Broken Realms: Horrek's Dreadlance</h2>
                    <h3>3657 ₽</h3>
                    <button className="first">В корзину <img src={shopping_bag} alt=""/></button>
                    <button className="second">Купить в 1 клик</button>
                </div>
                <div className="item">
                    <img src={img3}/>
                    <div className="info">
                        <h6><img src={peoples}/> 2-4</h6>
                        <h6><img src={alarm}/> 60-80</h6>
                        <h6>18+</h6>
                    </div>
                    <h2>Broken Realms: Horrek's Dreadlance</h2>
                    <h3>3657 ₽</h3>
                    <button className="first">В корзину <img src={shopping_bag} alt=""/></button>
                    <button className="second">Купить в 1 клик</button>
                </div>
                <div className="item">
                    <img src={img1}/>
                    <div className="info">
                        <h6><img src={peoples}/> 2-4</h6>
                        <h6><img src={alarm}/> 60-80</h6>
                        <h6>16+</h6>
                    </div>
                    <h2>Broken Realms: Horrek's Dreadlance</h2>
                    <h3>3657 ₽</h3>
                    <button className="first">В корзину <img src={shopping_bag} /></button>
                    <button className="second">Купить в 1 клик</button>
                </div>
                <div className="item">
                    <img src={img2}/>
                    <div className="info">
                        <h6><img src={peoples}/> 2-4</h6>
                        <h6><img src={alarm}/> 60-80</h6>
                        <h6>16+</h6>
                    </div>
                    <h2>Broken Realms: Horrek's Dreadlance</h2>
                    <h3>3657 ₽</h3>
                    <button className="first">В корзину <img src={shopping_bag} alt=""/></button>
                    <button className="second">Купить в 1 клик</button>
                </div>
                <div className="item">
                    <img src={img3}/>
                    <div className="info">
                        <h6><img src={peoples}/> 2-4</h6>
                        <h6><img src={alarm}/> 60-80</h6>
                        <h6>18+</h6>
                    </div>
                    <h2>Broken Realms: Horrek's Dreadlance</h2>
                    <h3>3657 ₽</h3>
                    <button className="first">В корзину <img src={shopping_bag} alt=""/></button>
                    <button className="second">Купить в 1 клик</button>
                </div>
                <div className="item">
                    <img src={img1}/>
                    <div className="info">
                        <h6><img src={peoples}/> 2-4</h6>
                        <h6><img src={alarm}/> 60-80</h6>
                        <h6>16+</h6>
                    </div>
                    <h2>Broken Realms: Horrek's Dreadlance</h2>
                    <h3>3657 ₽</h3>
                    <button className="first">В корзину <img src={shopping_bag} /></button>
                    <button className="second">Купить в 1 клик</button>
                </div>
                <div className="item">
                    <img src={img2}/>
                    <div className="info">
                        <h6><img src={peoples}/> 2-4</h6>
                        <h6><img src={alarm}/> 60-80</h6>
                        <h6>16+</h6>
                    </div>
                    <h2>Broken Realms: Horrek's Dreadlance</h2>
                    <h3>3657 ₽</h3>
                    <button className="first">В корзину <img src={shopping_bag} alt=""/></button>
                    <button className="second">Купить в 1 клик</button>
                </div>
                <div className="item">
                    <img src={img3}/>
                    <div className="info">
                        <h6><img src={peoples}/> 2-4</h6>
                        <h6><img src={alarm}/> 60-80</h6>
                        <h6>18+</h6>
                    </div>
                    <h2>Broken Realms: Horrek's Dreadlance</h2>
                    <h3>3657 ₽</h3>
                    <button className="first">В корзину <img src={shopping_bag} alt=""/></button>
                    <button className="second">Купить в 1 клик</button>
                </div>

            </div>

        </div>
        <div class="questions">
            <div class="question">
                <h2>Как выбрать настольную игру? </h2>
                <img src={down} alt=""/>
            </div>
            <div class="question">
                <h2>Какие игры можете посоветовать новичку в настолках? </h2>
                <img src={down} alt=""/>
            </div>
            <div class="question">
                <h2>Какие игры сейчас самые популярные?</h2>
                <img src={down} alt=""/>
            </div>
            <div class="question">
                <h2>Можно ли ознакомиться с игрой вживую?</h2>
                <img src={down} alt=""/>
            </div>
            <div class="question">
                <h2>Есть ли игры со скидками?</h2>
                <img src={down} alt=""/>
            </div>
            <div class="question">
                <h2>Как подобрать игру для ребенка?</h2>
                <img src={down} alt=""/>
            </div>
        </div>

    </div>
    <Footer/>
    </div>
  )
}

export default Catalog