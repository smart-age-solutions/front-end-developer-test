import React from 'react'
import { ClassicBridal_sec } from './ClassicBridalStyles'
import { IoIosArrowForward } from 'react-icons/io'

export default function ClassicBridal() {
    return (
        <ClassicBridal_sec>
            <div className="left-box">

            </div>

            <div className="right-box">
                <h1>Classic Bridal</h1>

                <p>Our extraordinary diamonds are chosen to celebrate a love, a hope and a passion. Brilliantly capturing our passion for diamonds, a member of the family individually hands-selects each stone within our bridal collection. So you can fall in love witha diamond for eternity.</p>

                <div className="elipse-box">
                    <span className="Elipse"><IoIosArrowForward/></span>
                    <p>SEE MORE</p>
                </div>
            </div>
        </ClassicBridal_sec>
    )
}
