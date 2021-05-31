import React from 'react'
import { Instagram_sec } from './InstagramStyles'
import { AiOutlineInstagram } from 'react-icons/ai'
import InstagSlider from './InstagSlider'

export default function Instagram() {
    return (
        <Instagram_sec>
            <h1><AiOutlineInstagram className="instagram-icon"/>Instagram</h1>
            <p>@smartshop</p>

            <InstagSlider/>
        </Instagram_sec>
    )
}
