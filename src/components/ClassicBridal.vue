<template>
    <section id="classic-bridal">
        <div class="bridal__image"></div>
        <div class="bridal__card">
            <h1 class="card__title">Classic Bridal</h1>
            <p class="card__text">
                Our extraordinary diamonds are chosen to celebrate a love, a hope and a passion. Brilliantly capturing our passion for diamonds, a member of the family individually hand-selects each stone within our bridal collection, so you can fall in love with a diamond for eternity.
            </p>
            <btnChevron class="card__btn" :text="textBtnChevron" :styleIcon="styleIcon"/>
        </div>
    </section>
</template>

<script>
import btnChevron from '@/components/ChevronButton'

export default {
    name: 'classicBridal',
    components: {
        btnChevron,
    },
    data() {
        return {
            textBtnChevron: 'SHOP NOW',
            styleIcon: {
                color: 'white'
            }
        }
    }
}
</script>

<style lang="scss" scoped>

$marginLeft: 20%;
$marginBot: 2vh;
$widthDiv: 50%;

    #classic-bridal {
        width: 100vw;
        height: 100vh;

        display: inline-flex;

        background-color: #472138;

        .bridal__image {
            width: $widthDiv;
            height: 100%;

            background-image: url('../assets/model.png');
            background-repeat: no-repeat;
            background-size: cover;
            background-position-x: 81%;
        }
        .bridal__card {
            width: 100 - $widthDiv;
            height: 100%;

            display: flex;
            flex-direction: column;

            justify-content: center;
            align-items: flex-start;

            .card__title {
                width: 50%;

                font-weight: 700;
                font-size: 6vw;

                letter-spacing: .3vw;

                margin-bottom: $marginBot;
                margin-left: $marginLeft;

                color: #D5A368;
            }
            .card__text {
                width: 70%;

                font-size: 1.25vw;
                font-family: system-ui;

                font-weight: lighter;
                word-spacing: .2vw;
                letter-spacing: .1vw;
                line-height: 1.75vw;

                margin-bottom: $marginBot + 2;
                margin-left: $marginLeft;

                color: white;
            }
            .card__btn {
                margin-left: $marginLeft;
            }
        }
    }
</style>