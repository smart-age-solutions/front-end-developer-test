import styled from 'styled-components'

export const Collections_sec = styled.div`
    display: flex;
    height: 800px;
    background: #D5A368;

    @media (max-width:1030px){
        width: 100%;
        height: 533px;
    }

    @media (max-width:780px){
        width: 100%;
        height: 533px;
    }
    @media (max-width:415px){
        flex-direction: column;
        height: 472px;
        /* overflow: hidden; */
        
    }


    .left-side{
        @media (max-width:1030px){
            width: 56%;
        }
        @media (max-width:780px){
            width: 56%;
        }
        @media (max-width:415px){
            width: 100%;
        }
        
        h1{
            font-family: Playfair Display;
            font-style: normal;
            font-weight: bold;
            font-size: 80px;
            line-height: 96px;
            letter-spacing: 0.1em;
            color: #000000;
            margin-top: 220px;
            margin-left: 100px;
            margin-bottom: 80px;
            position: relative;
            z-index: 1000;

            @media (max-width:1030px){
                font-size: 42px;
                line-height: 119.97%;
                margin-top: 130px;
                margin-left: 70px;
                margin-bottom: 60px;
                position: absolute;
            }

            @media (max-width:780px){
                font-size: 42px;
                line-height: 119.97%;
                margin-top: 130px;
                margin-left: 70px;
                margin-bottom: 60px;
                position: absolute;
            }

            @media (max-width:415px){
                margin-top: 50px;
                margin-left: 50px;
            }
        }

        .titles-box{
            @media (max-width:1030px){
                margin-top: 240px;
            }
            @media (max-width:780px){
                margin-top: 240px;
            }
            @media (max-width:415px){
                display: flex;
                align-items: center;
                margin-top: 80px;
            }
        }
        .title{
            @media (max-width:415px){
                margin-left: 0px;
                overflow: hidden;
            }
                
            
            p{
                display: flex;
                align-items: center;
                font-style: normal;
                font-weight: normal;
                font-size: 24px;
                line-height: 28px;
                letter-spacing: 0.25em;
                color: #000000;
                margin-top: 50px;
                margin-left: 100px;
                cursor: default;

                @media (max-width:1030px){
                    font-size: 16px;
                    line-height: 19px;
                    margin-top: 40px;
                    margin-left: 70px;
                }

                @media (max-width:780px){
                    font-size: 16px;
                    line-height: 19px;
                    margin-top: 40px;
                    margin-left: 70px;
                }

                @media (max-width:415px){
                    font-size: 14px;
                    line-height: 16px;
                    margin-left: 0px;
                    width: 200px;

                    &:first-child{
                        margin-left: 25px;
                    }
                }
            }
        }
    
    .title.active{
        p{
            color: #8D6638;
            &:after{
                content:'';
                width: 110px;
                height: 1px;
                background: #8D6638;
                position: absolute;
                z-index: 100;
                left: 380px;

                @media (max-width:1030px){
                    left:320px;
                }

                @media (max-width:780px){
                    width: 90px;
                    left:240px;
                }

                @media (max-width:415px){
                    display: none;
                }

                
            }
        }
    }
    .elipse-box{
        display: flex;
        align-items: center;
        margin-top: 80px;
        margin-left: 100px;

        @media (max-width:1030px){
                margin-left: 70px;
                margin-top:70px;
            }
        @media (max-width:780px){
                margin-left: 70px;
                margin-top:70px;
            }
            @media (max-width:415px){
                margin-top:250px;
                margin-left: 25px;
            }
        .Elipse{
            border-color: #000000;
            z-index: 100;
        }
        p{
            margin-left: 10px;
            z-index: 100;
        }
    }
    
    }

    .right-box{
        @media (max-width:1030px){
            position: relative;
            overflow: hidden;
            width: 100%;
            height: 460px;
            margin-top:100px;
       }
        
       @media (max-width:780px){
            position: relative;
            overflow: hidden;
            width: 100%;
            height: 460px;
            margin-top:100px;
       }
       @media (max-width:415px){
            width: 80%;
            margin-top: -270px;
            margin-left: 10%;
       }
        .image-box{
        
            img{
                position: absolute;
                width: 1060px;
                height: 700px;
                margin-top:150px;
                right: 50px;

                @media (max-width:1030px){
                    width: 100%;
                    height: 460px;
                    margin-top: 0;
                    margin-left: 50px;
                    position: relative;
                    
                }

                @media (max-width:780px){
                    width: 640px;
                    height: 460px;
                    /* right: 55px; */
                    margin-top: 0;
                    margin-left: 50px;
                    position: relative;
                    
                }
                
                @media (max-width:415px){
                    width: 300px;
                    height: 199.92px;
                    align-self: center;
                }

            }
        }
        .elipse-box{
            display: flex;
            align-items: center;
            margin-top: 790px;
            margin-left: -160px;

            @media (max-width:1030px){
                margin-top: -80px;
                margin-left: 30px;
            }

            @media (max-width:780px){
                margin-top: -80px;
                margin-left: 30px;
            }
            @media (max-width:415px){
                display: none;
            }
        
            .Elipse{
                border-color: #000000;
                z-index: 100;
            }
            p{
                margin-left: 10px;
                z-index: 100;
            }
            
        }
    }
 
    
`