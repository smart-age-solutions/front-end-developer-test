import styled from 'styled-components'

export const Header_sec = styled.div`
    padding: 20px;
    border: 1px solid #DADADA;
    @media (max-width: 415px){
            padding-top: 10px;
        }
    .top-content{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin: auto;

        .find-a-store{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 150px;
            height: 40px;
            border: 1px solid #DBDBDB;
            box-sizing: border-box;
            border-radius: 50px;
            cursor: pointer;

            @media (max-width: 415px){
                display: none;
            }

            .location-icon{
                font-size:19px;
                color: #D5A368;
            }
                
            span{
                font-style: normal;
                font-weight: 500;
                font-size: 13px;
                line-height: 15px;
                margin-left: 5px;
                letter-spacing: 0.1em;
                color: #000000;
            }
        }
        .menu-icon{
            display: none;
            font-size: 25px;

            @media (max-width: 415px){
                display: flex;
            }
        }

        .top-content-menu{
            font-size: 20px;
            display: flex;
            justify-content: space-between;
            width: 165px;
            @media (max-width:780px){
                    width: auto;
                    font-size: 24px;
                }
            
            span:nth-child(1){
                display:flex;
                justify-content: space-between;
                align-items: center;
                width: 55px;
                    @media (max-width:780px){
                            display: none;
                        }
            }
            span:nth-child(2){
                display:flex;
                align-items: center;

                .search-icon{
                    margin-left: 30px;
                    padding: 8px;
                    border: 1px solid #DBDBDB;
                    border-radius: 50px;
                    background: #F2F2F2;
                    /* box-sizing: border-box; */
                        @media (max-width:780px){
                            border: none;
                            background: none;
                            margin-left: 20px;
                        }
                }
            }
           
        }
    }

    .bottom-content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        
        @media (max-width:415px){
            align-items: flex-start;
        }

        img{
            @media (max-width:780px){
                width: 30%;
                margin-top: -35px;
                margin-bottom: 15px;
            }
            @media (max-width: 415px){
                width: 40%;
                margin-top: -40px;
                margin-left: 45px;
                margin-bottom: 0;
                
            }
        }

        .menu{
            display: flex;
            justify-content: center;
            margin-top:25px;
            @media (max-width: 580px){
                display: none;
            }

            /* @media (max-width: 415px){
                display: none;
            } */

            ul{
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0;
                width: 720px;
                    @media (max-width:780px){
                        width: 600px;
                    }

                li{
                    list-style: none;

                    a{
                        font-style: normal;
                        font-weight: 500;
                        font-size: 14px;
                        line-height: 16px;
                        letter-spacing: 0.1em;
                        color: #000000;
                        transition: 0.1s;

                        &:hover{
                            color: gray;
                            cursor:default;
                        }
                    }
                }
                
            }
        }

    }
    
`