import Vue from 'vue'
import App from './App.vue'
import Glide from '@glidejs/glide'
// import './assets/reset/reset.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

new Glide('.glide', {
  type: 'slider',
  startAt: 0,
  gap: 0,
  perView: 1,
  animationDuration: 0,
  keyboard: false,
  perTouch: 0,
}).mount();

new Glide('#category', {
  type: 'carousel',
  startAt: 0,
  perView: 1,
  focusAt: 0,
  keyboard: 'true',
  perTouch: 1,
}).mount();

new Glide('#carousel-shop', {
  type: 'carousel',
  startAt: 2,
  perView: 4,
  focusAt: 'center',
  keyboard: 'true',
  perTouch: 1,
  rewind: true,
  breakpoints: {
    1023: {
      perView: 3,
    },
    767: {
      perView: 2,
    }
  }
}).mount();

new Glide('#collection__carousel', {
  type: 'slider',
  startAt: 0,
  gap: 0,
  perView: 1,
  animationDuration: 0,
  keyboard: false,
  perTouch: 0,
}).mount();


new Glide('#collection__carousel', {
  type: 'slider',
  startAt: 0,
  gap: 0,
  perView: 1,
  animationDuration: 0,
  keyboard: false,
  perTouch: 0,
}).mount();

new Glide('#about-us__carousel', {
  type: 'slider',
  startAt: 'center',
  perView: 3,
  animationDuration: 0,
  keyboard: false,
}).mount();

new Glide('#instagram__carousel', {
  type: 'carousel',
  startAt: 3,
  focusAt: 'center',
  perView: 6,
  gap: 10,
  keyboard: true,
}).mount();