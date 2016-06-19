<style lang="scss" scoped>
  i { cursor: pointer; }

  .primary {
    display: inline-block;
  }

  .primary i {
    color: #ecf0f1;
    font-size: 42px;
  }

  .play {
    background-color: rgba(#95a5a6, .8);
    border-radius: 50%;
    padding: 6px;

    &:hover { background-color: #95a5a6; }
  }

  .alt {
    display: inline-block;
    margin-right: 20px;
    vertical-align: super;

    span {
      color: #ecf0f1;
      font-size: 12px;
      padding-bottom: 3px;
    }
  }

  .flex {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 6px;

    i {
      border-radius: 50%;
      color: #ecf0f1;
      padding: 4px;

      &:hover { background-color: #95a5a6; }
    }
  }

  .volume {
    background-color: #ecf0f1;
    clear: both;
    height: 4px;
    position: relative;
    width: 100px;
  }

  .volume-level {
    background-color: #95a5a6;
    height: 4px;
    position: absolute;
  }
</style>

<template>
  <div class="right">
    <div class="alt">
      <div class="flex">
        <i class="material-icons">repeat</i>
        <i class="material-icons">skip_previous</i>
        <i class="material-icons">skip_next</i>
      </div>
      <div class="volume-wrapper">
        <span class="left">Volume</span>
        <span class="right">{{ volumeLevel }}</span>
        <div class="volume" @click="adjustVolume">
          <div class="volume-level" :style="{ width: volumeLevel }"></div>
        </div>
      </div>
    </div>
    <div class="primary">
      <i class="material-icons play" @click="togglePlayback">
        <span v-if="isPlaying">pause</span>
        <span v-else>play_arrow</span>
      </i>
    </div>
  </div>
</template>

<script>
  import { library } from 'src/vuex/getters'

  export default {
    computed: {
      files () {
        return Object.keys(this.library)
      },
      volumeLevel () {
        return (this.volume * 100).toString() + '%'
      }
    },
    data () {
      return {
        isPlaying: false,
        player: this.$root.$els.player,
        volume: 0.3
      }
    },
    methods: {
      adjustVolume (e) {
        console.log(e)
      },
      togglePlayback () {
        if (this.isPlaying) this.player.pause()
        else this.player.play()

        this.isPlaying = !this.isPlaying
      }
    },
    vuex: {
      getters: { library }
    },
    watch: {
      'volume' (val) {
        this.player.volume = val
      }
    }
  }
</script>
