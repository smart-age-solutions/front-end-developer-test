import React, {useState, useEffect} from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components'

import image1 from './images/image1.png'
import image2 from './images/image2.png'
import image3 from './images/image3.png'
import image4 from './images/image4.png'
import image5 from './images/image5.png'

export default function InstagSlider() {
    const [currentWidth, setCurrentWidth] = useState();
    const [numberOfSlides, setNumberOfSlides] = useState(5);

    useEffect(() => {

        var ipadPro = window.matchMedia("(max-width:1030px)");
        var ipad = window.matchMedia("(max-width:780px)");
        var mobile = window.matchMedia("(max-width:415px)");
        var normalsize = window.matchMedia("(min-width:1030px)");
       const currentInnerWidth = () => {
            if (ipad.matches || ipadPro.matches){
                setNumberOfSlides(3)
            }
            if (mobile.matches){
                setNumberOfSlides(1)
            }
            if (normalsize.matches){
                setNumberOfSlides(5)
            }
       }
       
       window.addEventListener('resize', () => {
           console.log(currentInnerWidth())
       });
    })

    var props = {
        centerMode: true,
        centerPadding:"30px",
        slidesToShow: numberOfSlides
    };
    
    return (
        <Container>
            <Slider {...props} className="slider">
                <div className="box">
                    <img src={image1} alt=""/>
                </div>
                <div className="box">
                    <img src={image2} alt=""/>
                </div>
                <div className="box">
                    <img src={image3} alt=""/>
                </div>
                <div className="box">
                    <img src={image4} alt=""/>
                </div>
                <div className="box">
                    <img src={image5} alt=""/>
                </div>
                <div className="box">
                    <img src={image3} alt=""/>
                </div>
            </Slider>
        </Container>
    )
}

const Container = styled.div`
    height: 400px;

    .slider{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;

    }
    
    .slick-slide > div{
        transform: scale(.8);
        transition: transform .3s cubic-bezier(.4,0,.2,1);
        
        @media (max-width:1030px){
          transform: scale(.7);
        }
        @media (max-width:780px){
          transform: scale(.7);
        }
    }
    .slick-center > div{
        transform: scale(1);
        border: 10px solid #FFFFFF;
        border-radius: 4px;
        height: 280px;

        @media (max-width:1030px){
            transform: scaleX(1.2)
        }

        @media (max-width:780px){
            transform: scaleX(1.2);
        }
        
        @media (max-width:415px){
           transform: scaleX(1);
           height: 250px;
        }
        
        
    }
   
    .box > img{
        display: flex;
        justify-content: center;
        align-items: center;
        width:100%;
        height: 280px;

        @media (max-width:1030px){
            
        }

        @media (max-width:415px){
           height: 250px;
        }
    }
    .slick-arrow::before{
        color: #000;

        @media (max-width:415px){
           display: none;
        }
    }
    .slick-prev{
        position: absolute;
        left: 100px;
        width: 50px;
        height: 50px;
        background: #FFFFFF;
        border-radius: 50px;
        z-index: 1000;

        @media (max-width:780px){
           left: 40px;
        }
        @media (max-width:415px){
           background: none;
        }
    }
    .slick-next{
        position: absolute;
        right: 100px;
        width: 50px;
        height: 50px;
        background: #FFFFFF;
        border-radius: 50px;
        z-index: 1000;

        @media (max-width:780px){
           right: 40px;
        }

        @media (max-width:415px){
           background: none;
        }
    }
    
`
