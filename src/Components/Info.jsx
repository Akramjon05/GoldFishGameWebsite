import React from 'react'

const Info = () => {
  return (
    <div className='info_main'>
        <h3 className='info_h3'>Больше интересной информации</h3>
        <div className="i_main">
            <div className="card_main">
                <div className="m_footer">
                    <h5>Аэронавтика Империалис: <br /> введение в игру</h5>
                    <p>Детально ознакомимся с правилами игры </p>
                </div>
            </div>
            <div className="card_main2">
                <div className="m_footer2">
                    <h5>Желанные, но маловероятные релизы </h5>
                    <p>Небольшой список «а вот бы...» </p>
                </div>
            </div>
            <div className="card_main">
                <div className="m_footer">
                    <h5>Аэронавтика Империалис: <br /> введение в игру</h5>
                    <p>Детально ознакомимся с правилами игры </p>
                </div>
            </div>
        </div>
        <div className="info__button">
            <button className='info_btn'>Узнать больше</button>
        </div>
    </div>
  )
}

export default Info;