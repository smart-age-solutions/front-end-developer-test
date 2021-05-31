import React from 'react'
import { Showcase_sec } from './ShowcaseStyles'
import { IoIosArrowForward } from 'react-icons/io'

export default function Showcase() {
    return (
        <Showcase_sec>
            <div className="side-box">
                <div className="side-box-elipses">
                    <span className="Elipse">1</span>
                    <span className="Elipse">2</span>
                    <span className="Elipse">3</span>
                </div>

                <div className="line"></div>

                <p>DISCOVER MORE</p>

            </div>

            <div className="main-box">
                <h1>Engatement Ring</h1>
                <div className="elipse-box">
                    <span className="Elipse"><IoIosArrowForward/></span>
                    <p>EXPLORE</p>
                </div>
            </div>
        </Showcase_sec>
    )
}
