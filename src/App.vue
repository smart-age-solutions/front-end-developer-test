<template>
  <div id="app">
    <header id="header">
      <img id="logo" src="../src/assets/smart-age-logo.svg" alt="logotipo do Smart Age Solutions">
      <nav id="navbar">
        <li v-for="option in navOptions" :key="option.id">
          <a class="options" :href="option.link">{{ option.name }}</a>
        </li>
      </nav>
    </header>
    <glide />
    <originalDesign />
    <jewelryStore />
    <classicBridal />
    <category />
  </div>
</template>

<script>

import glide from '@/components/Slider'
import originalDesign from '@/components/OriginalDesignPage'
import jewelryStore from '@/components/JewelryStore'
import classicBridal from '@/components/ClassicBridal'
import category from '@/components/Category'

export default {
  name: 'App',
  components: {
    glide,
    originalDesign,
    jewelryStore,
    classicBridal,
    category

  },
  data() {
    return {
      navOptions: [
        { id: 0, name: 'COLLECTIONS', link: '#collection' },
        { id: 1, name: 'CATEGORIES', link: '#category' },
        { id: 2, name: 'STORES', link: '#store' },
        { id: 3, name: 'OUR STORY', link: '#ourstory' },
        { id: 4, name: 'CONTACT', link: '#contact' }
      ],
    }
  },
}
</script>

<style lang="scss">

$bg-general: #FFFFFF;
$font-color-general: #000000;
$bg-bage: #F9EFE4;
$font-color-primary: #D5A368;
$bg-seconday: #472138;
$bg-instagram: #999595;
$bg-contact: #333333;
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
#app {
  overflow: hidden;
  #header {
    width: 100vw;
    height: 20vh;

    #logo {
      display: block;

      height: 30%;

      padding-top: 7vh;
      margin: 0 auto;
    }
    #navbar {
      width: 50%;

      margin: 0 auto;
      padding-top: 3vh;

      display: flex;
      flex-direction: row;

      justify-content: space-between;
      align-items: center;

      li {
        list-style: none;

        .options {
          font-size: 1vw;
          font-family: Raleway;

          text-decoration: none;

          color: $font-color-general;
        }
      }
    }
  }
}
</style>
