import Vue from 'vue'
import App from './App.vue'
import Glide from '@glidejs/glide'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

new Glide('.glide', {
  type: 'slider',
  startAt: 0,
  gap:0,
  perView: 1,
  animationDuration: 0,
  keyboard: false,
}).mount();

new Glide('#category', {
  type: 'carousel',
  startAt: 0,
  perView: 1,
  focusAt: 0,
  keyboard: 'true',
  perTouch: 1,
}).mount();