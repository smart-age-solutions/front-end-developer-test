<template>
    <section id="category" class="glide">
        <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides">
                <li class="glide__slide">
                    <div class="slide__card">
                        <h2 class="card__subtitle">CATEGORY</h2>
                        <h1 class="card__title">Rings</h1>
                    </div>
                    <img src="../assets/ring-diamond.png" :style="styleFirstSlide" alt="ring diamond">
                </li>
                <li class="glide__slide">
                    <img src="../assets/model-2.png" alt="ring diamond">
                </li>
                <li class="glide__slide">
                    <img src="../assets/ring-saphire.png" alt="ring diamond">
                </li>
            </ul>
        </div>

        <div class="glide__arrows" data-glide-el="controls">
            <button class="glide__arrow glide__arrow--right" data-glide-dir=">">></button>
        </div>
    </section>
</template>


<script>

export default {
    name: 'category',

    data() {
        return {
            styleFirstSlide: {
                top: '-26vh',
                left: '7vw',
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import "node_modules/@glidejs/glide/src/assets/sass/glide.core";

$heightDiv: 70vh;

    #category {
        width: 100vw;
        height: $heightDiv;

        .glide__track {
            margin: 1vh 0;

            .glide__slides {
                display: flex;
                flex-direction: row;
                right: 16vw;
                height: $heightDiv - 1;

                .glide__slide {
                    max-width: 100%;
                    overflow: hidden;

                    background-color: white;

                    opacity: .3;

                    &.glide__slide--active {
                        background-color: transparent;
                        opacity: 1;

                        transition: .001 ease-in;
                    }

                    .slide__card {

                        position: relative;

                        top: 50%;

                        text-align: center;
                        color: white;

                        z-index: 1;

                        .card__subtitle {
                            width: 100%;
                            letter-spacing: .5vw;

                            font-size: clamp(.6vw, 1vw, 2vw);
                        }
                        .card__title {
                            width: 100%;
                            letter-spacing: 1vw;

                            font-size: clamp(7vw, 1vw, 1vw);
                        }
                    }
                    img {
                        width: 100vw;

                        position: relative;

                        top: -8vh;
                    }
                }
            }
        }
        .glide__arrows {
            width: 100vw;

            position: relative;

            bottom: $heightDiv / 2;
            left: 90%;

            .glide__arrow {
                width: 4vw;
                height: 4vw;

                border-radius: 50%;
                outline: none;
                border: none;

                top: 50%;

                background-color: white;

                box-shadow: 0px 0px 20px 1px #00000069,
                0px 0px 0px 0px rgba(0, 0, 0, .05);

                &:hover {
                    cursor: pointer;
                }
            }
        }
    }
</style>