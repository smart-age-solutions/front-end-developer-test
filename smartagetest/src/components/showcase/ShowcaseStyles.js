import styled from 'styled-components'
import backgroundImage from './images/showcase.png'

export const Showcase_sec = styled.div`
    display: flex;
    height: 700px;

    @media (max-width:830px){
        height: 520px;
    }

    @media (max-width:780px){
        height: 520px;
    }
    @media (max-width:415px){
        flex-direction: column-reverse;
        height: 460px;
    }
    .side-box{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 80px;
        @media (max-width:415px){
            flex-direction: row;
            width: 100%;
            
        }

        .side-box-elipses{
            margin-top: 120px;

            @media (max-width:830px){
                margin-top: 50px;
            }

            @media (max-width:780px){
                margin-top: 50px;
            }
            @media (max-width:415px){
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top:0;
                width: 100%;
                height: 60px;
                
            }
        }
        .side-box-elipses span:not(:nth-child(1)){
            border: none;
        }
        .line{
            width: 1px;
            height: 150px;
            background: #D5A368;
            margin: 20px 0;

            @media (max-width:830px){
                height: 100px;
            }

            @media (max-width:780px){
                height: 100px;
            }
            @media (max-width:415px){
                display: none;
            }
            
        }
        p{
            writing-mode:vertical-rl;
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 21px;
            letter-spacing: 0.25em;
            color: #333333;
            transform: rotate(-180deg);

            @media (max-width:830px){
                font-size: 14px;
                line-height: 16px;
            }

            @media (max-width:780px){
                font-size: 14px;
                line-height: 16px;
            }
            @media (max-width:415px){
                display: none;
            }
        }
    }

    .main-box{
        width: 100%;
        height: 800px;
        background-image: url(${backgroundImage});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        z-index: 1000;

        @media (max-width:830px){
            height: 580px;
            background-position: 20%;
        }

        @media (max-width:780px){
            height: 580px;
            background-position: 20%;
        }
        @media (max-width:415px){
            height: 400px;
            background-position: 50%;
        }

        h1{
            font-family: Playfair Display;
            font-style: normal;
            font-weight: bold;
            font-size: 80px;
            line-height: 107px;
            letter-spacing: 0.1em;
            color: #FFFFFF;
            margin-top: 550px;
            margin-left: 100px;

            @media (max-width:830px){
                font-size: 43px;
                line-height: 57px;
                margin-top: 420px;
                margin-left: 50px;
            }

            @media (max-width:780px){
                font-size: 43px;
                line-height: 57px;
                margin-top: 420px;
                margin-left: 50px;
            }
            @media (max-width:415px){
                font-size: 42px;
                line-height: 50px;
                margin-top: 220px;
                margin-left: 25px;
            }
        }
        .Elipse{
            width: 45px;
            height: 45px;
            color: #FFFFFF;
            margin-left: 100px;

            @media (max-width:830px){
                margin-left: 50px;
            }

            @media (max-width:780px){
                margin-left: 50px;
            }
            @media (max-width:415px){
               margin-left: 25px;
           }
        }

        .elipse-box{
            display: flex;
            align-items: center;
            margin-top: 20px;

            @media (max-width:415px){
               margin-top: 10px;
           }

            p{
                margin-left: 10px;
                font-style: normal;
                font-weight: normal;
                font-size: 14px;
                line-height: 16px;
                letter-spacing: 0.2em;
                color: #FFFFFF;
            }
        }
    }
` 