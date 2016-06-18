<style>
  @import 'https://fonts.googleapis.com/css?family=Roboto|Material+Icons';

  *,
  *:after,
  *:before {
    box-sizing: border-box;
    overflow: hidden;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }

  body {
    -webkit-app-region: drag;
    font-family: 'Roboto', sans-serif;
  }

  .left { float: left; }
  .right { float: right; }
</style>

<template>
  <router-view></router-view>
</template>

<script>
  import store from 'src/vuex/store'

  export default {
    store
  }
</script>
