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
    <span class="left">1:33</span>
    <span class="right">5:42</span>
  </div>
  <div class="progress-bar">
    <div class="progress" style="width: 37%;"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    }
  }
</script>
