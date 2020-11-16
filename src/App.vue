<template>
  <div id="app">
    <Broken />
    <Working />
  </div>
</template>

<script>
import Broken from './components/Broken.vue'
import Working from './components/Working.vue'

export default {
  name: 'App',
  components: {
    Broken,
    Working
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
