import React from 'react'
import girl from '../assets/images/girl.png'
import bubles from '../assets/images/bubles.png'
import check from '../assets/images/check.svg'

export default function Hero() {
    const handleCall = () => {
        window.location.href = "tel:+1234567890"; // Замените на нужный номер
      };
    return (
        <div className='container d-flex flex-column'>
            <div className="hero">
                <div className="title">
                    <h1 className='title_text'>Crystal Clean — чисто, как кристалл! </h1>
                    <p className='sub__title'>Профессиональная уборка квартир, домов и офисов — быстро, аккуратно, с гарантией</p>
                </div>
                <div className="hero__img">
                    <img src={girl} alt="girl" />
                    <img className='bubles' src={bubles} alt="bubles" />
                    <img className='check' src={check} alt="check" />
                    
                    <button onClick={handleCall} className="hero__btn">Узнать стоимость</button>
                   
                </div>
            </div>
            

        </div>
    )
}
