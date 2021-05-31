import styled from "styled-components";

export const Events_sec = styled.div`
    display: flex;
    justify-content: space-between;
    width: 85%;
    margin: auto;
    margin-top: 150px;
    margin-bottom: 100px;

    @media (max-width:1030px){
        margin-top: 80px;
    }

    @media (max-width:780px){
        margin-top: 80px;
    }

    @media (max-width:415px){
        flex-direction: column;
        margin-top: 60px;
    }
    .left-box{
        
        @media (max-width:415px){
            text-align: center;
            margin-bottom: 40px;
        }
        p{
            font-style: normal;
            font-weight: normal;
            font-size: 20px;
            line-height: 23px;
            letter-spacing: 0.25em;
            color: #000000;

            /* @media (max-width:1030px){
                font-size: 16px;
                line-height: 19px;
            } */

            @media (max-width:780px){
                font-size: 16px;
                line-height: 19px;
            }

            @media (max-width:415px){
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

            @media (max-width:1030px){
                font-size: 42px;
                line-height: 119.97%;
            }

            @media (max-width:780px){
                font-size: 42px;
                line-height: 119.97%;
            }

            @media (max-width:415px){
                line-height: 100%;
            }
        }
    }

    .right-box{
        border-top: 1px solid #D4D4D4;
        border-bottom: 1px solid #D4D4D4;

        .flex-box{
            display: flex;
            justify-content: space-between;
            width: 700px;
            padding: 20px 0;

            @media (max-width:1030px){
                flex-direction: column;
                width: 300px;
            }

            @media (max-width:780px){
                flex-direction: column;
                width: 300px;
            }

            span:first-child{

                @media (max-width:1030px){
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 5px 0;
                }
                
                @media (max-width:780px){
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 5px 0;
                }

                @media (max-width:415px){
                    flex-direction: column;
                    align-items: flex-start;
                }
                p{
                    font-style: normal;
                    font-weight: normal;
                    font-size: 20px;
                    line-height: 23px;
                    letter-spacing: 0.25em;
                    color: #000000;

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
                    font-weight: 900;
                    font-size: 48px;
                    line-height: 58px;
                    letter-spacing: 0.05em;
                    color: #D5A368;

                    @media (max-width:1030px){
                        font-size: 24px;
                        line-height: 119.97%; 
                    }

                    @media (max-width:780px){
                        font-size: 24px;
                        line-height: 119.97%; 
                    }

                    @media (max-width:415px){
                        font-size: 36px;
                    }
                }
            }

            span:nth-child(2){
                h4{
                    font-style: normal;
                    font-weight: bold;
                    font-size: 32px;
                    line-height: 41px;
                    letter-spacing: 0.1em;
                    color: #000000;

                    @media (max-width:1030px){
                        font-size: 18px;
                        line-height: 129.14%;
                    }

                    @media (max-width:780px){
                        font-size: 18px;
                        line-height: 129.14%;
                    }

                    @media (max-width:415px){
                        font-size: 24px;
                    }
                }
                p{
                    font-style: normal;
                    font-size: 23px;
                    line-height: 41px;
                    letter-spacing: 0.1em;
                    color: #000000;
                    width: 480px;

                    @media (max-width:1030px){
                        font-size: 15.5px;
                        line-height: 129.14%;
                        width: 300px;
                    }

                    @media (max-width:780px){
                        font-size: 15.5px;
                        line-height: 129.14%;
                        width: 300px;
                    }

                    @media (max-width:415px){
                        width: 250px;
                    }
                }
            }
        }
        .flex-box:nth-child(2){
            border-top: 1px solid #D4D4D4;
            border-bottom: 1px solid #D4D4D4;

        }
    }
    
`