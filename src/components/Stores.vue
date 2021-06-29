<template>
    <section id="stores">
        <div class="find-store">
            <div class="find-store__card">
                <h2 class="card_subtitle">STORES</h2>
                <h1 class="card_title">Find Store</h1>
                <btnChevron :styleIcon="styleIcon"/>
            </div>
        </div>
        <div class="contact">
            <div class="contact-us">
                <ul class="contact-us__list">
                    <li class="list__options">COLLECTIONS</li>
                    <li class="list__options">CATEGORIES</li>
                    <li class="list__options">STORIES</li>
                    <li class="list__options">OUR STORY</li>
                </ul>

                <div class="svg">
                    <div></div>
                    <div></div>
                    <div></div>
                    <button type="button">CONTACT US</button>
                </div>
            </div>
            <div class="sign-up">
                <div class="sign-up__title">Sign up for our newsletter</div>
                <div class="sign-up__subscribe">
                    <input type="text" placeholder="Enter your e-mail">
                    <button>SUBSCRIBE</button>
                </div>
                <div class="sign-up__text">
                    PRIVACY POLICY     /     RETURNS AND EXCHANGES     /     TRACK ORDER
                </div>
            </div>
            <div class="more">
                <div class="more__contact">
                    <h1 class="contact__title">CONTACT US</h1>
                    <h4 class="contact__email">owner@example.com</h4>
                </div>
                <div class="more__support">
                    <h1 class="support__title">SUPPORT</h1>
                    <div class="support__icons"></div>
                </div>
                <div class="more__payment">
                    <h1 class="payment__title">PAYMENT METHODS</h1>
                    <div class="payment__icons"></div>
                </div>
            </div>
        </div>
        <footer class="footer">
            <p class="footer__text">Smart Age Solutions, © 2019 | MADE WITH LOVE BY SMART AGE SOLUTIONS</p>
            <div class="footer__vector"></div>
        </footer>
    </section>
</template>

<script>
import btnChevron from '@/components/ChevronButton'

export default {
    name: 'stores',
    components: {
        btnChevron,
    },
    data() {
        return {
            styleIcon: {
                color: 'white',
            }
        }
    }
}
</script>

<style lang="scss" scoped>

