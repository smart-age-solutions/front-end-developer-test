import styled from 'styled-components'
import backImage from './images/classic_bridal.png'

export const ClassicBridal_sec = styled.div`
    display: flex;

    @media (max-width:415px){
        flex-direction: column;
    }
    .left-box{
        width: 100%;
        height: 900px;
        background-image: url(${backImage});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;

        @media (max-width:1030px){
            width: 65%;
            height: 450px;
            background-position:60%;
        }
        @media (max-width:780px){
            width: 65%;
            height: 450px;
            background-position:60%;
        }
        @media (max-width:415px){
            width: 100%;
        }
        
    }
    .right-box{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: 900px;
        background: #472138;
        color: #FFFFFF;

        @media (max-width:1030px){
            height: 450px;
        }
        @media (max-width:780px){
            height: 450px;
        }

        h1{
            font-family: Playfair Display;
            font-style: normal;
            font-weight: bold;
            font-size: 80px;
            line-height: 96px;
            letter-spacing: 0.1em;
            color: #D5A368;
            margin-left: 100px;
            margin-bottom: 50px;

            width: 350px;

            @media (max-width:1030px){
                font-size: 42px;
                line-height: 119.97%;
                margin-left: 60px;
            }
            @media (max-width:780px){
                font-size: 42px;
                line-height: 119.97%;
                margin-left: 60px;
            }

            @media (max-width:415px){
                font-size: 42px;
                line-height: 100%;

                width: 200px;
                margin-bottom:20px;
                margin-left: 10%;
            }
        }
        p{
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 27px;
            letter-spacing: 0.1em;
            color: #FFFFFF;
            margin-left: 100px;

            width: 560px;

            @media (max-width:1030px){
                font-size: 14px;
                line-height: 152.62%;
                width: 325px;
                margin-left: 60px;
            }
            @media (max-width:780px){
                font-size: 14px;
                line-height: 152.62%;
                width: 325px;
                margin-left: 60px;
            }

            @media (max-width:415px){
                width: 265px;
                margin-left:10%;
            }
        }

        .elipse-box{
            display: flex;
            align-items: center;
            margin-top: 50px;
            margin-left: 100px;

            @media (max-width:1030px){
                margin-left: 60px;
            }
            @media (max-width:780px){
                margin-left: 60px;
            }
            @media (max-width:415px){
                margin-top:20px;
                margin-left: 10%;
            }

            .Elipse{
                width: 45px;
                height: 45px;
            }
            p{
                font-style: normal;
                font-weight: normal;
                font-size: 14px;
                line-height: 16px;
                letter-spacing: 0.2em;
                color: #FFFFFF;
                margin-left: 10px;

                width: auto;
            }
        }
    }
`