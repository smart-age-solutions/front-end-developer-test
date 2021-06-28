<template>
    <section class="glide">
        <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides">
                <li class="glide__slide">
                    <img src="@/assets/rings.png" alt="Anéis de Casamento">
                    <div class="glide__card">
                        <h1 class="slide__text">Engagement Ring</h1>
                    <btnChevron class="btn_icon" :text="texButton" :styleIcon="styleIcon"/>
                    </div>
                </li>
                <li class="glide__slide">
                    <img src="@/assets/model-2.png" alt="Brinco de Pérola">
                    <div class="glide__card">
                        <h1 class="slide__text">Perola Earing</h1>
                    <btnChevron class="btn_icon" :text="texButton" :styleIcon="styleIcon"/>
                    </div>
                </li>
                <li class="glide__slide">
                    <img src="@/assets/ring-diamond.png" alt="Anéis de Casamento">
                    <div class="glide__card">
                        <h1 class="slide__text">Ring</h1>
                    <btnChevron class="btn_icon" :text="texButton" :styleIcon="styleIcon"/>
                    </div>
                </li>
            </ul>
        </div>

        <div class="glide__bullets" data-glide-el="controls[nav]">
            <button class="glide__bullet" data-glide-dir="=0">1</button>
            <button class="glide__bullet" data-glide-dir="=1">2</button>
            <button class="glide__bullet" data-glide-dir="=2">3</button>

            <div class="line" />

            <div class="side-text">DISCOVER MORE</div>
        </div>
    </section>
</template>

<script>
import btnChevron from '@/components/ChevronButton'

export default {
    name: 'glide',
    components: {
        btnChevron,
    },
    data() {
        return {
            texButton: 'EXPLORE',
            styleIcon: {
                color: 'white',
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import "node_modules/@glidejs/glide/src/assets/sass/glide.core";

$fontSizeDefault: 1vw;

    .glide {
        display: flex;
        flex-direction: row-reverse;

        width: 100%;

        margin-bottom: -37vh;

        z-index: 1;
        .glide__track {
            .glide__slides {

                .glide__slide {
                    width: 100vw;
                    img {
                        width: 100%;
                    }
                    .glide__card {
                        position: relative;

                        left: 5vw;
                        bottom: 33vh;
                        .slide__text {
                            color: white;
                            font-size: $fontSizeDefault * 6;

                            margin-bottom: 2vh;
                        }
                    }
                }
            }
        }
        .glide__bullets {
            width: 6vw;
            height: 100vh;

            margin: auto 0;
            justify-items: center;
            display: flex;
            flex-direction: column;
            align-items: center;

            .glide__bullet {
                width: 3vw;
                height: 3vw;

                font-size: $fontSizeDefault;

                outline: none;
                border: none;

                border-radius: 100%;

                margin-bottom: 1vw;

                background-color: transparent;

                &.glide__bullet--active {
                    border: 1px solid #D5A368;
                }
                &:hover {
                    cursor: pointer;
                }
            }

            .line {
                background-color:#D5A368;

                width: 1px;
                height: 20vh;

                margin-bottom: 3vh;
            }

            .side-text {
                position: relative;

                width: max-content;

                margin-top: 9vh;

                font-size: $fontSizeDefault;

                word-spacing: .1vw;
                letter-spacing: .1vw;

                transform: rotateZ(-90deg);
            }
        }
    }

</style>
