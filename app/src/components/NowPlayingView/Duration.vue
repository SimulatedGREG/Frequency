<style lang="scss" scoped>
  .markers {
    color: #ecf0f1;
    margin-bottom: 6px;
  }

  .progress-bar {
    background-color: #ecf0f1;
    height: 4px;
    margin-bottom: 20px;
    position: relative;
    width: 100%;
  }

  .progress {
    background-color: #95a5a6;
    height: 4px;
    position: absolute;
  }
</style>

<template>
  <div class="markers">
    <span class="left">{{ currentTime | timeStamp }}</span>
    <span class="right">{{ duration | timeStamp }}</span>
  </div>
  <div class="progress-bar">
    <div class="progress" :style="{ width: progress + '%' }"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        currentTime: '0:00',
        duration: '0:00',
        progress: 0
      }
    },
    filters: {
      timeStamp (time) {
        time = Math.floor(time)
        let mins = time >= 60 ? ~~(time / 60) : 0
        let secs = time - (mins * 60)
        return `${mins}:${secs}`
      }
    },
    methods: {
      updateDuration (e) {
        this.currentTime = e.target.currentTime
        this.duration = e.target.duration
        this.progress = (this.currentTime / this.duration) * 100
      }
    },
    ready () {
      this.$player.addEventListener('timeupdate', e => this.updateDuration(e))
    }
  }
</script>
