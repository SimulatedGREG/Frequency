<style lang="scss" scoped>
  span {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 90%;
  }

  .title {
    color: #ecf0f1;
    font-size: 32px;
  }

  .artist {
    color: #95a5a6;
    font-size: 18px;
  }

  .left { width: 236px; }
</style>

<template>
  <div class="left">
    <span class="title">{{ queue[currentSong].title }}</span>
    <span class="artist">{{ queue[currentSong].artist }}</span>
  </div>
</template>

<script>
  import { playByAlbum } from 'src/vuex/actions'
  import {
    currentSong,
    queue
  } from 'src/vuex/getters'

  export default {
    ready () {
      this.playByAlbum('Season One')
    },
    vuex: {
      actions: { playByAlbum },
      getters: {
        currentSong,
        queue
      }
    }
  }
</script>
