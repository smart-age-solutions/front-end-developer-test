import React from 'react'
import { OriginalDesign_sec } from './OriginalDesignStyles'
import { IoIosArrowForward } from 'react-icons/io'


export default function OriginalDesign() {
    return (
        <OriginalDesign_sec>
            <div className="left-box">
                <h1>The original Design</h1>
                <p>Inspired by a spectacular historical legacy and the most refreshed glamour or the world today.</p>

                <div className="elipse-box">
                    <span className="Elipse"><IoIosArrowForward/></span>
                    <p>EXPLORE</p>
                </div>
            </div>

            <div className="right-box">

            </div>
        </OriginalDesign_sec>
    )
}
