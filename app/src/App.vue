<style>
  @import 'https://fonts.googleapis.com/css?family=Roboto|Material+Icons';

  *,
  *:after,
  *:before {
    box-sizing: border-box;
    overflow: hidden;
  }

  ::selection { background: transparent; }

  html,
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
  }

  .left { float: left; }
  .right { float: right; }
</style>

<template>
  <audio v-el:player :src="'file://' + queue[currentSong].path"></audio>
  <router-view></router-view>
</template>

<script>
  import store from 'src/vuex/store'
  import {
    currentSong,
    queue
  } from 'src/vuex/getters'

  export default {
    compiled () {
      window.bindAudio()
    },
    store,
    vuex: {
      getters: {
        currentSong,
        queue
      }
    }
  }
</script>
