<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/vue-logo.png">
    <img alt="Django logo" src="./assets/django-logo.png">
    <Basic/>
  </div>
</template>

<script>
import Basic from './components/Basic.vue'

export default {
  name: 'app',
  components: {
    Basic
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
