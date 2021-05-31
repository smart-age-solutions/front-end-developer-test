import styled from 'styled-components'
import bkgImage from './images/image.png'

export const OriginalDesign_sec = styled.div`
    display: flex;

    @media (max-width:415px){
        flex-direction: column;
    }
    .left-box{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: 60%;
        height: 780px;

        background: #F9EFE4;
        @media (max-width:1030px){
            height: 700px;
        }

        @media (max-width:830px){
            width: 70%;
            height: 450px;
        }

        @media (max-width:780px){
            width: 70%;
            height: 450px;
        }

        @media (max-width:415px){
            width: 100%;
            height: 360px;
        }


        h1{
            font-family: Playfair Display;
            font-style: normal;
            font-weight: bold;
            font-size: 80px;
            line-height: 96px;
            letter-spacing: 0.1em;
            color: #000000;
            width: 600px;

            margin-left: 150px;
            margin-bottom: 40px;

            @media (max-width:1030px){
                font-size: 70px;
                margin-top: 100px;
                margin-left: 100px;
            }

            @media (max-width:830px){
                font-size: 42px;
                line-height: 119.97%;
                width: 300px;

                margin-top: 60px;
                margin-left: 100px;
            }

            @media (max-width:780px){
                font-size: 42px;
                line-height: 119.97%;
                width: 300px;

                margin-top: 60px;
                margin-left: 100px;
            }

            @media (max-width:650px){
                margin-left: 80px;
            }

            @media (max-width:415px){
                margin-top: 0;
                margin-left: 20px;
            }
        }
        
        p{
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 27px;
            letter-spacing: 0.1em;
            color: #000000;
            width: 600px;

            margin-left: 150px;

            @media (max-width:1030px){
                width: 450px;
                margin-left: 100px;
            }

            @media (max-width:830px){
                font-size: 14px;
                line-height: 152.62%;
                width: 360px;
                text-align: justify;

                margin-left: 100px;
            }

            @media (max-width:780px){
                font-size: 14px;
                line-height: 152.62%;
                width: 360px;
                text-align: justify;

                margin-left: 100px;
            }

            @media (max-width:670px){
                width: 300px;
                margin-left: 80px;
            }

            @media (max-width:580px){
                width: 280px;
                margin-left: 80px;
            }

            @media (max-width:415px){
                font-size: 16px;
                line-height: 152.62%;
                text-align: left;
                width: 300px;
                margin-left: 20px;
            
            }

        }

        .elipse-box{
            display: flex;
            align-items: center;

            margin-top: 20px;
            margin-left: 150px;
            @media (max-width:1030px){
                margin-left: 100px;
            }

            @media (max-width:830px){
                margin-left: 100px;
            }

            @media (max-width:780px){
                margin-left: 100px;
            }

            @media (max-width:650px){
                margin-left: 80px;
            }

            @media (max-width:415px){
                margin-left: 20px;
            }

            p{
                margin-left: 10px;
                font-style: normal;
                font-weight: normal;
                font-size: 14px;
                line-height: 16px;
                letter-spacing: 0.2em;
                color: #333333;
                
                width: auto;
            }
        }


    }
    .right-box{
        background-image: url(${bkgImage});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        width: 40%;
        height: 780px;

        @media (max-width:1030px){
            height: 700px;
            background-position: 20%;
        }

        @media (max-width:830px){
            width: 36%;
            height: 450px;
            background-position: 20%;
        }

        @media (max-width:780px){
            width: 36%;
            height: 450px;
            background-position: 20%;
        }
        @media (max-width:415px){
            width: 100%;
            height: 500px;
        }
    }
`