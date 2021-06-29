<template>
    <section id="instagram">
         <div class="instagram__card">
            <h2 class="card__title">Instagram</h2>
            <h1 class="card__email">@smartshop</h1>
        </div>

        <div id="instagram__carousel" class="glide">
            <div class="glide__track" data-glide-el="track">
                <ul class="glide__slides">
                    <li class="glide__slide" v-for="image in Images" :key="image.id">
                        <img :src="image.src" :alt="image.alt">
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
    name: 'instagram',

    data() {
        return {
            Images: [
                {id: 0, src: require(`@/assets/ring-hand.png`), alt: 'Aliança de casamento na mão'},
                {id: 1, src: require(`@/assets/ring-saphire.png`), alt: 'Anel de safira'},
                {id: 2, src: require(`@/assets/saphire-diamond.png`), alt: 'Anel de safira e diamante'},
                {id: 3, src: require(`@/assets/model-5.png`), alt: 'Corrente de ouro'},
                {id: 4, src: require(`@/assets/model-6.png`), alt: 'Anéis de bijuterias'},
                {id: 5, src: require(`@/assets/saphire-diamond.png`), alt: 'Anel de safira e diamante'},
                {id: 6, src: require(`@/assets/ring-hand.png`), alt: 'Anel na mão'},
            ],
        }
    }
}
</script>

<style lang="scss" scoped>
@import "node_modules/@glidejs/glide/src/assets/sass/glide.core";

    #instagram {
        width: 100vw;
        background-color: #F2F2F2;

        .instagram__card {
            padding-top: 5vh;
            text-align: center;

            .card__title {
                font-size: 6vw;
                font-weight: 700;

                color: #472138;

                &::after {
                    content: '';

                    display: block;

                    width: 2vw;
                    height: 2vw;

                    position: relative;

                    top: -3vw;
                    left: 33vw;

                    background-image: url('../assets/instagram-vector.png');
                    background-size: contain;
                    background-repeat: no-repeat;
                }
            }
            .card__email {
                font-size: 3vw;
            }
        }
        #instagram__carousel {
            width: 100%;

            .glide__track {
                .glide__slides {
                    align-items: center;
                    width: 100%;
                    height: 35vh;
                    .glide__slide {
                        width: 35vw;
                        height: 46%;
                        overflow: hidden;

                        &.glide__slide--active {
                            transform: scale(1.7);
                            transition: .5s ease-in-out;

                            border: 4px solid white;

                            img {
                                width: 150%;
                            }
                        }
                        img {
                            width: 100%;
                        }
                    }
                }
            }
            .glide__arrows {
                width: 98%;

                position: absolute;

                display: inline-flex;

                justify-content: space-between;
                top: 40%;

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
