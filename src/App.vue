<template>
  <div id="app">

    <div class="d-none d-lg-block">
      <app-header 
      :grp="groups" 
      :loginBool="loginHeaderData" 
      :userData="loginUserData" 
      :cartItems="userCartItems"
      :checkCart="getUserCartItems"
      :freeCartData="freeCartData"
      :sumFreeCart="sumFreeCart"
      :removeItemFreeCart="removeFromFreeCart"
      ></app-header>
    </div>

    <div class="d-block d-sm-none d-none d-sm-block d-md-none d-none d-md-block d-lg-none">
      <app-headerMobile 
      :grp="groups" 
      :loginBool="loginHeaderData" 
      :userData="loginUserData" 
      :cartItems="userCartItems"
      :checkCart="getUserCartItems"
      :freeCartData="freeCartData"
      :sumFreeCart="sumFreeCart"
      :removeItemFreeCart="removeFromFreeCart"
      ></app-headerMobile>
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
      userCartItems: {},
      freeCartData: [],
      sumFreeCart: 0,
      countFreeCart: 0
    }
  },

  mounted(){
    this.getGroups();
    this.checkLoginUser();
  },

  computed: {
  },

  methods: {
    
    checkLoginUser: function(){
      if(localStorage.user && localStorage.cartUser)
      {
        var user = JSON.parse(localStorage.getItem('user'));

        var cart = JSON.parse(localStorage.getItem('cartUser'));

        this.loginHeaderData = true;
        this.loginUserData = user;
        this.userCartData = cart;
        this.getUserCartItems();
      }
      else
      {
        this.loginHeaderData = false;
        
        if(!localStorage.freeCart)
        {
          var freeCart = [];
          localStorage.setItem("freeCart", JSON.stringify(freeCart));
        }

        this.getFromFreeCart();
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
      
    },

    getFromFreeCart: function(){
        this.sumFreeCart = 0;
        var freeCartTmp = JSON.parse(localStorage.getItem('freeCart'));
        this.freeCartData = [];
        freeCartTmp.forEach(element => {
          this.$http.get("http://localhost:5000/api/product/" + element.idProd)
          .then(response => {
              this.freeCartData.push(response.body);
              this.sumFreeCart += response.body.price;
          }, error => {
            console.log(error);
          });
        })
    },

    removeFromFreeCart: function(id)
    {
      var freeCart = JSON.parse(localStorage.getItem('freeCart'));
      var tmp = [];
      freeCart.reverse();
      freeCart.forEach((element, index) => {
        
        if(id != index)
        {
          tmp.push(element);
        }

      });
      
      localStorage.setItem("freeCart", JSON.stringify(tmp));
      this.checkLoginUser();
    },

    checkCountFreeCart: function()
    {
      var tmp = JSON.parse(localStorage.getItem("freeCart"));
      console.log(tmp);
    }
  }

}
</script>

<style scoped>
#app {
  background-color: #f8f9fa;
}


</style>
