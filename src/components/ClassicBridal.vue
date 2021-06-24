<template>
    <section class="classic-bridal">
        <div class="classic_container">
            <div class="container_card">
                <h1 class="card_title">Classic Bridal</h1>
                <p class="card_text">
                    Our extraordinary diamonds are chosen to celebrate a love, a hope and a passion. Brilliantly capturing our passion for diamonds, a member of the family individually hand-selects each stone within our bridal collection, so you can fall in love with a diamond for eternity.
                </p>
                <btnChevron :text="textBtnChevron" :styleIcon="styleIcon"/>
            </div>
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
    .classic-bridal {
        max-width: 100vw;
        height: 100vh;
        background-color: #472138;
        color: white;
        background-image: url(../assets/model.png);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: -30vw 0;

        .classic_container {
            background-color: #472138;
            position: relative;
            left: 53vw;
            max-width: 50%;
            height: 100vh;

            .container_card {
                position: absolute;

                margin-top: 25%;
                margin-left: 25%;

                .card_title {
                    max-width: 20vw;
                    font-weight: 700;
                    font-size: 4vw;

                    color: #D5A368;

                    margin-bottom: 2vh;
                }
                .card_text {
                    max-width: 26vw;

                    font-size: clamp(1.2vw, 1vw, 2vw);

                    margin-bottom: 4vh;
                }

            }
        }
    }
</style>