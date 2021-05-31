import styled from 'styled-components'

export const JewelryStore_sec = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 350px;

    h3{
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;
        letter-spacing: 0.25em;
        color: #000000;

        margin-bottom: 10px;

        @media (max-width:780px){
            font-size: 18px;
            line-height: 21px;
        }
    }
    h1{
        font-family: Playfair Display;
        font-style: normal;
        font-weight: bold;
        font-size: 80px;
        line-height: 96px;
        letter-spacing: 0.1em;
        color: #D5A368;

        margin-bottom: 20px;

        @media (max-width:780px){
            font-size: 42px;
            line-height: 119.97%;
        }

    }
    p{
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 27px;
        letter-spacing: 0.1em;
        color: #000000;

        @media (max-width:780px){
            font-size: 14px;
            line-height: 152.62%;
        }
        @media (max-width:415px){
            font-size: 16px;
            line-height: 152.62%;
            text-align: center;
            width: 260px;
        }
    }

    .elipse-box{
        display: flex;
        align-items: center;
        margin-top: 20px;
        .Elipse{
            width: 45px;
            height: 45px;
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
`