<template>
    <div class="container"> 
        <div id="regInfo">
            <h3>Izmeni korisničke podatke</h3>
            <div class="form-group" wfd-id="358">
                <label for="exampleInputEmail1" wfd-id="359">Ime</label>
                <input type="text" class="form-control" id="ime" aria-describedby="nameHelp" v-model="userInfo.fName">
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
                <input type="text" class="form-control" id="adresa" v-model="userInfo.adresa">
                <p class="alertReg" id="alertAdress"><i>Obavezno polje</i></p>
            </div>

            <div class="form-group" wfd-id="358">
                <label for="exampleInputEmail1" wfd-id="359">Grad</label>
                <input type="text" class="form-control" id="grad" v-model="userInfo.grad">
                <p class="alertReg" id="alertCity"><i>Obavezno polje</i></p>
            </div>

            <div class="form-group" wfd-id="358">
                <label for="exampleInputEmail1" wfd-id="359">Poštanski broj</label>
                <input type="number" class="form-control" id="postanskiBr" v-model="userInfo.postalCode">
                <p class="alertReg" id="alertPostalCode"><i>Obavezno polje</i></p>
            </div>

            <div class="form-group" wfd-id="358">
                <label for="exampleInputEmail1" wfd-id="359">Telefon</label>
                <input type="text" class="form-control" id="telefon" v-model="userInfo.brTelefona">
                <p class="alertReg" id="alertPNumber"><i>Obavezno polje</i></p>
            </div>

            <div class="text-center">
                <button type="submit" class="btn btn-primary btn-lg" @click="checkUser">Izmeni</button>
            </div>
            <hr>
        </div>
        {{userDataInput}}
    </div>
</template>

<script>
export default {
    props: {
       userInfo: {}
    },

    data(){
        return{
            newUserInfo: {}
        }
    },

    methods: {
        checkUser: function(){
            var user = JSON.parse(localStorage.getItem("user"));
            this.$http.get("http://localhost:5000/api/usersinfo/" + user.id)
            .then(response => {
                this.newUserInfo = response.body;
                if(!this.compareObject())
                {
                    this.putUserInfo();
                }
            }, error => {
                console.log(error);
            });

        },

        compareObject: function(){

            if(this.userInfo.id === this.newUserInfo.id
            && this.userInfo.fName === this.newUserInfo.fName
            && this.userInfo.lName === this.newUserInfo.lName
            && this.userInfo.adresa === this.newUserInfo.adresa
            && this.userInfo.postalCode === this.newUserInfo.postalCode
            && this.userInfo.brTelefona === this.newUserInfo.brTelefona
            && this.userInfo.grad === this.newUserInfo.grad
            && this.userInfo.userName === this.newUserInfo.userName)
            {   
                return true;
            }
            else
            {   
                if(this.validationInput())
                {
                    return false;
                    $(document).ready(function(){
                        $(".alertReg").show();
                    });
                }
            }

        },

        validationInput: function(){
            if(this.userInfo.fName === ''
            || this.userInfo.lName === ''
            || this.userInfo.adresa === ''
            || this.userInfo.postalCode === ''
            || this.userInfo.brTelefona === ''
            || this.userInfo.grad === ''
            || this.userInfo.userName === '')
            {
                return false;
            }
            else
            {
                return true;
            }
        },

        putUserInfo: function(){
            this.$http.put("http://localhost:5000/api/usersinfo/" + this.userInfo.id, this.userInfo)
            .then(response => {
                console.log("Success update user!");
                alert("Uspešno ste izmenili podatke!");
            }, error => {
                console.log(error);
            });
        }
        
    }
}
</script>

<style scoped>
.alertReg{
    display: none;
    color: red;
}
</style>
