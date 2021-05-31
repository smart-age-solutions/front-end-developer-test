import styled from 'styled-components'

export const SelectedForYou_sec = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 750px;
    
    @media (max-width:1030px){
        height: 700px;
    }
    @media (max-width:780px){
        height: 500px;
    }
    @media (max-width:415px){
        height: 400px;
    }
    .top-content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        p{
            font-style: normal;
            font-weight: normal;
            font-size: 20px;
            line-height: 23px;
            letter-spacing: 0.25em;
            color: #000000;

            @media (max-width:780px){
                font-size: 18px;
                line-height: 21px;
                width: auto;
            }
            @media (max-width:415px){
                
            }
        }
        h1{
            font-family: Playfair Display;
            font-style: normal;
            font-weight: bold;
            font-size: 80px;
            line-height: 96px;
            letter-spacing: 0.1em;
            color: #472138;
            margin-bottom: 30px;

            @media (max-width:780px){
                font-size: 42px;
                line-height: 119.97%;
                margin-top: 10px;
            }

            @media (max-width:415px){
                line-height: 100%;
                text-align: center;
                width: 200px;
            }
        }
    }

    .slide-box{
        width: 100%;
    }

    p{
        font-style: normal;
        font-weight: 300;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.1em;
        color: #000000;
        margin-top: 30px;

        @media (max-width:780px){
            font-size: 14px;
            line-height: 16px;
        }
        @media (max-width:415px){
            font-size: 18px;
            line-height: 21px;
            text-align: center;
            width: 200px;
        }
    }
`