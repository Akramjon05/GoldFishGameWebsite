import React from 'react';
import Logo from "../__images/header__image.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
  return (
    <div className='header'>
      <div className="header__start1">

        <div className="header__start">
            <img src={Logo} />
            <div className="header__input">
            <input type="text"  placeholder='Найти игру'  />
            <FontAwesomeIcon className='header_se__icon' icon={faSearch}/>
            </div>
        </div>
        <div className="header__contact">
          <div className="contact__icons1">
               <FontAwesomeIcon className='contact_ph__icon' icon={faPhone}/>
               <h3>+7 (495) 911-10-11</h3>
          </div>
            <div className="contact__icons">
            <FontAwesomeIcon className='contact_user__icon' icon={faUser}/>
            <FontAwesomeIcon className='contact_shop__icon' icon={faShoppingCart}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header;