$leftBefore: 10vw;

    #stores {
        .find-store {
            width: 100%;
            height: 100vh;

            background-image: url('../assets/richard-odgen.png');
            background-size: cover;
            background-repeat: no-repeat;

            .find-store__card {
                display: flex;
                flex-direction: column;

                justify-content: center;
                align-items: center;

                height: 100%;

                background-color: rgba(000, 000, 000, 0.8);

                .card_subtitle {
                    font-size: 1.4vw;

                    letter-spacing: .2vw;
                    margin-bottom: 4vh;

                    color: #D5A368;
                }
                .card_title {
                    font-size: 6vw;

                    letter-spacing: .2vw;
                    margin-bottom: 4vh;

                    color: white;
                }
            }
        }
        .contact {
            width: 100vw;
            height: 75vh;

            color: white;
            background-color: #333333;

            display: flex;
            flex-direction: column;

            justify-content: space-around;
            align-items: center;

            .contact-us {
                width: 80%;

                display: inline-flex;
                justify-content: space-between;
                align-items: center;

                .contact-us__list {
                    width: 55%;

                    display: inline-flex;
                    justify-content: space-between;

                    font-family: system-ui;

                    list-style-type: none;

                    .list__options {
                        font-size: 1vw;

                        letter-spacing: .2vw;
                    }
                }
                .svg {
                    button {
                        color: white;
                        background-color: transparent;

                        padding: 1.25vh 5vw;

                        letter-spacing: .2vw;
                        font-size: 1vw;

                        outline: none;
                        border: 1px solid rgba(255, 255, 255, 0.2);

                        &:hover {
                            cursor: pointer;
                        }
                    }
                }
                 &::before {
                    content: '';

                    display: block;

                    position: absolute;

                    width: 81.5%;
                    height: 1px;

                    margin-top: 11vh;

                    background-color: white;
                    opacity: .3;
                }
            }

            .sign-up {
                width: 80%;
                height: 22%;

                display: flex;
                flex-direction: column;

                justify-content: space-between;
                align-items: center;

                margin-top: -10vh;

                .sign-up__title {
                    align-items: center;

                    color: #D5A368;

                    font-size: 2.2vw;
                    font-weight: 700;

                }
                .sign-up__subscribe {
                    width: 40%;
                    height: 30%;

                    display: inline-flex;
                    align-items: center;
                    justify-content: space-between;

                    outline: .1vw solid #D5A368;
                    border: .4vw solid transparent;

                    input {
                        width: 70%;

                        outline: none;
                        border: none;

                        padding: .5vh 0;
                        margin-left: .5vw;

                        color: white;
                        background-color: transparent;

                        &::placeholder {
                            color: rgba(255, 255, 255, 0.8);
                        }
                    }
                    button {
                        outline: none;
                        border: none;

                        padding: 1.7vh 2vw;

                        font-size: 1vw;
                        font-weight: 700;

                        letter-spacing: .1vw;

                        color: #333333;
                        background-color: #D5A368;

                        &:hover {
                            cursor: pointer;

                            transition: .2s ease-in-out;
                            filter: brightness(.7);
                        }
                    }
                }
                .sign-up__text {
                    margin-bottom: -3vh;

                    color: rgba(255, 255, 255, .5);

                    font-family: system-ui;
                    font-size: 1.2vw;

                    letter-spacing: .2vw;
                    word-spacing: 1vw;
                }

                &::after {
                    content: '';

                    display: block;

                    position: absolute;

                    width: 81.5%;
                    height: 1px;

                    margin-top: 24vh;

                    background-color: white;
                    opacity: .3;
                }
            }

            .more {
                width: 80%;

                display: inline-flex;
                justify-content: space-between;

                font-family: system-ui;

                margin-top: -4vh;

                .more__contact {
                    .contact__title {
                        font-weight: bold;
                        font-size: 1.2vw;

                        margin-bottom: 2vh;

                        letter-spacing: .1vw;
                    }
                    .contact__email {
                        font-size: 1.35vw;
                    }
                }
                .more__support {
                    width: 10vw;
                    height: 10vh;

                    margin-left: -16vw;

                    .support__title {
                        font-weight: bold;
                        font-size: 1.2vw;

                        margin-bottom: 2vh;

                        letter-spacing: .1vw;
                    }
                    .support__icons {
                        width: 6vw;
                        height: 4vh;

                        position: absolute;

                        background-image: url('../assets/logo-gia.png');
                        background-size: cover;
                        background-repeat: no-repeat;

                        &::before, &::after {
                            content: '';
                            display: block;

                            width: 6vw;
                            height: 4vh;

                            position: absolute;

                            left: $leftBefore;

                            background-image: url('../assets/logo-gia.png');
                            background-size: cover;
                            background-repeat: no-repeat;
                        }
                        &::after {
                            left: $leftBefore + 7;
                        }
                    }
                }
                .more__payment {
                    width: 20vw;
                    height: 10vh;
                    .payment__title {
                        font-weight: bold;
                        font-size: 1.2vw;

                        margin-bottom: 2vh;

                        letter-spacing: .1vw;
                    }
                    .payment__icons {
                        width: 20vw;
                        height: 4vh;

                        position: absolute;

                        background-image: url('../assets/cards-payment.png');
                        background-size: cover;
                        background-repeat: no-repeat;
                    }
                }

            }
        }
        .footer {
            width: 100%;
            height: 10vh;

            display: inline-flex;
            justify-content: space-around;
            align-items: center;

            color: white;
            background-color: #3C3C3C;

            .footer__text {
                font-size: 1vw;
                font-family: sans-serif;

                letter-spacing: .2vw;
            }
            .footer__vector {
                width: 15%;
                height: 5vw;

                background-image: url('../assets/vector.png');
                background-size: cover;
                background-repeat: no-repeat;
            }
        }
    }
</style>