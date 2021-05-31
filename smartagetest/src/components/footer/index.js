import React from 'react'
import { Footer_sec } from './FooterStyles'

import americanExpress from './images/American_Express.png'
import visa from './images/Visa.png'
import mastercard from './images/American_Express.png'
import paypal from './images/Mastercard.png'
import discover from './images/Pay_Pal.png'
import gia from './images/Gia.png'
import smartAgeLogo from './images/Group.png'

import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

export default function Footer() {
    return (
        <Footer_sec>
            <div className="top-box">
                <nav>
                    <ul>
                        <li><a>COLLECTIONS</a></li>
                        <li><a>CATEGORIES</a></li>
                        <li><a>STORES</a></li>
                        <li><a>OUR STORY</a></li>
                    </ul>
                </nav>

                <div className="top-box-left-side">
                    <span>
                        <FaFacebookF/>
                        <FaInstagram/>
                        <FaTwitter/>
                    </span>
                    <button>CONTACT US</button>
                </div>
            </div>

            <div className="middle-box">
                <h2>Sign up for our newsletter</h2>
                <div className="input-box">
                    <input type="text" placeholder="Enter your e-mail"/>
                    <button>SUBSCRIBE</button>
                </div>

                <div className="details">
                    <p>PRIVACY POLICY</p> <span>/</span>
                    <p>RETURNS AND EXCHANGES</p> <span>/</span>
                    <p>TRACK ORDER</p>
                </div>
            </div>

            <div className="bottom-box">
                <div className="wrapper">
                    <div className="first-box">
                        <p>CONTACT US</p>
                        <p>owner@example.com</p>
                    </div>

                    <div className="second-box">
                        <span>
                            <p>SUPPORT</p>
                        </span>
                        <span>
                            <img src={gia} alt=""/>
                            <img src={gia} alt=""/>
                            <img src={gia} alt=""/>
                        </span>
                    </div>
                </div>

                <div className="third-box">
                    <span>
                        <p>PAYMENT METHODS</p>
                    </span>
                    <span>
                        <img src={mastercard} alt=""/>
                        <img src={visa} alt=""/>
                        <img src={discover} alt=""/>
                        <img src={paypal} alt=""/>
                        <img src={americanExpress} alt=""/>
                    </span>
                </div>
            </div>

            <div className="bottom-footer">
                <div className="container">
                    <p>Smart Age Solutions, &copy; 2019 | MADE WITH LOVE BY SMART AGE SLUTIONS</p>
                    <img src={smartAgeLogo} alt=""/>
                </div>
            </div>
        </Footer_sec>
    )
}
