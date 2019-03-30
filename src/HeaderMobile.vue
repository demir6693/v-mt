<template>
<div>
    <div class="navbar-mobile">
            <div class="row">
                <div class="col-8">
                    <button type="button" class="btn my-logo-button" wfd-id="543" id="mbtown">
                        <i class="fas fa-list-ul"></i>
                    </button>
                    <router-link to="/">
                    <a class="navbar-brand naslov-header my-logo" href="#"  id="">
                        <strong>
                            MOBILE TOWN
                        </strong>
                    </a>
                    </router-link>
                </div>
                <div class="col-2 mycol-2">
                    <div v-if="loginBool">
                        <div class="btn-group">
                            <button type="button" class="btn button-header" data-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-user"></i>
                            </button>
                            <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg-left">
                                <router-link to="/korisnik-info">
                                    <button class="dropdown-item" type="button">Moj nalog</button>
                                </router-link>
                                <button class="dropdown-item" type="button" @click="logOut">Izloguj se</button>
                            </div>
                            </div>
                    </div>
                    <div v-else>
                        <router-link to="/login">
                        <button type="button" class="btn button-header" wfd-id="543" id="loginUser">
                            <i class="fas fa-user"></i>
                        </button>
                    </router-link>
                    </div>
                </div>
                <div class="col-2 mycol-2">
                    <button type="button" class="btn button-header" wfd-id="543" id="cartId" @click="showBrandDialog">
                        <i class="fas fa-shopping-cart"></i>
                    </button>
                </div>
            </div>
        <div id="panelItems">
            <ul class="list-group" v-for="groups in grp.body">
                <li class="list-group-item">
                    <router-link :to="{ name: 'proizvodi', params: { kategorije: groups.name }}">
                        <a href="" class="items-navbar" @click="slideUpMenu">
                            {{ groups.name }}
                        </a>
                    </router-link>
                </li>
            </ul>
            <ul class="list-group">
                <li class="list-group-item">
                    <router-link to="/lokacija-kontakt">
                        <a href="" class="items-navbar" @click="slideUpMenu">
                            Kontakt/Lokacija
                        </a>
                    </router-link>
                </li>
                <li class="list-group-item">
                    <router-link to="/o-nama">
                        <a href="" class="items-navbar" @click="slideUpMenu">
                            O nama
                        </a>
                    </router-link>
                </li>
                <li class="list-group-item">
                    <p style="float: right;" id="idUp">
                        <i class="fas fa-chevron-up fa-2x"></i>
                    </p>
                </li>
            </ul>
        </div>
    </div>
    <br>
    <div class="container">
            <div class="container">
                <input class="form-control mr-sm-2 search-nav shadow-lg" type="text" placeholder="Pretraga" wfd-id="518">
            </div>
    </div>
    <br>

    <modal name="cart-items" adaptive="true" height="auto">
        <div v-if="loginBool">
            <div v-if="lenghtCart">
                <div class="table-responsive">
                <table class="table">
                <thead>
                    <tr class="table-active">
                    <th scope="col">R. br.</th>
                    <th scope="col">Naziv artikla</th>
                    <th scope="col">Količina</th>
                    <th scope="col">Cena</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(items, index) in cartItems" :value="countCart += items.product.price">
                    <th scope="row">{{ ++index }}.</th>
                        <td>{{ items.product.name.substring(0, 12) + "..."}}</td>
                        <td>1</td>
                        <td>{{ items.product.price  + " din"}}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr class="table-active">
                    <td></td>
                    <td>Ukupno:</td>
                    <td>
                        {{countCart}} din
                    </td>
                    <td>
                        <p style="display: none;">
                            {{ countCart = 0 }}
                        </p>
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>
            <div class="row">
                <div class="col-4"></div>
                <div class="col-2">
                </div>
                <div class="col-4">
                    <router-link to="/checkout">
                        <button class="btn btn-primary" @click="hideBrandDialog">Vidi korpu</button>
                    </router-link>
                </div>
            </div>
            </div>
            <div v-else>
                <h4>Korpa je prazna</h4>
            </div>
            <br>
        </div>
        <div v-else>
            <div class="table-responsive">
                <table class="table">
                <thead>
                    <tr class="table-active">
                    <th scope="col">R. br.</th>
                    <th scope="col">Naziv artikla</th>
                    <th scope="col">Količina</th>
                    <th scope="col">Cena</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(items, index) in freeCartData" :value="countCart += items.price">
                    <th scope="row">{{ ++index }}.</th>
                        <td>{{ items.name.substring(0, 12) + "..." }}</td>
                        <td>1</td>
                        <td>{{ items.price + " din"}}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr class="table-active">
                    <td></td>
                    <td>Ukupno:</td>
                    <td>
                        {{countCart}} din
                    </td>
                    <td>
                        <p style="display: none;">
                            {{ countCart = 0 }}
                        </p>
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>
            <div class="row">
                <div class="col-4"></div>
                <div class="col-2">
                </div>
                <div class="col-4">
                    <button class="btn btn-primary">Vidi korpu</button>
                </div>
            </div>
            <br>
        </div>
    </modal>

</div>
</template>

<script>
export default {
    props: {
        grp: {},
        loginBool: Boolean,
        userData: {},
        cartItems: {},
        checkCart: Function,
        cartSumPrice: 0,
        freeCartData: [],
        sumFreeCart: Number,
        removeItemFreeCart: Function,
        lenghtCart: Boolean
    },

    data(){
        return{
            countCart: 0
        }
    },

    mounted() { 
        $(document).ready(function(){
            $("#mbtown").click(function(){
                $("#panelItems").slideToggle("slow");
            });
        });


        $(document).ready(function(){
            $("#idUp").click(function(){
                $("#panelItems").slideUp();
            });
        });
    },

    methods: {
        slideUpMenu: function(){
            $(document).ready(function(){
                $("#panelItems").slideUp();
            });
        },

        showBrandDialog(){
            this.$modal.show('cart-items');
        },

        hideBrandDialog(){
            this.$modal.hide('cart-items');
        },

        logOut: function(){
            localStorage.removeItem('user');
            localStorage.removeItem('cartUser');
            this.loginBool = false;
            location.reload();
        }
    }
}
</script>

<style scoped>

.items-navbar{
    color: white;
}

.my-logo{
    color: #c60100; 
    font-size: 14pt;
    margin-top: 5%;
    margin-bottom: 5%;
}

.my-logo-button {
    margin-top: 4%;
    margin-bottom: 5%;
    color: white;
}

.list-group-item{
    background-color: #007bff;
    border: none;
}

.my-btn{
    background-color: #0049A7;
}

#panelItems  {
  padding: 5px;
  background-color: #007bff;
}

#panelItems {
    color: white;
    display: none;
}

#loginForm  {
  padding: 5px;
  background-color: #007bff;
}

#loginForm {
    color: white;
    display: none;
}

.dropdown-login{
    display: none;
    width: 100%;
    left: 0;
    position: absolute;
    z-index: 1;
}

.drop-downmenu-login{
    right: -50px;
    left: auto;
    width: 300px !important;
}

.mycol-2{
    margin-top: 3%;
    margin-left: -3%;
}

.navbar-mobile{
    background-color: #007bff;
}

.button-header{
    background-color: #0049A7;
    color: white;
}

.title-cart-item{
    word-wrap: break-word;
}
</style>
