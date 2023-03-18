import React from 'react'
import logo from "../__images/logo.png"
import mir from "../__images/mir.png"
import visa from "../__images/visa.png"

const Footer = () => {
  return (
    <div class="footer">
        <div class="footer_content">
            <ul>
                <li><a class="logo" href=""><img src={logo} /></a></li>
                <li><a href="">г. Москва ст.м. Таганская
                    Малый Дровяной переулок 6</a></li>
            </ul>
            <ul>
                <li><a href="">Каталог</a></li>
                <li><a className='logo_a' href="">Warhammer 40000
                    Настольные игры
                    Magic: the Gathering
                    Аксессуары для игр
                    Краски 
                    Аксессуары для 
                    моделизма</a></li>
            </ul>
            <ul><li><a href="">
                Правила клуба <br/>
                Мероприятия <br/>
                О нас <br/>
                Контакты <br/>
                Блог
                </a></li></ul>
            <ul><li><a href="">Оплата и достака <br/>
                Гарантия и возврат</a></li></ul>
            <ul></ul>
        </div>
        <div class="footer_foot">
            <p>© 2021 MagicGoldFish.ru <br/>
                Политика конфиденциальности</p>
            <div>
                <img src={mir} alt=""/>
                <img src={visa} alt=""/>
            </div>
            <p>Содержимое не является публичной офертой <br/>
                Пользовательское соглашение</p>
        </div>
    </div>
  )
}

export default Footer;