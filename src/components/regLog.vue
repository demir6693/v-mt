<template>
    <div class="container">
        <hr>
        <div class="row">
            
            <div class="col">

            </div>

            <div class="col-6 regStyle">

            <div id="regEmail">

                <h3 style="text-align: center;">Registracija</h3>
    
                <div class="form-group" wfd-id="358">
                    <label for="exampleInputEmail1" wfd-id="359">Email adresa</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" v-model="regEmail.email">
                    <p class="alertReg" id="alertEmail"><i>Obavezno polje</i></p>
                    <p class="alertReg" id="alreadyEmail"><i>Nalog se ovim e-mailom je već registrovan</i></p>
                </div>

                <div class="form-group" wfd-id="355">
                    <label for="exampleInputPassword1" wfd-id="357">Šifra</label>
                    <input type="password" class="form-control" id="sifra1" wfd-id="507" v-model="regEmail.password">
                    <p class="alertReg" id="alertPassword"><i>Obavezno polje</i></p>
                </div>

                <div class="form-group" wfd-id="355">
                    <label for="exampleInputPassword1" wfd-id="357">Ponovite šifru</label>
                    <input type="password" class="form-control" id="sifra2" wfd-id="507" v-model="regEmail.confimPassword">
                    <p class="alertReg" id="alertConfimPassword"><i>Obavezno polje</i></p>
                    <p class="alertReg" id="confirmPassFail"><i>Pogrešno unešena šifra</i></p>
                </div>

                <div class="text-center">
                    <button type="submit" class="btn btn-primary btn-xs" @click="validationRegEmail">Registruj se</button>
                </div>
 
            </div>

            <div id="regInfo">
                
                <div class="form-group" wfd-id="358">
                    <label for="exampleInputEmail1" wfd-id="359">Ime</label>
                    <input type="text" class="form-control" id="ime" aria-describedby="nameHelp"  v-model="userInfo.fName">
                    <p class="alertReg" id="alertName"><i>Obavezno polje</i></p>
                </div>

                <div class="form-group" wfd-id="358">
                    <label for="exampleInputEmail1" wfd-id="359">Prezime</label>
                    <input type="text" class="form-control" id="prezime" aria-describedby="lastnameHelp"  v-model="userInfo.lName">
                    <p class="alertReg" id="alertLastName"><i>Obavezno polje</i></p>
                </div>

                <div class="form-group" wfd-id="358">
                    <label for="exampleInputEmail1" wfd-id="359">Korisničko ime</label>
                    <input type="text" class="form-control" id="korisnickoIme" aria-describedby="usernameHelp"  v-model="userInfo.userName">
                    <p class="alertReg" id="alertUserName"><i>Obavezno polje</i></p>
                </div>

                <div class="form-group" wfd-id="358">
                    <label for="exampleInputEmail1" wfd-id="359">Adresa</label>
                    <input type="email" class="form-control" id="adresa" v-model="userInfo.adresa">
                    <p class="alertReg" id="alertAdress"><i>Obavezno polje</i></p>
                </div>

                <div class="form-group" wfd-id="358">
                    <label for="exampleInputEmail1" wfd-id="359">Grad</label>
                    <input type="email" class="form-control" id="grad" v-model="userInfo.grad">
                    <p class="alertReg" id="alertCity"><i>Obavezno polje</i></p>
                </div>

                <div class="form-group" wfd-id="358">
                    <label for="exampleInputEmail1" wfd-id="359">Poštanski broj</label>
                    <input type="email" class="form-control" id="postanskiBr" v-model="userInfo.postalCode">
                    <p class="alertReg" id="alertPostalCode"><i>Obavezno polje</i></p>
                </div>

                <div class="form-group" wfd-id="358">
                    <label for="exampleInputEmail1" wfd-id="359">Telefon</label>
                    <input type="email" class="form-control" id="telefon" v-model="userInfo.brTelefona">
                    <p class="alertReg" id="alertPNumber"><i>Obavezno polje</i></p>
                </div>

                <div class="text-center">
                    <button type="submit" class="btn btn-primary btn-lg" @click="validationUserInfo">Unesi</button>
                </div>
            
            </div>

                <hr>

            </div>

            <div class="col">
                <button type="button" class="btn btn-primary btn-sm" id="skipInfo">Preskoči <i class="fas fa-arrow-right"></i></button>
            </div>

        </div>
    </div>
</template>


<script>
import VigenereCipher from 'vigenere-cipher'
import { error } from 'util';

