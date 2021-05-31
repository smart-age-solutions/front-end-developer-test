import styled from "styled-components";

export const Instagram_sec = styled.div`
    background: #F2F2F2;
    padding-top: 50px;
    h1{
        font-family: Playfair Display;
        font-style: normal;
        font-weight: bold;
        font-size: 80px;
        line-height: 96px;
        text-align: center;
        letter-spacing: 0.1em;
        color: #472138;

        @media (max-width:780px){
            font-size: 42px;
            line-height: 119.97%;
        }

        @media (max-width:415px){
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    p{
        font-family: Playfair Display;
        font-style: normal;
        font-weight: normal;
        font-size: 36px;
        line-height: 48px;
        color: #000000;
        text-align: center;

        @media (max-width:780px){
            font-size: 24px;
            line-height: 32px;
        }
    }

    .instagram-icon{
        font-size:50px;
        color:#D5A368;

        @media (max-width:780px){
            font-size:40px;
        }
    }
`