<style lang="scss" scoped>
  .markers {
    color: #ecf0f1;
    margin-bottom: 6px;
  }

  .progress-bar {
    background-color: #ecf0f1;
    cursor: pointer;
    height: 4px;
    margin-bottom: 20px;
    position: relative;
    transition: transform 100ms ease-in-out;
    width: 100%;

    &:hover {
      transform: scaleY(3.8);

      .progress { transform: scaleY(3.8); }
    }
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
  <div class="progress-bar" v-el:current-time>
    <div class="progress" :style="{ width: progress + '%' }"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        currentTime: 0,
        currentTimeDrag: false,
        duration: 0,
        progress: 0
      }
    },
    filters: {
      timeStamp (time) {
        time = Math.floor(time)
        let mins = time >= 60 ? ~~(time / 60) : 0
        let secs = time - (mins * 60)
        return `${mins}:${secs < 10 ? '0' + secs : secs}`
      }
    },
    methods: {
      adjustCurrentTime ({ offsetX }, type) {
        switch (type) {
          case 'md':
            this.currentTimeDrag = true
            break
          case 'mu':
            this.currentTimeDrag = false
            break
          case 'ml':
            this.currentTimeDrag = false
        }

        if (this.currentTimeDrag) this.progress = ((Number(offsetX / 472) * this.duration) / this.duration) * 100
        if (type === 'mu') this.updateCurrentTime(true)
        if (type === 'mm') this.updateCurrentTime(false)
      },
      bindCurrentTimeEvents () {
        this.$els.currentTime.addEventListener('mousedown', e => this.adjustCurrentTime(e, 'md'))
        this.$els.currentTime.addEventListener('mouseleave', e => this.adjustCurrentTime(e, 'ml'))
        this.$els.currentTime.addEventListener('mousemove', e => this.adjustCurrentTime(e, 'mm'))
        this.$els.currentTime.addEventListener('mouseup', e => this.adjustCurrentTime(e, 'mu'))
      },
      updateCurrentTime (update) {
        this.currentTime = (this.progress / 100) * this.duration
        if (update) this.$player.currentTime = this.currentTime
      },
      updateDuration (e) {
        this.duration = e.target.duration

        if (!this.currentTimeDrag) {
          this.currentTime = e.target.currentTime
          this.progress = (this.currentTime / this.duration) * 100
        }
      }
    },
    ready () {
      this.bindCurrentTimeEvents()
      this.$player.addEventListener('timeupdate', e => this.updateDuration(e))
    }
  }
</script>
