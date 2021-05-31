import styled from "styled-components";

export const Footer_sec = styled.div`
    background: #333333;;
    .top-box{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 82%;
        height: 80px;
        margin: auto;

        @media (max-width:1030px){
            height: 150px;
        }

        @media (max-width:780px){
            height: 150px;
        }
        
        nav{
            @media (max-width:1030px){
                display: none;
            }
            @media (max-width:780px){
                display: none;
            }
            ul{
            display: flex;
            justify-content: space-between;
            padding: 0;
            width: 500px;
            }
            li{
                list-style: none;
            }
            a{
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 16px;
                letter-spacing: 0.1em;
                color: #FFFFFF;
            }
        }

        .top-box-left-side{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 390px;

            @media (max-width:1030px){
                width: 100%;
            }

            @media (max-width:780px){
                width: 100%;
            }
            @media (max-width:415px){
                flex-direction: column;
            }
            span{
                display: flex;
                justify-content: space-between;
                align-items: center;

                font-size: 22px;
                color: #FFFFFF;

                width: 100px;

                @media (max-width:415px){
                    width: 120px;
                }
            }

            button{
                width: 258px;
                height: 45px;
                border: 1px solid #767676;
                box-sizing: border-box;
                background: none;
                
                font-family: Open Sans;
                font-style: normal;
                font-weight: normal;
                font-size: 12px;
                line-height: 16px;
                letter-spacing: 0.2em;
                color: #FFFFFF;
                transition: .1s;

                &:hover{
                    color: #D5A368;
                }

                @media (max-width:415px){
                    margin-top: 20px;
                }

            }
        }
    }

    .middle-box{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-top: 1px solid #5A5A5A;
        border-bottom: 1px solid #5A5A5A;
        width: 82%;
        height: 200px;
        margin: auto;

        @media (max-width:780px){
            height: 220px;
        }
        @media (max-width:415px){
            height: 350px;
        }
        h2{
            font-family: Playfair Display;
            font-style: normal;
            font-weight: bold;
            font-size: 24px;
            line-height: 32px;
            color: #D5A368;

            @media (max-width:415px){
                font-size: 22px;
            }

        }

        .input-box{
            display: flex;
            justify-content: space-evenly;
            align-items: center;

            width: 484px;
            height: 55px;
            margin: 20px 0;
            border: 1px solid #D5A368;
            box-sizing: border-box;

            @media (max-width:415px){
                flex-direction: column;
                width: 100%;
                height: 100px;
                border: none;
                margin: 10px 0;
            }
            input{
                width: 70%;
                height: 40px;
                background: none;
                border:none;
                outline: none;
                
                font-family: Open Sans;
                font-style: normal;
                font-weight: normal;
                font-size: 14px;
                line-height: 25px;
                display: flex;
                align-items: center;
                color: #FFFFFF;

                &::placeholder{
                    font-family: Open Sans;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 14px;
                    line-height: 25px;
                    display: flex;
                    align-items: center;

                    color: #FFFFFF;
                }

                @media (max-width:415px){
                   width: 100%;
                   border: 1px solid #D5A368;
                    box-sizing: border-box;
                }
            }
            button{
                width: 124px;
                height: 45px;

                font-family: Open Sans;
                font-style: normal;
                font-weight: normal;
                font-size: 12px;
                line-height: 16px;
                letter-spacing: 0.2em;
                color: #000000;
                border:none;
                outline: none;
                cursor: pointer;
                background: #D5A368;

                @media (max-width:415px){
                   width: 100%;
                }
            }
            
        }

        .details{
            display: flex;
            justify-content: space-between;
            width: 600px;

            color: #999999;

            @media (max-width:415px){
                 flex-direction: column;
                 width: 100%;

                span{
                    display: none;
                }
            }
            p{
                font-family: Open Sans;
                font-style: normal;
                font-weight: normal;
                font-size: 13px;
                line-height: 18px;
                letter-spacing: 0.2em;
                color: #999999;

                @media (max-width:415px){
                    line-height: 50px;
                }

            }
        }
    }

    .bottom-box{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 82%;
        height: 200px;
        margin: auto;

        @media (max-width:780px){
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
        }

        @media (max-width:415px){
            height: 300px;
        }

        .wrapper{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 60%;

            @media (max-width:780px){
                width: 100%;
            }

            @media (max-width:415px){
                flex-direction: column;
                align-items: flex-start;
            }
        }

        p{
            font-family: Open Sans;
            font-style: normal;
            font-weight: bold;
            font-size: 16px;
            line-height: 22px;
            letter-spacing: 0.05em;
            color: #FFFFFF;
            margin-bottom: 10px;
        }
        .first-box{
            p:nth-child(2){
                font-family: Open Sans;
                font-style: normal;
                font-weight: normal;
                font-size: 14px;
                line-height: 23px;
                color: #FFFFFF;
            }
        }

        .second-box{

            @media (max-width:780px){
                width: 380px;
                span{
                    display: flex;
                    justify-content: space-between;
                    
                }
            }

            @media (max-width:415px){
                width: 100%;
                margin: 20px 0;

                img{
                    width: 70px;
                }
            }
            img:nth-child(2){
                margin-left: 50px;
                margin-right: 20px;

                @media (max-width:415px){
                    margin: 0;
                }
            }
        }

        .third-box{            
            width: 300px;

            @media (max-width:780px){
                margin-top: 20px;
            }

            @media (max-width:415px){
                width: 100%;

                img{
                    width: 40px;
                }
            }

            span{
                display: flex;
                justify-content: space-between;
            }
        }
    }

    .bottom-footer{
        background: #3C3C3C;
        height: 80px;

        @media (max-width:415px){
            display:flex;
            justify-content: center;
            align-items: center;
            height: 150px;
        }

        .container{
            display: flex;
            justify-content: space-between;
            align-items: center;

            width: 82%;
            height: 100%;
            margin: auto;

            @media (max-width:780px){
                width: 90%;
            }
            @media (max-width:415px){
                width: 80%;
            }

            @media (max-width:415px){
                flex-direction: column;
                height: auto;
            }

            p{
                font-family: Open Sans;
                font-style: normal;
                font-weight: normal;
                font-size: 12px;
                line-height: 16px;
                display: flex;
                letter-spacing: 0.2em;
                color: #FFFFFF;

                @media (max-width:780px){
                    width: 370px;
                }
                
                @media (max-width:415px){
                    width: auto;
                    text-align: center;
                    margin-bottom: 10px;
                }
            }

        }
        
    }
`