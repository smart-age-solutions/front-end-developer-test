<template>
    <section class="original-design">
        <div class="design__card">
            <h1 class="card__title">The original Design</h1>
            <p class="card__text">
                Inspired by a spectacular historical legacy and the most refined glamour of the world today.
            </p>
            <btnChevron class="card__btn" :text="textBtnChevron" :styleIcon="styleIcon"/>
        </div>
        <div class="design__image"></div>
    </section>
</template>

<script>
import btnChevron from '@/components/ChevronButton'

export default {
  name: 'originalDesign',
  components: {
      btnChevron,
  },
  data() {
    return {
        textBtnChevron: 'EXPLORE',
        styleIcon: {
            color: 'black',
        }
    }
  }
}
</script>

<style lang="scss" scoped>

$marginLeft: 15%;
$marginBot: 3vh;
$widthDiv: 60%;

    .original-design {
        width: 100vw;
        height: 100vh;

        display: inline-flex;

        background-color: #F9EFE4;

        .design__card {
            width: $widthDiv;
            height: 100%;

            display: flex;
            flex-direction: column;

            justify-content: center;
            align-items: flex-start;

            .card__title {
            width: 60%;

            font-size: 6vw;
            font-weight: 700;

            margin-bottom: $marginBot;
            margin-left: $marginLeft;

            letter-spacing: .3vw;
            word-spacing: .2vw;
            }
            .card__text {
                width: 67%;

                margin-bottom: $marginBot;
                margin-left: $marginLeft;

                font-size: 1.25vw;
                font-family: sans-serif;

                line-height: 3.5vh;

                letter-spacing: .1vw;
            }
            .card__btn {
                margin-left: $marginLeft;
            }
        }
        .design__image {
            width: 100 - $widthDiv;
            height: 100%;

            background-image: url('../assets/relog.png');

            background-repeat: no-repeat;
            background-size: cover;
            background-position-x: 33%;
        }
    }
</style>