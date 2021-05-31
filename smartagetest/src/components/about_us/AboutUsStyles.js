import styled from "styled-components";
import image_1 from './images/image_1.png'
import image_2 from './images/image_2.png'
import image_3 from './images/image_3.png'

export const AboutUs_sec = styled.div`
    height: 1000px;
    @media (max-width:1030px){
        height: 680px;
    }
    @media (max-width:780px){
        height: 680px;
    }
    @media (max-width:415px){
        height: 600px;
    }
    
    p{
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;
        letter-spacing: 0.25em;
        text-align: center;
        color: #000000;
        margin-top: 200px;

        @media (max-width:1030px){
            font-size: 18px;
            line-height: 21px;
            margin-top: 100px;
        }

        @media (max-width:780px){
            font-size: 18px;
            line-height: 21px;
            margin-top: 100px;
        }
    }
    h1{
        font-family: Playfair Display;
        font-style: normal;
        font-weight: bold;
        font-size: 80px;
        line-height: 96px;
        letter-spacing: 0.1em;
        text-align: center;
        color: #D5A368;

        width: 550px;
        margin: auto;

        @media (max-width:1030px){
            font-size: 42px;
            line-height: 100%;
            width: 300px;
            margin-top: 5px;
        }

        @media (max-width:780px){
            font-size: 42px;
            line-height: 100%;
            width: 300px;
            margin-top: 5px;
        }

    }
    .flex-boxes{
        display: flex;
        justify-content: space-evenly;
        margin-top: 50px;
        
        @media (max-width:415px){
            width: auto;
            justify-content: flex-start;
            height: 440px;
            overflow-x: auto;

            -webkit-overflow-scrolling:touch;
            scroll-behavior:smooth;
            scroll-snap-type: x mandatory;
        }

        .flex-box{
            width: 490px;
            height: 580px;

            @media (max-width:1030px){
                width: 320px;
                height: 300px;
            }

            @media (max-width:780px){
                width: 240px;
                height: 300px;
            }

            @media (max-width:415px){
                width: 340px;
                height: 350px;
                margin: 5px;

                scroll-snap-align: center;
            }
            .box-details{
                width: 450px;
                height: 150px;
                background: #FFFFFF;
                padding-top: 20px;
                margin-top: 510px;
                float: right;

                @media (max-width:1030px){
                    width: 100%;
                    float: left;
                    margin-top: 300px;
                }

                @media (max-width:780px){
                    width: 100%;
                    float: left;
                    margin-top: 300px;
                }
                @media (max-width:415px){
                    width: 260px;
                    height: 120px;
                    margin-top: 290px;
                    float: right;
                    margin-left:20px;
                }
                
                p{
                    font-style: normal;
                    font-weight: normal;
                    font-size: 20px;
                    line-height: 23px;
                    letter-spacing: 0.25em;
                    color: #D5A368;
                    margin-left: 25px;
                    margin-top: 0;
                    text-align: left;

                    @media (max-width:1030px){
                        font-size: 16px;
                        line-height: 19px;
                    }

                    @media (max-width:780px){
                        font-size: 16px;
                        line-height: 19px;
                    }

                    @media (max-width:415px){
                        font-size: 18px;
                        line-height: 21px;
                    }
                }
                h3{
                    font-family: Playfair Display;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 48px;
                    line-height: 58px;
                    color: #000000;
                    margin-left: 25px;

                    @media (max-width:1030px){
                        font-size: 32px;
                        line-height: 119.97%;
                    }

                    @media (max-width:780px){
                        font-size: 32px;
                        line-height: 119.97%;
                    }

                    @media (max-width:415px){
                        font-size: 36px;
                        line-height: 119.97%;
                    }
                }
            }
        }
    }
    .box1{
        background-image: url(${image_1});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
    .box2{
        margin-top: 50px;

        background-image: url(${image_2});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;

        @media (max-width:415px){
            margin-top: 0;
        }
    }
    .box3{
        background-image: url(${image_3});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
`