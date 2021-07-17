<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Counter />
</template>

<script>
import { defineAsyncComponent } from 'vue'


export default {
  name: 'App',
  components: {
    Counter: defineAsyncComponent( () => import('@/components/Counter.vue') )
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
