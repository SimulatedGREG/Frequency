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
        <span class="right">68%</span>
        <div class="volume">
          <div class="volume-level" style="width: 68%;"></div>
        </div>
      </div>
    </div>
    <div class="primary">
      <i class="material-icons play">play_arrow</i>
    </div>
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