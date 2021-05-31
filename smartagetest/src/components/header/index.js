import React from 'react'
import '../GlobalStyles.css'
import { Header_sec } from './HeaderStyles'
import { HiOutlineLocationMarker, HiOutlineMenu, HiOutlineUser, HiOutlineHeart } from 'react-icons/hi'
import { AiOutlineShopping } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import logo_image from './images/smartage_logo.png'




export default function Header() {
    return (
        <Header_sec>
            <div className="top-content">
                <div className="find-a-store">
                    <HiOutlineLocationMarker className="location-icon"/> <span>Find a Store</span>
                </div>
                <div className="menu-icon">
                    <HiOutlineMenu/>
                </div>

                <div className="top-content-menu">
                    <span>
                        <HiOutlineUser/>
                        <HiOutlineHeart/>
                    </span>
                    <span>
                        <AiOutlineShopping/>
                        <BiSearch className="search-icon"/>
                    </span>
                </div>
            </div>

            <div className="bottom-content">
                <img src={logo_image} alt=""/>
                <div className="menu">
                    <nav>
                        <ul>
                            <li><a>COLLECTIONS</a></li>
                            <li><a>CATEGORIES</a></li>
                            <li><a>STORES</a></li>
                            <li><a>OUR STORY</a></li>
                            <li><a>CONTACT</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </Header_sec>
    )
}
