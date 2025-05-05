import React from 'react'
import logo from '../assets/images/logo.svg'
import whatsup from '../assets/images/whatsup.svg'
import telegram from '../assets/images/telegram.svg'

export default function Header() {



    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    {/* Лого */}
                    <div className="logo d-flex gap-3 align-items-center">
                        <div className="logo_pic">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="logo_text">
                            <p>Crystal Clean</p>

                        </div>
                    </div>

                    {/* Бургер */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarContent"
                        aria-controls="navbarContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Контейнер для меню */}
                    <div className="collapse navbar-collapse " id="navbarContent">
                        <ul className="navbar-nav mx-auto text-center d-flex justify-content-center flex-lg-row flex-column w-100 gap-5">
                            <li className="nav-item">
                                +48 510-468-167
                            </li>
                            <li className="nav-item ">
                                <span className='time'>Пн-Вс: 8:00 - 16:00</span>
                            </li>
                            <li className="nav-item d-flex gap-3 justify-content-center">
                                <span className='messanger'>
                                    <img src={whatsup} alt="whatsup" />
                                </span>
                                <span className='messanger'>
                                    <img src={telegram} alt="telegram" />
                                </span>
                            </li>

                            {/* Кнопка "Позвонить" — видна только на мобилке */}
                            <li className="nav-item d-lg-none mt-3">
                                <a href="tel:+48510468167" className="btn btn-call  w-75 mx-auto">
                                    Заказать консультацию
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Кнопка "Позвонить" — видна только на десктопе */}
                    <div className="d-none d-lg-block">
                        <a href="tel:+48510468167" className="btn btn-call">
                            Заказать консультацию
                        </a>
                    </div>
                </div>
            </nav>

        </header>
    )
}
