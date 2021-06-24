<template>
    <section class="original-design">
        <div class="original_container">
            <div class="container_card">
                <h1 class="container_title">The original Design</h1>
                <p class="container_text">
                    Inspired by a spectacular historical legacy and the most refined glamour of the world today.
                </p>
                <btnChevron class="btn_icon" :text="textBtnChevron" :styleIcon="styleIcon"/>
            </div>
        </div>
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
$bg-color: #F9EFE4;
    .original-design {
        height: 100vh;
        background-color: $bg-color;
        background-image: url(../assets/relog.png);
        background-repeat: no-repeat;
        background-size: 83%;
        background-position: 43vw 10vh;

        .original_container {
            background-color: $bg-color;
            width: 55%;
            height: 100%;

            .container_card {
                position: relative;
                max-width: 28vw;
                left: 10vw;
                top: 40vh;
                .container_title {
                font-size: 5vw;
                font-weight: 700;
                margin-bottom: 2vh;

                }
                .container_text {
                    margin-bottom: 2vh;
                    font-size: 1.25vw;
                }
                .btn_icon {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                }
            }
        }

  }
</style>