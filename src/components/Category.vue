<template>
    <section id="category" class="glide">
        <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides">
                <li class="glide__slide"
                    v-for="image in Images"
                    :key="image.id"
                    :style="{backgroundImage:`url(${image.src})`}"
                >
                    <div class="slide__card">
                        <h2 class="card__subtitle">{{image.subtitle}}</h2>
                        <h1 class="card__title">{{image.title}}</h1>
                    </div>
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
            Images: [
                {id: 0, src: require('@/assets/ring-diamond.png'), subtitle: 'CATEGORY', title: 'Rings'},
                {id: 1, src: require('@/assets/model-2.png'), subtitle: '', title: ''},
                {id: 2, src: require('@/assets/ring-saphire.png'), subtitle: '', title: ''},
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import "node_modules/@glidejs/glide/src/assets/sass/glide.core";

$heightDiv: 70vh;

    #category {
        width: 100vw;

        .glide__track {
            margin: 1vh 0;

            .glide__slides {
                height: $heightDiv - 1;

                .glide__slide {
                    background-size: 110%;
                    background-repeat: no-repeat;
                    background-position-y: 50%;

                    opacity: .3;

                    &.glide__slide--active {
                        background-color: transparent;
                        opacity: 1;
                    }

                    .slide__card {
                        position: relative;

                        top: 50%;

                        text-align: center;

                        color: white;
                        .card__subtitle {
                            letter-spacing: .5vw;

                            font-size: 1.1vw;
                            font-family: sans-serif;
                        }
                        .card__title {
                            letter-spacing: 1vw;

                            font-size: 7vw;
                            font-weight: 700;
                        }
                    }
                }
            }
        }
        .glide__arrows {
            width: 100%;

            position: relative;

            bottom: $heightDiv / 2;
            left: 94%;

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