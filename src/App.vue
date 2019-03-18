<template>
  <div id="app">

    <div class="d-none d-lg-block">
      <app-header :grp="groups"></app-header>
    </div>

    <div class="d-block d-sm-none d-none d-sm-block d-md-none d-none d-md-block d-lg-none">
      <app-headerMobile :grp="groups"></app-headerMobile>
    </div>

    <router-view></router-view>
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
  },

  data(){

    return{
      groups: {}
    }
  },

  mounted(){
    this.getGroups();
  },

  methods: {

    getGroups: function(){
      this.$http.get("http://localhost:5000/api/groups")
      .then(response => {
        this.groups = response;
      }, error => {
        console.log(error);
      })
    }
  }

}
</script>

<style scoped>
#app {
  background-color: #f8f9fa;
}


</style>
