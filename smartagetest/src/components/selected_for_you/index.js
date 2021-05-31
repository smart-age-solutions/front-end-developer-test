import React from 'react'
import SelectedImageSlider from './SelectedImageSlider'
import { SelectedForYou_sec } from './SelectedStyles'

export default function SelectedForYou() {
    return (
        <SelectedForYou_sec>
            <div className="top-content">
                <p>SHOP</p>
                <h1>Selected for You</h1>
            </div>

            <div className="slide-box">
                <SelectedImageSlider/>
            </div>

            <p>18k Tose Gold Engagement Ring</p>

        </SelectedForYou_sec>
    )
}
