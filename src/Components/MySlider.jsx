import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Data from '../Api';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const options = {
  loop: true,
  margin: 10,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
};

const MySlider = () => {
  return (
    <OwlCarousel className="owl-theme" {...options}>
{Data.map(({ image, name, price, user_icon, user, time_icon, time, age }, index) => (
  <>
  
  <div className="card_a" key={index}>
      <div className="card_img">

      </div>
       <div className="card_icon">
        <h5>{user_icon}    {user}</h5>
        <h5>{time_icon}   {time}</h5>
        <h5>{age}+</h5>
      </div>

    <div className="card_name">
      <h3>{name}</h3>
    </div>
    <div className="card_price">
      <h6>{price}</h6>
    </div>
    <button className="btn_icon">В корзину <FontAwesomeIcon icon={faShoppingCart} /></button><br /><br />
    <button className="btn_icon2">Купить в 1 клик</button>
  </div>
  </>
))}
     </OwlCarousel>
  );
};

export default MySlider;
