<template>
    <section id="events">
        <div class="events__text">
            <h2 class="text__subtitle">EVENTS</h2>
            <h1 class="text__title">Meet us at:</h1>
        </div>
        <div class="events__card">
            <div class="events__card--format" v-for="event in Events" :key="event.id">
                <hr>
                <div class="card__info">
                    <div class="info__date">
                        <p class="date__month">{{event.month}}</p>
                        <p class="date__day">{{event.day}}</p>
                    </div>
                    <div class="info__location">
                        <p class="location__mark">{{event.mark}}</p>
                        <p class="location__address">{{event.address}}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'events',
    data() {
        return {
            Events: [
                {
                    id: 0,
                    month: "APRIL",
                    day: "19-20th",
                    mark: "The Shops at Chestnut Hill",
                    address: "Bloomingdale's, Chestnut Hill, MA"
                },
                {
                    id: 1,
                    month: "APRIL",
                    day: "9th",
                    mark: "Stuart Kingston Retailer",
                    address: "3704 Kennett Pike Suite 450 Greenville, DE 19807"
                },
                {
                    id: 2,
                    month: "APRIL",
                    day: "19-20th",
                    mark: "The Shops at Chestnut Hill",
                    address: "Bloomingdale's, Chestnut Hill, MA"
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

$colorText: #D5A368;
$fontWeight: 700;
$fontSubtitle: sans-serif;
$marginCardsInfo: 2vh 0;

    #events {
        width: 100vw;
        height: 55vh;

        margin-top: 25vh;

        display: flex;

        flex-wrap: wrap;
        justify-content: space-evenly;

        .events__text {
            .text__subtitle {
                font-size: 1.1vw;
                font-family: $fontSubtitle;

                letter-spacing: .2vw;

                margin-bottom: 2vh;
            }
            .text__title {
                font-size: 4vw;
                font-weight: $fontWeight;

                letter-spacing: .2vw;

                color: $colorText;
            }
        }
        .events__card {
            display: flex;

            flex-direction: column;
            justify-content: space-around;

            width: 35vw;
            height: 35vh;

            .events__card--format {
                hr {
                    opacity: .3;

                }
                .card__info {
                    display: flex;
                    flex-wrap: wrap;

                    justify-content: space-between;
                    align-items: center;

                    .info__date {
                        margin: $marginCardsInfo;

                        .date__month {
                            font-size: 1.1vw;
                            font-family: $fontSubtitle;
                            letter-spacing: .1vw;
                        }
                        .date__day {
                            font-size: 2.5vw;
                            font-weight: 900;

                            color: $colorText;
                        }
                    }
                    .info__location {
                        width: 70%;

                        text-align: left;

                        margin: $marginCardsInfo;

                        .location__mark {
                            font-family: system-ui;
                            font-weight: $fontWeight;
                            font-size: 1.7vw;

                            letter-spacing: .1vw;
                        }
                        .location__address {
                            font-family: system-ui;
                            font-size: 1.25vw;

                            letter-spacing: .1vw;

                            color: gray;
                        }
                    }
                }
            }

        }
    }
</style>