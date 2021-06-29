<template>
    <section id="about-us">
        <div class="about-us__text">
            <h2 class="text__link">ABOUT US</h2>
            <h1 class="text__title">Excellence & Tradition</h1>
        </div>
        <div id="about-us__carousel" class="glide">
            <div class="glide__track" data-glide-el="track">
                <ul class="glide__slides">
                    <li class="glide__slide">
                        <img src="../assets/pendant.png" alt="ring diamond">
                        <div class="img__card">
                            <h2 class="card__subtitle">PROCESS</h2>
                            <h1 class="card__title">Love is in the Details</h1>
                        </div>
                    </li>
                    <li class="glide__slide" :style="`margin: auto`">
                        <img src="../assets/model-4.png" alt="ring diamond" :style="imgMiddle">
                        <div class="img__card">
                            <h2 class="card__subtitle">OUR STORY</h2>
                            <h1 class="card__title">A family Traditional</h1>
                        </div>
                    </li>
                    <li class="glide__slide">
                        <img src="../assets/triple-ring.png" alt="ring diamond">
                        <div class="img__card">
                            <h2 class="card__subtitle">MATERIAL</h2>
                            <h1 class="card__title">We deliver the best quality</h1>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'aboutUs',
    data() {
        return {
            imgMiddle: {
                bottom: '6vh',
            },
        }
    }
}
</script>

<style lang="scss" scoped>
@import "node_modules/@glidejs/glide/src/assets/sass/glide.core";

    #about-us {
        width: 100vw;
        height: 100vh;

        margin: 25vh 0 20vh;

        .about-us__text {
            .text__link {
                text-align: center;

                font-size: 1.5vw;

                margin-bottom: 2vh;

                letter-spacing: .2vw;
            }
            .text__title {
                width: 27vw;

                font-size: 5vw;

                text-align: center;

                margin: 0 auto;

                letter-spacing: .2vw;
                color: #D5A368;
            }
        }
        #about-us__carousel {
            .glide__track {
                .glide__slides {
                    margin: 10px 0;

                    .glide__slide {
                        margin-bottom: 16vh;

                        overflow: hidden;

                        img {
                            width: 100%;

                            position: relative,
                        }
                        .img__card {
                            position: relative;

                            padding: 2vw;

                            bottom: 17vh;
                            left: 2vw;

                            background-color: white;

                            .card__subtitle {
                                font-size: 1.2vw;
                                font-weight: 100;

                                margin-bottom: 1vh;

                                letter-spacing: .2vw;

                                color: #D5A368;
                            }
                            .card__title {
                                width: 65%;

                                font-size: 3vw;
                                font-weight: 700;
                            }
                        }
                    }
                }
            }
        }
    }

</style>