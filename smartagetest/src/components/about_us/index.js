import React from 'react'
import { AboutUs_sec } from './AboutUsStyles'

export default function AboutUs() {
    return (
        <AboutUs_sec>
            <p>ABOUT US</p>
            <h1>Excellence & Tradition</h1>

            <div className="flex-boxes">
                <div className="flex-box box1">
                    <div className="box-details">
                        <p>PROCESSO</p>
                        <h3>Love is in the Details</h3>
                    </div>
                </div>

                <div className="flex-box box2">
                    <div className="box-details">
                        <p>OUR STORY</p>
                        <h3>A family tradicional</h3>
                    </div>
                </div>

                <div className="flex-box box3">
                    <div className="box-details">
                        <p>MATERIAL</p>
                        <h3>We deliver the best quality</h3>
                    </div>
                </div>
                
            </div>
        </AboutUs_sec>
    )
}