export default {

    data() {
        return{

            //USER MAIL DATA

            regEmail: {
                email: '',
                password: '',
                confimPassword: ''
            },

            boolRegEmail: {
                email: false,
                password: false,
                confimPassword: false
            },

            sendPostUserEmail: {
                email: '',
                password: ''
            },

            regInfo: {
                name: '',
                lastName: '',
                userName: ''
            },

            checkEmail: {
                ver: 0,
                checkdata: ''
            },

            //USER INFO DATA

            userInfo:{
                idUser: '',
                fName: '',
                lName: '',
                userName: '',
                adresa: '',
                grad: '',
                postalCode: '',
                brTelefona: ''
            },

            boolUserInfo:{
                idUser: false,
                fName: false,
                lName: false,
                userName: false,
                adresa: false,
                grad: false,
                postalCode: false,
                brTelefona: false
            }
            

            
        }
    },

    methods: {
        
        // EMAIL USER POST

        ShowSpecsPic:function() {
            $(document).ready(function(){
                $("#regInfo").slideDown();
                $("#skipInfo").slideDown();
                $("#regEmail").slideUp();
            });
        },

        validationRegEmail:function(){
            
            if(this.regEmail.email == '')
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
                this.boolRegEmail.email = true;
            }
            
            if(this.regEmail.password == '')
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
                this.boolRegEmail.password = true;
            }
            
            if(this.regEmail.confimPassword == '')
            {
                $(document).ready(function(){
                    $("#alertConfimPassword").show();
                });
            }
            else
            {
                $(document).ready(function(){
                    $("#alertConfimPassword").hide();
                });
                this.boolRegEmail.confimPassword = true;
            }

            if(this.regEmail.password == this.regEmail.confimPassword)
            {
                if(this.boolRegEmail.email && this.boolRegEmail.password && this.boolRegEmail.confimPassword)
                {   
                    this.checkEmailAvailable(this.regEmail);
                }
            }
            else
            {
                this.confirmEmailFail();
                return false;
            }


        },

        confirmEmailFail: function(){
            $(document).ready(function(){
                $("#confirmPassFail").show();
            });

            this.regEmail.password = '';
            this.regEmail.confimPassword = '';
        },

        emailAlready: function(){
            $(document).ready(function(){
                $("#alreadyEmail").show();
            });
            this.regEmail.email = '';
            this.regEmail.password = '';
            this.regEmail.confimPassword = '';
        },

        hashPassword: function(userEmail){

            var keyTmp = userEmail.email + userEmail.password + "kometa64292";
            var hashPass = VigenereCipher.encrypt(userEmail.password, keyTmp);

            return hashPass;
        },

        decPassword: function(userEmail){

            var keyTmp = userEmail.email + userEmail.password + "kometa64292";
            var decPsw = VigenereCipher.decrypt(userEmail.password, keyTmp);

            return decPsw;
        },

        checkEmailAvailable: function(userEmail){
            this.checkEmail.ver = 0; // 0 - for username
            this.checkEmail.checkdata = userEmail.email;

            this.$http.post("http://localhost:5000/api/check", this.checkEmail)
            .then(response => {
                
                if(response.body)
                {
                    this.emailAlready();
                }
                else
                {
                    this.postUserEmail(userEmail);
                }

            }, error =>{
                console.log(error);
            });
        },

        postUserEmail: function(userEmail){
            
            var hashPasw = this.hashPassword(userEmail);
            
            this.sendPostUserEmail.email = userEmail.email;
            this.sendPostUserEmail.password = hashPasw;

            this.$http.post("http://localhost:5000/api/users/", this.sendPostUserEmail)
            .then(response => {
                this.userInfo.idUser = response.body['id'];
                this.ShowSpecsPic();
            }, error => {
                console.log(error);
            });
            
        },


        // EMAIL USER INFO POST
        
        validationUserInfo: function(){

            if(this.userInfo.fName == '')
            {
                $(document).ready(function(){
                    $("#alertName").show();
                });
            }
            else
            {
                $(document).ready(function(){
                    $("#alertName").hide();
                });
                this.boolUserInfo.fName = true;
            }

            if(this.userInfo.lName == '')
            {
                $(document).ready(function(){
                    $("#alertLastName").show();
                });
            }
            else
            {
                $(document).ready(function(){
                    $("#alertLastName").hide();
                });
                this.boolUserInfo.lName = true;
            }

            if(this.userInfo.userName == '')
            {
                $(document).ready(function(){
                    $("#alertUserName").show();
                });
            }
            else
            {
                $(document).ready(function(){
                    $("#alertUserName").hide();
                });
                this.boolUserInfo.userName = true;
            }

            if(this.userInfo.adresa == '')
            {
                $(document).ready(function(){
                    $("#alertAdress").show();
                });
            }
            else
            {
                $(document).ready(function(){
                    $("#alertAdress").hide();
                });
                this.boolUserInfo.adresa = true;
            }

            if(this.userInfo.grad == '')
            {
                $(document).ready(function(){
                    $("#alertCity").show();
                });
            }
            else
            {
                $(document).ready(function(){
                    $("#alertCity").hide();
                });
                this.boolUserInfo.grad = true;
            }

            if(this.userInfo.postalCode == '')
            {
                $(document).ready(function(){
                    $("#alertPostalCode").show();
                });
            }
            else
            {
                $(document).ready(function(){
                    $("#alertPostalCode").hide();
                });
                this.boolUserInfo.postalCode = true;
            }

            if(this.userInfo.brTelefona == '')
            {
                $(document).ready(function(){
                    $("#alertPNumber").show();
                });
            }
            else
            {
                $(document).ready(function(){
                    $("#alertPNumber").hide();
                });
                this.boolUserInfo.brTelefona = true;
            }

            this.validationInput();
        },

        validationInput: function(){
            
            if(this.boolUserInfo.fName && this.boolUserInfo.lName 
                && this.boolUserInfo.userName &&  this.boolUserInfo.adresa
                && this.boolUserInfo.grad && this.boolUserInfo.postalCode
                && this.boolUserInfo.brTelefona)
                {
                    this.postUserInfo();
                }
        },

        postUserInfo: function(){
            
            this.$http.post("http://localhost:5000/api/usersinfo/", this.userInfo)
            .then(response => {
                console.log(response);
            }, error => {
                console.log(error);
            })
        }
    }
}
</script>

<style scoped>

.regStyle{

}

#regInfo, #skipInfo{
  display: none;
}

.alertReg{
    color: red;
}

#alertEmail, #alertPassword, #alertConfimPassword {
    display: none;
}

#alreadyEmail{
    display: none;
}

#confirmPassFail{
    display: none;
}

#alertName, #alertLastName, #alertUserName, #alertAdress, #alertCity, #alertPostalCode, #alertPNumber {
    display: none;
}
</style>
