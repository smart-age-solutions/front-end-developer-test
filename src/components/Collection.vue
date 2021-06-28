<template>
    <section id="collection">
        <h1 class="collection__title">Collections</h1>

        <div id="collection__carousel" class="glide">
            <div class="glide__track" data-glide-el="track">
                <ul class="glide__slides">
                    <li class="glide__slide">
                        <img src="../assets/model-3.png" alt="ring diamond">
                        <btnChevron class="glide__btn__img" :text="textButtonImg"  :style="styleIcon" />
                    </li>
                    <li class="glide__slide">
                        <img src="../assets/model-3.png" alt="ring diamond">
                        <btnChevron class="glide__btn__img" :text="textButtonImg" :style="styleIcon" />
                    </li>
                    <li class="glide__slide">
                        <img src="../assets/model-3.png" alt="ring diamond">
                        <btnChevron class="glide__btn__img" :text="textButtonImg" :style="styleIcon" />
                    </li>
                </ul>
            </div>

            <div class="glide__bullets" data-glide-el="controls[nav]">
                <button class="glide__bullet" data-glide-dir="=0">SWIRL RINGS</button>
                <button class="glide__bullet" data-glide-dir="=1">BUTTERFLY</button>
                <button class="glide__bullet" data-glide-dir="=2">CARISSA</button>
            </div>
        </div>
        <btnChevron class="btn__icon" :text="textBtnChevron" :styleIcon="styleIcon" />
    </section>
</template>

<script>
import btnChevron from '@/components/ChevronButton'

export default {
    name: 'collection',
    components: {
        btnChevron,
    },
    data() {
        return {
            textBtnChevron: 'VIEW ALL',
            textButtonImg: 'VIEW MORE',
            styleIcon: {
                color: 'black',
            },
        }
    }
}
</script>


<style lang="scss" scoped>
@import "node_modules/@glidejs/glide/src/assets/sass/glide.core";

$fontSizeDefault: 1vw;

    #collection {
        width: 100vw;
        height: 60vh;

        background-color: #D5A368;

        overflow: visible;

        .collection__title {
            position: relative;

            top: 17vh;
            left: 9vw;

            letter-spacing: 0.2vw;

            font-size: 6vw;
            font-weight: 700;

            z-index: 1;
        }
        #collection__carousel {
            display: flex;
            flex-direction: row-reverse;

            width: 100%;

            top: 4vh;
            left: 8vw;

            position: relative;

            .glide__track {
                .glide__slides {
                    .glide__slide {
                        img {
                            width: 67%;
                        }
                        .glide__btn__img {
                            position: relative;

                            bottom: 8vh;
                            left: 2vw;

                            letter-spacing: .1vw;
                        }
                    }
                }
            }
            .glide__bullets {
                width: 69vw;
                height: 22vh;

                justify-content: space-around;
                display: flex;
                flex-direction: column;
                align-items: flex-start;

                margin-top: 17vh;
                padding-right: 3vw;

                .glide__bullet {
                    font-size: 1.5vw;

                    outline: none;
                    border: none;

                    letter-spacing: .5vw;

                    background-color: transparent;

                    &.glide__bullet--active {
                        color: #8D6638;

                        &::after {
                            content: '';

                            display: block;

                            width: 7vw;
                            height: 1px;

                            position: relative;

                            background-color: #8D6638;

                            left: 18vw;
                            bottom: 50%;
                        }
                    }
                }
            }
        }
        .btn__icon {
            position: relative;

            bottom: 24vh;
            left: 8vw;

            letter-spacing: .1vw;
        }
    }

</style>