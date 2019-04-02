<template>
        <div class="container">
             
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation" wfd-id="591">
                <span class="navbar-toggler-icon" wfd-id="441"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarColor02" wfd-id="433">
                <ul class="navbar-nav mr-auto" wfd-id="435">
                <li class="nav-item" wfd-id="439">
                    <a class="nav-link" href="https://www.facebook.com/mobiletown2013/"><i class="fab fa-facebook fa-2x"></i></a>
                </li>
                <li class="nav-item" wfd-id="438">
                    <a class="nav-link" href="https://www.instagram.com/mobile_town/"><i class="fab fa-instagram fa-2x"></i></a>
                </li>
                <li class="nav-item" wfd-id="437">
                    <a class="nav-link" href="#">office@mobiletown.rs</a>
                </li>
                </ul>
            </div>


            <div class="collapse navbar-collapse" id="navbarColor02" wfd-id="433">
                <ul class="navbar-nav ml-auto" wfd-id="435">
                <li class="nav-item" wfd-id="438">
                    <router-link to="/lokacija-kontakt"><a class="nav-link">Kontakt/Lokacija</a></router-link>
                </li>
                <li class="nav-item border-left" wfd-id="438">
                    <router-link to="/o-nama"><a class="nav-link">O nama</a></router-link>
                </li>
                </ul>
            </div>
        </nav>

        <nav class="navbar navbar-expand-lg navbar-dark nav-color ">
            <router-link to="/"><a class="navbar-brand"><img src="./assets/lg_new.png" alt=""></a></router-link>    
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation" wfd-id="595">
                <span class="navbar-toggler-icon" wfd-id="461"></span>
            </button>

            <!-- login -->
            <div class="collapse navbar-collapse" id="navbarColor01" wfd-id="453" v-if="loginBool">
                <ul class="navbar-nav mx-md-auto" wfd-id="455">
               <li class="nav-item active">
                    <router-link to="/korisnik-info"><a class="nav-link active"><b>{{ userData.email }}</b></a></router-link>
                </li>
                <li class="nav-item active">
                    <a class="nav-link">
                        <div class="dropdown">
                            <span><i class="fas fa-shopping-cart fa-2x" id="cartIcon"></i></span>
                            <div class="dropdown-content" id="dropDownCart">
                            
                                <ul class="list-group" style="list-style-type:none;" v-for="(cartProd, index) in cartItems">
                                    <li class="border-bottom">
                                        <div class="row">
                                            <div class="col-7">
                                                {{ ++index + ". " + cartProd.product.name.split(' ').slice(0,3).join(' ')}}
                                            </div>
                                            <div class="col-3">
                                                {{ cartProd.product.price + ' din'}}
                                            </div>
                                            <div class="col-2">
                                                <button type="button" class="btn btn-danger" wfd-id="541" @click="removeFromCart(cartProd.id)"><i class="fas fa-trash-alt"></i></button>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <br>
                                <div class="row">
                                    <div class="col-2"></div>
                                    <div class="col-4">
                                    <router-link to="/checkout">
                                        <button class="btn btn-primary">Vidi korpu</button>
                                    </router-link>
                                    </div>
                                    <div class="col-6">
                                        Ukupno: {{ sumCart }} din
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        ( {{ cartItems.length }} )
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link logout" @click="logOut">Izloguj se</a>
                </li>
                </ul>
            </div>

            <!-- not login -->
            <div class="collapse navbar-collapse" id="navbarColor01" wfd-id="453" v-else>
                <ul class="navbar-nav mx-md-auto" wfd-id="455">
               <li class="nav-item active">
                    <router-link to="/login"><a class="nav-link active"><b>Uloguj se</b></a></router-link>
                </li>

                <li class="nav-item active">
                    <a class="nav-link">
                        <div class="dropdown">
                            <span><i class="fas fa-shopping-cart fa-2x" id="cartIcon"></i></span>
                            <div class="dropdown-content" id="dropDownCart">
                            
                                <ul class="list-group" style="list-style-type:none;" v-for="(prod, index) in freeCartData">
                                    <li class="border-bottom">
                                        <div class="row">
                                            <div class="col-7">
                                                {{ prod.name.split(' ').slice(0,3).join(' ')}}
                                            </div>
                                            <div class="col-3">
                                                {{ prod.price + ' din'}}
                                            </div>
                                            <div class="col-2">
                                                <button type="button" class="btn btn-danger" wfd-id="541" @click="removeItemFreeCart(index)">Ukloni</button>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <br>
                                <div class="row">
                                    <div class="col-2"></div>
                                    <div class="col-4">
                                    <router-link to="/login">
                                        <button class="btn btn-primary">Vidi korpu</button>
                                    </router-link>
                                    </div>
                                    <div class="col-6">
                                        Ukupno: {{sumFreeCart}} din
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        ( {{ freeCartData.length }} )
                    </a>
                </li>

                <li class="nav-item">
                    <router-link to="/registracija"><a class="nav-link">Registruj se</a></router-link>
                </li>
                </ul>
            </div>

            <div class="collapse navbar-collapse" id="navbarColor01" wfd-id="453">
                <ul class="navbar-nav ml-auto" wfd-id="455">
                <li class="nav-item">
                <div class="input-group input-group-lg">
                    <input type="text" class="form-control " aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
                        <div class="input-group-prepend ">
                        <span class="input-group-text " id="inputGroup-sizing-lg"><i class="fas fa-search"></i></span>
                    </div>
                </div>
                </li>
                </ul> 
              
            </div>
        </nav>

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            
            <button class="navbar-brand" id="buttonProizvodi" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-bars"></i> Proizvodi</button>
                <div class="dropdown-menu" aria-labelledby="buttonProizvodi" id="dropdownItems">
                    <ul class ="list-group" v-for="groups in grp.body">
                        <li class="list-group-item my-drop-down" @click="goToGroupPage(groups.name)">{{ groups.name }}</li>
                    </ul>
                    
                </div>


            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation" wfd-id="591">
                <span class="navbar-toggler-icon" wfd-id="441"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarColor03" wfd-id="433">
                <ul class="navbar-nav mr-auto" wfd-id="435">
                <li class="nav-item" wfd-id="439">
                    <a class="nav-link" href="#">Akcije</a>
                </li>
                <li class="nav-item" wfd-id="438">
                    <a class="nav-link" href="#">OUTLET</a>
                </li>
                </ul>
            </div>
