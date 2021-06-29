<template>
    <div class="btn-chevron">
        <button class="btn_icon" :style="[styleIcon, colorIcon]">></button>
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
    },
    colorIcon: {
        type: Object,
        default: () => {},
    }
  },

}
</script>

<style lang="scss" scoped>

.btn-chevron {
        display: inline-flex;

        align-items: center;

        .btn_icon {
            width: 3vw;
            height: 3vw;

            border-radius: 50%;
            border: 1px solid #D5A368;

            font-size: 1vw;

            background-color: transparent;

            &:hover {
                cursor: pointer;

                background-color: rgba(255, 255, 255, .3);
            }
        }
        .chevron_text {
            font-family: sans-serif;
            font-size: 1vw;

            letter-spacing: .2vw;

            margin-left: 1vw;
        }
    }
</style>