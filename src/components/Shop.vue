<template>
    <section id="shop">
         <div class="text-card">
            <h2 class="card__subtitle">SHOP</h2>
            <h1 class="card__title">Selected for You</h1>
        </div>

        <div id="carousel-shop" class="glide">
            <div class="glide__track" data-glide-el="track">
                <ul class="glide__slides">
                    <li class="glide__slide">
                        <img src="../assets/ring-2.png" alt="ring diamond">
                        <caption>Lorem Ipsum</caption>
                    </li>
                    <li class="glide__slide">
                        <img src="../assets/ring-silver.png" alt="ring diamond">
                        <caption>Lorem Ipsum</caption>
                    </li>
                    <li class="glide__slide">
                        <img src="../assets/ring-amavida.png" alt="ring diamond">
                        <caption>18K Rose Gold Engagement Ring</caption>
                    </li>
                    <li class="glide__slide">
                        <img src="../assets/ring-ruby-diamond.png" alt="ring diamond">
                        <caption>Lorem Ipsum</caption>
                    </li>
                    <li class="glide__slide">
                        <img src="../assets/ring-2.png" alt="ring diamond">
                        <caption>Lorem Ipsum</caption>
                    </li>
                </ul>
            </div>

            <div class="glide__arrows" data-glide-el="controls">
                <button class="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
                <button class="glide__arrow glide__arrow--right" data-glide-dir=">">></button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'shop',
}
</script>

<style lang="scss" scoped>
@import "node_modules/@glidejs/glide/src/assets/sass/glide.core";

$heightDiv: 100vh;

    #shop {
        width: 100vw;

        margin: 10vh 0;

        .text-card {
            margin: 0 auto;

            text-align: center;
            color: #472138;

            z-index: 1;

            .card__subtitle {
                width: 100%;
                letter-spacing: .5vw;

                font-size: clamp(.6vw, 1vw, 2vw);
            }
            .card__title {
                width: 100%;
                letter-spacing: 1vw;

                font-weight: 700;
                font-size: clamp(7vw, 1vw, 1vw);
            }
        }

        #carousel-shop {
            width: 100vw;

            margin-top: 10vh;

            .glide__track {
                overflow: visible;
                .glide__slides {
                    overflow: visible;
                    perspective-origin: center;
                    perspective: 90vw;

                    .glide__slide {
                        width: 80vw;

                        filter: blur(1px);
                        opacity: .75;
                        transition: .3s linear;

                        transform: scale(.8);

                        text-align: center;

                        &.glide__slide--active {
                            opacity: 1;

                            filter: none;

                            transform: scale(1.35);
                            transition: .5s ease-in-out;

                            caption {
                                width: 100%;

                                display: block;

                                font-size: 1.2vw;
                                font-family: arial;

                                margin-bottom: 10vh;

                                letter-spacing: .1vw;
                            }
                        }
                        img {
                            width: 100%;
                        }
                        caption {
                            display: none;
                        }
                    }
                }
            }
            .glide__arrows {
                width: 90%;

                position: absolute;

                display: inline-flex;
                justify-content: space-between;
                align-content: center;

                top: 40%;
                left: 4vw;

                @media screen and (max-width: 1023px) {
                    display: none;
                }

                .glide__arrow {
                    width: 4vw;
                    height: 4vw;

                    border-radius: 50%;
                    border: none;
                    outline: none;

                    background-color: white;

                    box-shadow: 0px 0px 20px 1px #00000069,
                    0px 0px 0px 0px rgba(0, 0, 0, .05);

                    &:hover {
                        cursor: pointer;
                    }
                }
            }
        }
    }
</style>