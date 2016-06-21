<style lang="scss">
  i:active { color: white!important; }

  .bg {
    background-position: center !important;
    background-size: cover !important;
    height: 512px;
    width: 512px;
    -webkit-app-region: drag;
  }

  .bottom {
    bottom: 0;
    left: 50%;
    margin-bottom: 20px;
    position: absolute;
    transform: translateX(-50%);
    width: calc(100% - 40px);
    -webkit-app-region: no-drag;
  }

  .bottom-bg {
    background-position: center bottom;
    background-size: cover;
    bottom: 0;
    filter: blur(6px);
    height: 144px;
    position: absolute;
    width: 100%;
  }
</style>

<template>
  <div class="bg" :style="{ backgroundImage: 'url(' + artwork + ')' }">
    <div class="bottom-bg" :style="{ backgroundImage: 'linear-gradient(rgba(0 ,0 ,0, .6), rgba(0 ,0 ,0, .6)),' + 'url(' + artwork + ')' }"></div>
    <div class="bottom">
      <duration></duration>
      <div>
        <info></info>
        <controls></controls>
      </div>
    </div>
  </div>
</template>

<script>
  import Controls from './NowPlayingView/Controls'
  import Duration from './NowPlayingView/Duration'
  import Info from './NowPlayingView/Info'
  import fs from 'fs'
  import mm from 'musicmetadata'
  import {
    currentSong,
    queue
  } from 'src/vuex/getters'

  export default {
    components: {
      Controls,
      Duration,
      Info
    },
    data () {
      return {
        artwork: 0
      }
    },
    methods: {
      getArtwork () {
        mm(fs.createReadStream(this.queue[this.currentSong].path), (err, metadata) => {
          if (err) console.log(err)

          this.artwork = `data:image/${metadata.picture[0].format};base64,` + btoa(String.fromCharCode.apply(null, (metadata.picture[0].data)))
        })
      }
    },
    ready () {
      this.$player.addEventListener('play', e => this.getArtwork(e))
    },
    vuex: {
      getters: {
        currentSong,
        queue
      }
    },
    watch: {
      'currentSong' () {
        this.getArtwork()
      }
    }
  }
</script>
