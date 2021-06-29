<template>
    <section class="jewelry-store">
        <div class="jewelry_container">
            <div class="container_text_up">THE LATEST FROM</div>
            <h1 class="container_title">Jewelry Store</h1>
            <p class="container_text">Discover all that’s new, brilliant and beautiful in the world of Brand's Name.</p>
            <btnChevron :text="textBtnChevron" :styleIcon="styleIcon"/>
        </div>
    </section>
</template>

<script>
import btnChevron from '@/components/ChevronButton'

export default {
    name: 'jewelryStore',
    components: {
        btnChevron,
    },
    data() {
        return {
            textBtnChevron: 'SEE MORE',
            styleIcon: {
                color: 'black'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .jewelry-store {
        width: 100vw;
        background-color: white;

        .jewelry_container {
            height: 30vh;
            margin: 9vh 5vw;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;

            .container_text_up {
                font-size: 1.4vw;
                font-family: sans-serif;
                font-weight: 100;

                letter-spacing: .3vw;
            }
            .container_title {
                font-size: 5vw;
                font-weight: 700;

                letter-spacing: .5vw;

                color: #D5A368;
            }
            .container_text {
                font-size: 1.35vw;
                font-family: sans-serif;

                letter-spacing: .1vw;
            }
        }
    }
</style>