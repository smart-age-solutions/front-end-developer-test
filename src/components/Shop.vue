<template>
    <section id="shop">
         <div class="text-card">
            <h2 class="card__subtitle">SHOP</h2>
            <h1 class="card__title">Selected for You</h1>
        </div>

        <div id="carousel-shop" class="glide">
            <div class="glide__track" data-glide-el="track">
                <ul class="glide__slides">
                    <li class="glide__slide"
                        v-for="image in Images"
                        :key="image.id"
                        :style="{backgroundImage:`url(${image.src})`}"
                    >
                        <caption>{{image.caption}}</caption>
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

    data() {
        return {
            Images: [
                {id: 0, src: require('@/assets/ring-2.png'), caption: 'Lorem Ipsum'},
                {id: 1, src: require('@/assets/ring-silver.png'), caption: 'Lorem Ipsum'},
                {id: 2, src: require('@/assets/ring-amavida.png'), caption: '18K Rose Gold Engagement Ring'},
                {id: 3, src: require('@/assets/ring-ruby-diamond.png'), caption: 'Lorem Ipsum'},
                {id: 4, src: require('@/assets/ring-2.png'), caption: 'Lorem Ipsum'},
            ]
        }
    }
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
                letter-spacing: .5vw;

               font-size: 1.5vw;
               font-family: sans-serif;
            }
            .card__title {
                letter-spacing: 1vw;

                font-weight: 700;
                font-size: 7vw;
            }
        }

        #carousel-shop {
            width: 100%;

            .glide__track {
                .glide__slides {
                    height: 50vh;

                    .glide__slide {
                        filter: blur(1px);
                        opacity: .75;
                        transition: .3s linear;

                        background-size: contain;
                        background-repeat: no-repeat;

                        transform: scale(.7);

                        text-align: center;

                        &.glide__slide--active {
                            opacity: 1;

                            transform: scale(1.1);

                            filter: none;

                            transition: .5s ease-in-out;

                            caption {
                                display: block;

                                position: relative;

                                font-size: 1.2vw;
                                font-family: arial;

                                top: 45vh;

                                letter-spacing: .1vw;
                            }
                        }
                        caption {
                            display: none;
                        }
                    }
                }
            }
            .glide__arrows {
                width: 94%;

                position: absolute;

                display: inline-flex;
                justify-content: space-between;

                margin: 0 2vw;

                top: 50%;

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