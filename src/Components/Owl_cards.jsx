import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const Owl_cards = ( props ) => {
  return (
    <div className='card_b'>
        <div className="card__bc">
            <div className="bc_dis">
                <p>{props.dis}</p>
            </div>
        </div>
        <div className="b_icons">
          <font>{props.icon1}</font>
          <p className='p_right'>{props.b_icon1}</p>
          <font>{props.icon2}</font>
          <p className='p_right'>{props.b_icon2}</p>
          <p className='p_left'>{props.b_icon3}</p> 
        </div>
        <div className="b_name">
          <h4>{props.name}</h4>
        </div>
        <div className="b_price">
          <h5>4350 ₽</h5>
          <h4>3657 ₽</h4>
        </div>
        <div className="b_button">
          <button className='b_btn'>В корзину<FontAwesomeIcon icon={faShoppingCart} /></button>
          <br /><br />  
          <button className='b_btn2'>Купить в 1 клик</button>
        </div>
    </div>
  )
}

export default Owl_cards;