<template>
  <div id="app">
    <header id="header">
      <div class="header__vectors">
        <button class="vectors__location">
          <div class="location__icon"></div>
          <div class="location__text">Find a Store</div>
        </button>
        <div class="vectors__icons">
          <div class="icons__user"></div>
          <div class="icons__hearth"></div>
          <div class="icons__bag"></div>
          <div class="icons__search"></div>
        </div>
      </div>
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
    <shop/>
    <collection />
    <aboutUs />
    <events />
    <instagram />
    <stores />
  </div>
</template>

<script>

import glide from '@/components/Slider'
import originalDesign from '@/components/OriginalDesignPage'
import jewelryStore from '@/components/JewelryStore'
import classicBridal from '@/components/ClassicBridal'
import category from '@/components/Category'
import shop from '@/components/Shop'
import collection from '@/components/Collection'
import aboutUs from '@/components/AboutUs'
import events from '@/components/Events'
import instagram from '@/components/Instagram'
import stores from '@/components/Stores'

export default {
  name: 'App',
  components: {
    glide,
    originalDesign,
    jewelryStore,
    classicBridal,
    category,
    shop,
    collection,
    aboutUs,
    events,
    instagram,
    stores,
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

<style lang="scss" scoped>

$bg-general: #FFFFFF;
$font-color-general: #000000;
$bg-bage: #F9EFE4;
$font-color-primary: #D5A368;
$bg-seconday: #472138;
$bg-instagram: #999595;
$bg-contact: #333333;

#app {
  overflow: hidden;
  #header {
    width: 100vw;
    height: 20vh;

    display: flex;
    flex-direction: column;

    justify-content: space-around;
    align-items: center;

    .header__vectors {
      width: 100%;

      display: inline-flex;

      justify-content: space-between;
      align-items: center;

      .vectors__location {
        .location__icon {
          background-image: url('../src/assets/location-vector.png');
        }
        .location__text {
          font-size: 1.2vw;
        }
      }
      .vectors__icons {
        .icons__users {
          background-image: url('../src/assets/user-vector.png');
        }
        .icons__hearth {
          background-image: url('../src/assets/hearth-vector.png');
        }
        .icons__bag {
          background-image: url('../src/assets/bag-vector.png');
        }
        .icons__search {
          background-image: url('../src/assets/search-vector.png');
        }
      }
    }

    #logo {
      display: block;

      width: 20%;

      margin: 0 auto;
    }
    #navbar {
      width: 45%;

      margin: 0 auto;
      padding: 2.5vh 0;

      display: flex;
      flex-direction: row;

      justify-content: space-between;
      align-items: center;

      li {
        list-style: none;

        .options {
          font-size: .8vw;
          font-family: Raleway;

          text-decoration: none;

          color: $font-color-general;
        }
      }
    }
  }
}
</style>