</nav>
    </div>
</template>

<script>
import router from './router'

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
        removeItemFreeCart: Function
    },

    data(){
        return{
            
        }
    },

    mounted(){
       
       $(document).ready(function(){
        $("#cartIcon").click(function(){
            $("#dropDownCart").toggle();
            });
        });

    },

    computed: {
        sumCart: function(){
            if(this.cartItems.length > 0)
            {   
                this.cartSumPrice = 0;
                this.cartItems.forEach(element => {
                    this.cartSumPrice += element.product.price;
                });
            }

            return this.cartSumPrice;
        }
        
    },

    methods: {

        goToGroupPage: function(params){
            router.push({
                name: 'proizvodi',
                params: {
                kategorije: params
                }
            });
        },

        logOut: function(){
            localStorage.removeItem('user');
            localStorage.removeItem('cartUser');
            this.loginBool = false;
            location.reload();
        },

        removeFromCart: function(id){

            this.$http.delete("http://localhost:5000/api/cartitems/" + id)
            .then(response => {
                console.log("Successful remove product from cart.");
                this.checkCart();
            }, error =>{
                console.log(error);
            });
        }

    }
}
</script>

<style scoped>

.nav-color {
    background-color: #145bcd;
    border: 3px solid #c60100;
    border-radius: 20px;
}

#buttonProizvodi {
    background-color: #f8f9fa;
    border: 0px;
}

#buttonProizvodi:hover {
    cursor: pointer;
}

#navItemDropDown{
   cursor: pointer;
}

#loginDropDownItems{
    border: #145bcd 3px solid;
    border-radius: 20px;
}

#login-dp{
    min-width: 250px;
    padding: 14px 14px 0;
    overflow:hidden;
    background-color:rgba(255,255,255,.8);
}
#login-dp .help-block{
    font-size:12px    
}
#login-dp .bottom{
    background-color:rgba(255,255,255,.8);
    border-top:1px solid #ddd;
    clear:both;
    padding:14px;
}
#login-dp .social-buttons{
    margin:12px 0    
}
#login-dp .social-buttons a{
    width: 49%;
}
#login-dp .form-group {
    margin-bottom: 10px;
}
.btn-fb{
    color: #fff;
    background-color:#3b5998;
}
.btn-fb:hover{
    color: #fff;
    background-color:#496ebc 
}
.btn-tw{
    color: #fff;
    background-color:#55acee;
}
.btn-tw:hover{
    color: #fff;
    background-color:#59b5fa;
}
@media(max-width:768px){
    #login-dp{
        background-color: inherit;
        color: #fff;
    }
    #login-dp .bottom{
        background-color: inherit;
        border-top:0 none;
    }
}

.my-drop-down{
    cursor: pointer;
}

.logout{
    cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  color: black;
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 550px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
}

.dropdown:active .dropdown-content {
  display: block;
}
</style>
