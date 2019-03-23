<template>
  <div id="app">

    <div class="d-none d-lg-block">
      <app-header 
      :grp="groups" 
      :loginBool="loginHeaderData" 
      :userData="loginUserData" 
      :cartItems="userCartItems"
      :checkCart="getUserCartItems"
      ></app-header>
    </div>

    <div class="d-block d-sm-none d-none d-sm-block d-md-none d-none d-md-block d-lg-none">
      <app-headerMobile 
      :grp="groups" 
      :loginBool="loginHeaderData" 
      :userData="loginUserData" 
      :cartItems="userCartItems"
      :checkCart="getUserCartItems"></app-headerMobile>
    </div>

    <router-view :checkCartCount="checkLoginUser" :cartItems="userCartItems" :checkCart="getUserCartItems"></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import HeaderMobile from './HeaderMobile.vue'
import { error } from 'util';

export default {
  name: 'App',
  components: {
    appHeader: Header,
    appFooter: Footer,
    appHeaderMobile: HeaderMobile
  },

  data(){
    return{
      groups: {},
      loginHeaderData: false,
      loginUserData: {},
      userCartData: {},
      userCartItems: {}
    }
  },

  mounted(){
    this.getGroups();
    this.checkLoginUser();
  },

  methods: {
    
    checkLoginUser: function(){
      if(this.$session.has('user') && this.$session.has('userCart'))
      {
        this.loginHeaderData = true;
        this.loginUserData = this.$session.get('user');
        this.userCartData = this.$session.get('userCart')[0];
        this.getUserCartItems();
      }
      else
      {
        this.loginHeaderData = false;
      }
    },

    getGroups: function(){
      this.$http.get("http://localhost:5000/api/groups")
      .then(response => {
        this.groups = response;
      }, error => {
        console.log(error);
      })
    },

    getUserCartItems: function(){
      
      this.$http.get("http://localhost:5000/api/cartitems/" + this.userCartData.id)
      .then(response => {
        this.userCartItems = response.body;
      }, error => {
        console.log(error);
      });
    }
  }

}
</script>

<style scoped>
#app {
  background-color: #f8f9fa;
}


</style>
