import React from 'react'
import styled from 'styled-components'
import { IoIosArrowForward } from 'react-icons/io'
import backimage from './images/stores_image.png'

export default function Stores() {
    return (
        <Stores_sec>
            <p>STORES</p>
            <h2>Find Store</h2>
            <span className="Elipse"><IoIosArrowForward/></span>
        </Stores_sec>
    )
}

const Stores_sec = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 500px;
    background-image: url(${backimage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;


    filter: brightness(40%);
    /* mix-blend-mode: multiply; */

    @media (max-width:780px){
        height: 400px;
    }

    @media (max-width:415px){
        height: 300px;
    }

    p{
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;
        letter-spacing: 0.25em;
        color: #D5A368;

        @media (max-width:780px){
            font-size: 18px;
            line-height: 21px;
        }
    }

    h2{
        font-family: Playfair Display;
        font-style: normal;
        font-weight: bold;
        font-size: 80px;
        line-height: 96px;
        display: flex;
        align-items: center;
        letter-spacing: 0.1em;
        color: #FFFFFF;

        margin: 20px 0;


        @media (max-width:780px){
            font-size: 42px;
            line-height: 119.97%;
        }

    }

    .Elipse{
        color: #FFFFFF;
    }
`