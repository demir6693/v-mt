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
                    
                    this.$session.start();
                    this.$session.set('user', this.userEmailData);
                    
                    router.push({ name: 'Home'});
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
</style>
