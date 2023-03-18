import React from 'react'

const Element = () => {
  return (
    <div className="element">
        <h3 className='element_h3'>Ближайшие мероприятия</h3>
    <div className='element_main'>
        <div className="element_card">
            <div className="card__footer">
                <div className="card_text">
                    <h3>Halloween c GoldFish</h3>
                    <p>31 октября 2021 г. 19:00</p>
                </div>
                <p>Мы соберемся,чтобы узнать,кто же все-таки был Мафией и что 
                 будет с тем,кого убили..</p>
            </div>
        </div>
        <div className="element_card2">
            <div className="card__footer2">
                <div className="card_text2">
                    <h3>Турнир Warhammer</h3>
                    <p>9 ноября 2021 г. 18:30</p>
                </div>
                <p>
                Готов сразиться в ожесточенной битве Warhammer? Нет? Мы тебя
                обязтально научим! </p>
            </div>
        </div>
    </div>
    <div className="element_btn">
    <button className='element__button'>Показать еще</button>
    </div>
    </div>
  )
}

export default Element;