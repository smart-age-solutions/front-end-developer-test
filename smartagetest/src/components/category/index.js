import React from 'react'
import { Category_sec } from './CategoryStyles'
import { IoIosArrowForward } from 'react-icons/io'

export default function Category() {
    return (
        <Category_sec>
            <div className="left-box">
                <p>CATEGORY</p>
                <h1>Rings</h1>
            </div>
            <div className="right-box">
                <span className="Elipse"><IoIosArrowForward/></span>
            </div>
        </Category_sec>
    )
}
