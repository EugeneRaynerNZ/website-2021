<template>
  <div id="app">
    <Nav />
    <Home />
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Home from './views/Home.vue'

export default {
  name: 'App',
  components: {
    Nav,
    Home
  }
}
</script>