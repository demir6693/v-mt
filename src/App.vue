<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';

export default {
  name: 'App',
  components: {
    appHeader: Header,
    appFooter: Footer
  }

}
</script>

<style>
#app {
  background-color: #f8f9fa;
}
</style>
