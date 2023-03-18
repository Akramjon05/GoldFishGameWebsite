import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import ins from '../__images/navbar_in__icon.png';
import vk from '../__images/navbar_vk__icon.png';
import fb from '../__images/navbar_fb__icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const CustomNavbar = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)

  return (
    <div className='main__navbar'>
      <Navbar className='main__navbar2' variant="light">
        <div className='navbar'>
       <div className="navbar__start">
       <ul>
       <button className='navbar__btn' onClick={handleShow}><FontAwesomeIcon icon={faBars}/></button>
             <li><Link to={"/Catalog"}>Каталог</Link></li>
             <li><Link href="#">Wharhammer</Link></li>
             <li><Link href="#">Magic:the Cathering</Link></li>
             <li><Link href="#">Мероприятия</Link></li>
             <li><Link href="#">О центре</Link></li>
             <li><Link href="#">Контакты</Link></li>
             <div className="navbar__social">
             <a href="#"><img src={ins} /></a>
             <a href="#"><img src={vk} /></a>
             <a href="#"><img src={fb} /></a> 
             </div>
         </ul> 
      </div>
     </div>
      </Navbar>
      <div className={`offcanvas offcanvas-top${show ? ' show ' : ''}`}  id="offcanvas">
        <div className="offcanvas-header">
          <div className="nav__start">
          <div className="nav__all">  
          <Button variant="outline-secondary" className="btn-close text-reset" onClick={handleClose}></Button>
          <h3>Все категории</h3>
          </div>
          
          <div className="nav__link">
            <ul>
              <li><a href="#">Настольные игры <FontAwesomeIcon className='link__icon1' icon={faChevronRight}/> </a></li>
              <li><a href="#">Warhammer 40000 <FontAwesomeIcon  className='link__icon2'  icon={faChevronRight}/></a></li>
              <li><a href="#">Magic: the Gathering <FontAwesomeIcon  className='link__icon3'  icon={faChevronRight}/></a></li>
              <li><a href="#">Аксессуары для игр <FontAwesomeIcon  className='link__icon4'  icon={faChevronRight}/></a></li>
              <li><a href="#">Краски <FontAwesomeIcon  className='link__icon5'  icon={faChevronRight}/></a></li>
              <li><a href="#">Товары для детей <FontAwesomeIcon  className='link__icon6'  icon={faChevronRight}/></a></li>
              <li><a href="#">Аксессуары для моделизма <FontAwesomeIcon icon={faChevronRight}/></a></li>
            </ul>
          </div>
          </div>
          <div className="nav__right">
              <div className="right__start">
                <h2>Warhammer 40000</h2>
              </div>
              <div className="right__content">
                <div className="content__link">
                <a href="#"><h5>Альтернативные миниатюры (69)</h5></a>
                <a href="#"><h5>Warhammer 40k (400) </h5></a>
                <a href="#"><h5> Age of Sigmar (263)</h5></a>
                <a href="#"><h5> Warcry (49)</h5> </a> 
                </div>
                <div className="content__link">
                <a href="#"><h5>Nercomunda (21)</h5></a>
                <a href="#"><h5> Lord of the Rings(16)</h5> </a>
                <a href="#"><h5> Blood Bowl (28)</h5></a>
                <a href="#"><h5> Titanicus (4)</h5></a>
                </div>
                <div className="content__link">
                <a href="#"><h5>Warcry (49)</h5></a>
                <a href="#"><h5>Warhammer: Underworlds (22)</h5></a>
                <a href="#"><h5>Killtem (4) (263)</h5></a>
                </div>
                {/* SHU PAGE NI YANA BIR BOR KORISH KERE SABAB SHU WARHAMMER 4000 LARDAN BIROR TASINI BOSGANDA 
                
                NAVRIGHT DEGILAR OZGARISHI KERE EPLASA BOLADI FAQAT BUNYOD AKANI YORDAMI KERE BOLADI.*/}
              </div>
          </div>
        </div>
  
        <div className="offcanvas-body">
          <Nav className="flex-column">
          </Nav>
        </div>
      </div>
    </div>
  )
}

export default CustomNavbar;

