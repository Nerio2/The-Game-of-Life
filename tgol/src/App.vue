<template>
  <div id="app">
    <TheGameOfLife :rows="rows" :cols="cols"></TheGameOfLife>
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
      rows: 20,
      cols: 30
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
