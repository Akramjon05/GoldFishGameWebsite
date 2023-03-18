import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import contact_local from '../__images/contact_location.png'
const Contact = () => {
  return (
    <div className='contact_main'>
        <div className="main_contacts">
            <div className="social_contact">
                <div className="contact_child">
                    <FontAwesomeIcon className='fa_phone' icon={faPhone}/>
                    <h5>Телефон:<span>7 (495) 911-10-11</span></h5>
                </div>
                <br />
                <div className="contact_child">
                    <FontAwesomeIcon className='fa_phone' icon={faEnvelope}/>
                    <h5>E-mail:<span>msk@magicgoldfish.ru</span></h5>
                </div>
                <br />
                <div className="contact_child">
                    <FontAwesomeIcon className='fa_phone' icon={faLocation}/>
                    <h5>Адрес:<span> Москва ст.м. Таганская (кольцевая)<br/>Малый Дровяной переулок 6</span></h5>
                </div>
                <br />
                <div className="contact_child">
                    <FontAwesomeIcon className='fa_phone' icon={faClock}/>
                    <h5>Режим работы клуба:<span>11:00-23:00 (ежедневно)</span></h5>
                </div>
                <div className="any_quesion">
                    <h3>Остались вопросы?</h3>
                    <div className="inputs">
                        <h6>Ваше имя</h6>
                        <input className='any_input1' type="text" placeholder='Имя'/>
                        <h6>Ваш телефон</h6>
                        <input className='any_input2' type="text" placeholder='+7 ___ _______'/>
                        <h6>Ваш комментарий</h6>
                        <input className='any_comment' type="text" placeholder='Комментарий'/>
                        <br />
                        <button>Заказать звонок</button>
                        <p>Нажимая на кнопку "Заказать звонок",<a href="#"> я даю согласие на обработку персональных данных.</a></p>
                    </div>
                </div>
            </div>
        </div>
        <div className="location">
            <img src={contact_local} />
        </div>
    </div>
  )
}

export default Contact;