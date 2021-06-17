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
    <div class="parte-two"></div>

  </div>
</template>

<script>

import glide from '@/components/Slider'

export default {
  name: 'App',
  components: {
    glide
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
* {
  padding: 0;
  margin: 0;
}
#app {
  width: 100vw;
  height: auto;

  #header {
    width:100%;
    height: 11.4375rem;

    border: 1px solid black;

    #logo {
      display: block;

      width: 30%;
      height: 30%;

      margin: 3rem auto 1rem auto;
    }
    #navbar {
      width: 50%;
      height: auto;

      margin: .2rem auto 1.375rem auto;

      display: flex;
      flex-direction: row;

      justify-content: space-between;
      align-items: center;

      padding: 1rem 0 .7rem 0;
      li {
        list-style: none;

        .options {
          font-size: .875rem;
          font-family: Raleway;
          font-style: Medium;

          letter-spacing: 10%;

          text-decoration: none;

          color: $font-color-general;
        }
      }
    }
  }
  .parte-two {
    background-color: $font-color-primary;

    width: 100vw;
    height: 100vh;

  }
}
</style>
