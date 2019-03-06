<template>
  <div id="app">

    <div class="d-none d-lg-block">
      <app-header></app-header>
    </div>

    <div class="d-block d-sm-none d-none d-sm-block d-md-none d-none d-md-block d-lg-none">
      <app-headerMobile></app-headerMobile>
    </div>

    <router-view/>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import HeaderMobile from './HeaderMobile.vue'

export default {
  name: 'App',
  components: {
    appHeader: Header,
    appFooter: Footer,
    appHeaderMobile: HeaderMobile
  }

}
</script>

<style>
#app {
  background-color: #f8f9fa;
}


</style>
