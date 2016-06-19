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
  <audio v-el:player :src="songPath"></audio>
  <router-view></router-view>
</template>

<script>
  import store from 'src/vuex/store'

  export default {
    data () {
      return {
        songPath: 'file:///Volumes/MEDIA/Music/All Sons & Daughters/Season One/01 Alive.mp3'
      }
    },
    store
  }
</script>
