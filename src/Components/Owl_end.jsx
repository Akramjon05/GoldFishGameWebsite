import React from 'react';
import Owl_cards from './Owl_cards';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

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

const Owl_end = () => {
  return (
    <>
    <div className="end_h3">
    <h3>Специальные предложения</h3>
    </div>
    <OwlCarousel className="owl-theme2" {...options}>
    <div className='owl_end'>
        <Owl_cards dis="-15%" icon1 = {<FontAwesomeIcon icon={faUsers}/>} b_icon1="2-4" icon2 = {<FontAwesomeIcon icon={faStopwatch}/>} b_icon2="60-40" b_icon3="16+" name="Warhammer 40,000: 
        Chaos Space Marines"/>
    </div>
    </OwlCarousel>
    </>
  )
}

export default Owl_end