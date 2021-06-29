<template>
  <div id="app">
    <header id="header">
      <div class="header__vectors">
        <button class="vectors__location">
          <div class="location__icon" :style="styleVector"></div>
          <div class="location__text">Find a Store</div>
        </button>
        <div class="vectors__icons">
          <button class="icons__user" :style="styleVector"></button>
          <button class="icons__hearth" :style="styleVector"></button>
          <button class="icons__bag" :style="styleVector"></button>
          <button class="icons__search"><div class="search" :style="styleVector"></div></button>
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
import originalDesign from '@/components/OriginalDesign'
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
      styleVector: {
        width: '2vw',
        height: '3vh',
        outline: 'none',
        border: 'none',
        margin: 'auto',
        'background-color' : 'transparent',
        'background-size' : 'contain',
        'background-repeat' : 'no-repeat',
      }
    }
  },
}
</script>

<style lang="scss" scoped>

@import '../src/assets/reset/reset.css';

#app {
  overflow: hidden;
  #header {
    width: 100vw;
    height: 25vh;

    display: flex;
    flex-direction: column;

    justify-content: space-around;
    align-items: center;

    .header__vectors {
      width: 96%;

      display: inline-flex;

      justify-content: space-between;
      align-items: center;

      margin-top: 2.5vh;

      .vectors__location {
        display: inline-flex;
        align-items: center;

        border: 1px solid lightgrey;
        border-radius: 2vw;

        padding: 1vh 2vw;

        outline: none;

        background-color: transparent;

        .location__icon {
          background-image: url('../src/assets/location-vector.png');
        }
        .location__text {
          font-size: 1.2vw;
          font-weight: 500;
          font-family: system-ui;
        }

        &:hover {
          cursor: pointer;

          transition: .2s ease-in-out;

          background-color: lightgray;
        }
      }
      .vectors__icons {
        width: 20vw;

        display: inline-flex;
        align-items: center;
        justify-content: space-around;

        .icons__user {
          background-image: url('../src/assets/user-vector.png');

          &:hover {
            cursor: pointer;
          }
        }
        .icons__hearth {
          background-image: url('../src/assets/hearth-vector.png');

          &:hover {
            cursor: pointer;
          }
        }
        .icons__bag {
          background-image: url('../src/assets/bag-vector.png');

          &:hover {
            cursor: pointer;
          }
        }
        .icons__search {
          background-color: #F2F2F2;

          outline: none;
          border: none;
          border-radius: 50%;

          width: 4vw;
          height: 4vw;

          margin-left: 3vw;

          .search {
            background-image: url('../src/assets/search-vector.png');
            background-position: 50%;
          }

          &:hover {
            cursor: pointer;

            transition: .2s ease-in-out;

            background-color: lightgray;
          }
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
          font-size: 1vw;
          font-family: system-ui;
          font-weight: 500;

          text-decoration: none;

          color: black;
        }
      }
    }
  }
}
</style>
