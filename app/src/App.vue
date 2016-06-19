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
  <router-view></router-view>
</template>

<script>
  import store from 'src/vuex/store'

  export default {
    store
  }
</script>
