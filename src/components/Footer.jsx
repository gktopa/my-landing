import React from 'react'
import logo from '../assets/images/logo.svg'

export default function Footer() {
    return (
        <div className='footer'>
            <div className="d-flex flex-column g-3 align-items-center">
                <div className="footer_logo">
                    <img src={logo} alt="logo" />
                </div>
                <p className="footer_logo_text">Crystal Clean</p>
                <a className='footer_sub' href="tel:+48510468167">+48 510-468-167</a>
                <a href="mailto:example@example.com">7crystalclean@gmail.com</a>
                <div className="divider"></div>
                <p className='footer__end'>&copy; 2025 CrystalClean.pl. All rights reserved.</p>
                
            </div>

        </div>
    )
}
