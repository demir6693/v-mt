<template>
    <div class="container">
        <hr>
        <div class="row">

            <div class="col-3">

            </div>

            <div class="col-6">

                <div id="regEmail">

                <h3 style="text-align: center;">Login</h3>
    
                <div class="form-group" wfd-id="358">
                    <label for="exampleInputEmail1" wfd-id="359">Email adresa</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" v-model="inputUserData.email">
                    <p class="alertReg" id="alertEmail"><i>Obavezno polje</i></p>
                </div>

                <div class="form-group" wfd-id="355">
                    <label for="exampleInputPassword1" wfd-id="357">Šifra</label>
                    <input type="password" class="form-control" id="sifra1" wfd-id="507" v-model="inputUserData.password">
                    <p class="alertReg" id="alertPassword"><i>Obavezno polje</i></p>
                    <p class="alertReg" id="wrongLogin"><i>Pogrešno su uneti e-mail ili šifra</i></p>
                </div>

                <div class="text-center">
                    <button type="submit" class="btn btn-primary btn-xs" @click="validationInput">Uloguj se</button>
                    <br>
                    <router-link to="./registracija">
                        <i class="pointer">Registruj se</i>
                    </router-link>
                </div>

                <hr>

            </div>

            </div>

            <div class="col-3">

            </div>

        </div>
    </div>
</template>

<script>
import VigenereCipher from 'vigenere-cipher'
import router from '../router'
import { error } from 'util';

export default {
    data() {
        return{
            userEmailData:{
                id: 0,
                email: ''
            },

            inputUserData:{
                email: '',
                password: ''
            },

            boolInputUserData:{
                email: false,
                password: false
            }
        }
    },

    mounted(){
    },

    methods: {

        validationInput: function(){
            
            if(this.inputUserData.email == '')
            {
                $(document).ready(function(){
                    $("#alertEmail").show();
                });
            }
            else
            {
                $(document).ready(function(){
                    $("#alertEmail").hide();
                });
                this.boolInputUserData.email = true;
            }

            if(this.inputUserData.password == '')
            {
                $(document).ready(function(){
                    $("#alertPassword").show();
                });
            }
            else
            {
                $(document).ready(function(){
                    $("#alertPassword").hide();
                });
                this.boolInputUserData.password = true;
            }

            if(this.boolInputUserData.email && this.boolInputUserData.password)
            {
                this.cryptPassw();
            }
        },

        cryptPassw: function(){

            var key = this.inputUserData.email + this.inputUserData.password + "kometa64292";
            var decPassw = VigenereCipher.encrypt(this.inputUserData.password, key);
            this.inputUserData.password = decPassw;
            this.checkUser();
        },

        checkUser: function(){

            this.$http.post("http://localhost:5000/api/loginuser", this.inputUserData)
            .then(response => {
                
                if(Object.keys(response.body).length)
                {
                    this.userEmailData.id = response.body[0]['id'];
                    this.userEmailData.email = response.body[0]['email'];
                    this.useCartUserById(this.userEmailData.id);
                    localStorage.setItem('user', JSON.stringify(this.userEmailData));
                }
                else
                {
                    this.inputUserData.email = '';
                    this.inputUserData.password = '';

                    $(document).ready(function(){
                        $("#wrongLogin").show();
                    });
                } 
                
            }, error => {
                console.log(error)
            });
        },

        useCartUserById: function(id)
        {
            this.$http.get("http://localhost:5000/api/carts/" + id)
            .then(response => {
                localStorage.setItem('cartUser', JSON.stringify(response.body[0]))
                router.push({ name: 'Home'});
                this.moveToUserCart();
            }, error => {
                console.log(error);
            })
        },

        moveToUserCart: function()
        {   
            
            var freeCartItems = JSON.parse(localStorage.getItem("freeCart"));
            var userCart = JSON.parse(localStorage.getItem("cartUser"));
            if(localStorage.freeCart)
            {
                if(freeCartItems.length > 0)
                {
                freeCartItems.forEach((element, index) => {

                    var postDataCart = {
                        productId: element.idProd,
                        cartId: userCart.id,
                        kolicina: 1
                    }; 
               
                
                this.$http.post("http://localhost:5000/api/cartitems/", postDataCart)
                .then(response => {
                    index++;
                    if(freeCartItems.length == index)
                    {
                        localStorage.removeItem("freeCart");
                        location.reload();
                    }
                }, error => {
                    console.log(error);
                }); 
                  
                });
                }
                else
                {
                    location.reload();
                }
            }
            else
            {
                location.reload();
            }
        }
    }
}
</script>


<style>

#alertEmail, #alertPassword {
    display: none;
}

.alertReg{
    color: red;
}

#wrongLogin{
    display: none;
}

.pointer{
    cursor: pointer;
}
</style>
