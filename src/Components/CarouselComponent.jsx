import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../__images/Owl__image.png'
import img2 from '../__images/Owl__image2.png'


const CarouselComponent = () => {
  return (
    <Carousel className='carosuel'>
      <Carousel.Item className='carousel__item'>
        <img
          className="d-block "
          src={img1}/>
        <Carousel.Caption className='carousel__cap'>
          <div className="carousel__text">
          <p>Самая популярная карточная игра</p>
          <h3>Magic: the Gathering</h3>
          </div>
          <button>Подробнее</button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item  className='carousel__item'>
        <img
          className="d-block "
          src={img1} alt="Second slide"/>
        <Carousel.Caption className='carousel__cap'>
        <div className="carousel__text">
          <p>Самая популярная карточная игра</p>
          <h3>Magic: the Gathering</h3>
          </div>
          <button>Подробнее</button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='carousel__item'>
        <img
          className="d-block"
          src={img1}/>
        <Carousel.Caption className='carousel__cap'>
        <div className="carousel__text">
          <p>Самая популярная карточная игра</p>
          <h3>Magic: the Gathering</h3>
          </div>
          <button>Подробнее</button>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
};

export default CarouselComponent;
