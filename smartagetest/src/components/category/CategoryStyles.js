import styled from 'styled-components'
import left_bckgImage from './images/imageCategory.png'
import right_bckgImage from './images/imagecategory2.png'

export const Category_sec = styled.div`
    display: flex;

    .left-box{
        width: 75%;
        height: 600px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border:10px solid #FFFFFF;

        background-image: url(${left_bckgImage});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;

        @media (max-width:1030px){
            width: 90%;
            height: 350px;
        }
        @media (max-width:780px){
            width: 90%;
            height: 350px;
        }
        @media (max-width:415px){
            width: 95%;
            background-position:100%;
            border-top: none;
            border-left: none;
            border-bottom: none;
        }

        p{
            font-style: normal;
            font-weight: normal;
            font-size: 24px;
            line-height: 28px;
            letter-spacing: 0.25em;
            color: #FFFFFF;

            @media (max-width:1030px){
                font-size: 18px;
                line-height: 21px;
            }
            @media (max-width:780px){
                font-size: 18px;
                line-height: 21px;
            }
        }
        h1{
            font-family: Playfair Display;
            font-style: normal;
            font-weight: bold;
            font-size: 96px;
            line-height: 115px;
            letter-spacing: 0.3em;
            color: #FFFFFF;

            @media (max-width:1030px){
                font-size: 50px;
                line-height: 119.97%;
            }
            @media (max-width:780px){
                font-size: 50px;
                line-height: 119.97%;
            }

        }
    }

    .right-box{
        display: flex;
        justify-content:flex-end;
        align-items: center;
        width: 25%;
        height: 600px;
        opacity: 0.3;
        border-top: 10px solid #FFFFFF;
        border-bottom: 10px solid #FFFFFF;
        background-image: url(${right_bckgImage});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;

        @media (max-width:1030px){
            width: 10%;
            height: 350px;
        }
        @media (max-width:780px){
            width: 10%;
            height: 350px;
        }
        @media (max-width:415px){
            width: 5%;
            border: none;
        }

        .Elipse{
            border-color: #FFFFFF;
            background:#FFFFFF;
            margin-right: 20px;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            @media (max-width:1030px){
                display: none;
            }
            /* @media (max-width:780px){
                display: none;
            } */
        }
    }
`