import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack,IoIosArrowForward } from 'react-icons/io'
import ima1 from './images/1.png'
import ima2 from './images/2.png'
import ima3 from './images/3.png'


export default function SelectedImageSlider() {
    
    var props = {
        centerMode: true,
        centerPadding:"30px",
        slidesToShow: 3
    };

    return (
        <Content>
            {/* <IoIosArrowBack className="slick-prev left-arrow"/> */}
             {/* <IoIosArrowForward className="slick-next right-arrow"/> */}
            <Slider {...props}>
                <div className="box_item">
                    <img src={ima1} alt=""/>
                </div>
                <div className="box_item">
                    <img src={ima2} alt=""/>
                </div>
                <div className="box_item">
                    <img src={ima3} alt=""/>
                </div>

                <div className="box_item">
                    <img src={ima3} alt=""/>
                </div>
                
            </Slider>
        </Content>
    )
        
}

const Content = styled.div`
    overflow: hidden;
    .slick-slide > div{
        transform: scale(.5);
        transition: transform .3s cubic-bezier(.4,0,.2,1);

    }
    .slick-center > div{
        transform: scale(1);
    }
    .box_item > img{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 400px;
        height: 400px;

        @media (max-width:780px){
            width: 250px;
            height: 250px;
        }

        @media (max-width:415px){
            width: 100px;
            height: 100px;
        }
    }

    .slick-prev:before{
        position: absolute;
        color: #000;
        left: 50px;
        width: 45px;
        height: 45px;
        border-radius: 50px;
        background: #FFFFFF;

        display: flex;
        justify-content: center;
        align-items: center;

        box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
        rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
        rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;

        @media (max-width:415px){
            display: none;
        }
    }
    .slick-next:before{
        position: absolute;
        color: #000;
        right: 50px;
        width: 45px;
        height: 45px;
        border-radius: 50px;
        background: #FFFFFF;

        display: flex;
        justify-content: center;
        align-items: center;

        box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
        rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
        rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;

        @media (max-width:415px){
            display: none;
        }
    }
    
    
    
`


