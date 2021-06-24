<template>
    <div class="btn-chevron">
        <button class="btn_icon" :style="styleIcon">></button>
        <p class="chevron_text" :style="styleIcon">{{text}}</p>
    </div>
</template>

<script>
export default {
  name: 'btnChevron',
  props: {
    text: {
        type: String,
        default: () => '',
    },
    styleIcon: {
        type: Object,
        default: () => {},
    }
  },

}
</script>

<style lang="scss" scoped>

.btn-chevron {
        display: flex;
        flex-direction: row;

        align-items: center;

        .btn_icon {
            width: 3.5vw;
            height: 3.5vw;

            border-radius: 50%;
            border: 1px solid #D5A368;

            font-size: 1vw;

            background-color: transparent;
            // color: $color;

            &:hover {
                background-color: gray;
            }
        }
        .chevron_text {
            font-size: 1vw;
            margin-left: 1vw;

            // color: $color;
        }
    }
</style>