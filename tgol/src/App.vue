<template>
  <div id="app">
    <div class="row" style="height: 500px">
      <div class="col m-2">
        <TheGameOfLife :rows="rows" :cols="cols"></TheGameOfLife>
      </div>
    </div>
  </div>
</template>

<script>
import TheGameOfLife from './components/TheGameOfLife.vue'

export default {
  name: 'app',
  components: {
    TheGameOfLife
  },
  data() {
    return {
      rows: 30,
      cols: 50
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
