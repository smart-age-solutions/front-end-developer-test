import React from 'react'
import { JewelryStore_sec }from './jewlryStoreStyles'
import { IoIosArrowForward } from 'react-icons/io'

export default function JewelryStore() {
    return (
        <JewelryStore_sec>
            <h3>THE LATEST FROM</h3>
            <h1>Jewelry Store</h1>
            <p>Discover all that's new, brilliant and beautiful in the world of Brand's Name</p>
            <div className="elipse-box">
                <span className="Elipse"><IoIosArrowForward/></span>
                <p>SEE MORE</p>
            </div>
        </JewelryStore_sec>
    )
}
