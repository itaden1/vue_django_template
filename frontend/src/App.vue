<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/vue-logo.png">
    <img alt="Django logo" src="./assets/django-logo.png">
    <div>
      <router-link to="/hello-world">Hello World</router-link>
      <router-link to="/basic">Basic</router-link>
    </div>
      <router-view></router-view>
  </div>
</template>

<script>
// import Basic from './components/Basic'
// import HelloWorld from './components/HelloWorld'

export default {
  name: 'app',
  components: {
    // Basic, 
    // HelloWorld
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
