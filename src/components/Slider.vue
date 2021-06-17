<template>
    <div class="glide">
        <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides">
                <li class="glide__slide">
                    <img src="../assets/rings.png" alt="">
                </li>
                <li class="glide__slide">
                    <img src="../assets/model-2.png" alt="">
                </li>
                <li class="glide__slide">
                    <img src="../assets/ring-saphire.png" alt="">
                </li>
            </ul>
        </div>

        <div class="glide__bullets" data-glide-el="controls[nav]">
            <button class="glide__bullet" data-glide-dir="=0">1</button>
            <button class="glide__bullet" data-glide-dir="=1">2</button>
            <button class="glide__bullet" data-glide-dir="=2">3</button>

            <div class="line"></div>

            <div class="side-text">DISCOVER MORE</div>
        </div>
    </div>
</template>

<style lang="scss">
@import "node_modules/@glidejs/glide/src/assets/sass/glide.core";

    .glide {
        display: flex;
        flex-direction: row-reverse;

        width: 100vw;
        height: 70vw;

        background: #FFFFFF;

        border: 1px solid black;

        .glide__track {
            .glide__slides {
                .glide__slide {
                    width: 100%;
                    height: 100%;

                    img {
                        width: 90%;

                    }

                    background-color: #FFFFFF;
                }
            }
        }
        .glide__bullets {
            height: 9.5rem;

            background-color: #FFFFFF;

            margin: 8.625rem 1.25rem 0 1.25rem;

            .glide__bullet {
                width: 2.5rem;
                height: 2.5rem;

                outline: none;
                border: none;

                border-radius: 100%;

                margin-bottom: 1rem;

                background-color: transparent;

                &:focus, &:active {
                    border: 1px solid #D5A368;
                }
            }

            .line {
                margin: 0 auto;

                background-color:#D5A368;

                width: 1px;
                height: 9.375rem;
            }

            .side-text {
                transform: rotateZ(-90deg);

                width: 2rem;
                margin: 9rem 0

            }
        }
    }

</style>

<script>

export default {
    name: 'glide',
}
</script>
