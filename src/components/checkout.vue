<template>
    <div class="container">
        <hr>
        <h3>Lista proizvoda</h3>
        <hr>
        <div class="list-prod" id="lsProd">
            <table class="table table-striped">
                <tbody>
                    <tr>
                        <th scope="col">R. br</th>
                        <th scope="col">Naziv artikla</th>
                        <th scope="col">Cena</th>
                        <th scope="col">Izbriši</th>
                        </tr>
                    <tr v-for="(items, index) in cartItems">
                        <th scope="row">{{ ++index }}</th>
                        <td>{{ items.product.name }}</td>
                        <td>{{ items.product.price }} din</td>
                        <td><button type="button" class="btn btn-danger" wfd-id="541" @click="removeFromCart(items.id)">X</button></td>
                    </tr>
                </tbody>
        </table>
        <hr>
        <div class="row">
            <div class="col-10"></div>
            <div class="col-2">
                <button type="button" class="btn btn-primary" wfd-id="563" @click="showUserInfo">Dalje</button>
            </div>
        </div>
        </div>

        <h3>Podaci za slanje</h3>
        <hr>
        <div class="info-user" id="userCheckout">
            <div class="row">
                <div class="col-2"></div>
                <div class="col-8">
                    <div class="form-group" wfd-id="358">
                    <label for="exampleInputEmail1" wfd-id="359">Ime</label>
                    <input type="text" class="form-control" id="ime" aria-describedby="nameHelp" v-model="userInfo.fName">
                    <p class="alertReg" id="alertName"><i>Obavezno polje</i></p>
                </div>

                <div class="form-group" wfd-id="358">
                    <label for="exampleInputEmail1" wfd-id="359">Prezime</label>
                    <input type="text" class="form-control" id="prezime" aria-describedby="lastnameHelp" v-model="userInfo.lName">
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

                <div class="row">
                    <div class="col-10"></div>
                    <div class="col-2">
                        <button type="button" class="btn btn-primary" wfd-id="563" @click="showCheckOrder">Dalje</button>
                    </div>
                </div>

                </div>

                <div class="col-2"></div>
            </div>
        </div>

        <h3>Potvrda porudžbine</h3>
        <hr>
        <div class="check-order" id="checkOrder">
            <div class="row">
                <div class="col-5 border-right" style="background-color: white;">
                    <ul style="list-style: none;">
                        <li>
                            <p class="infoOrder">
                                Ime: <strong>{{ userInfo.fName }}</strong>
                            </p>    
                        </li>
                        <li>
                            <p class="infoOrder">
                                Prezime: <strong>{{ userInfo.lName }}</strong>
                            </p>    
                        </li>
                        <li>
                            <p class="infoOrder">
                                Adresa: <strong>{{ userInfo.adresa }}</strong>
                            </p>    
                        </li>
                        <li>
                            <p class="infoOrder">
                                Grad: <strong>{{ userInfo.grad }}</strong>
                            </p>    
                        </li>
                        <li>
                            <p class="infoOrder">
                                Poštanski broj: <strong>{{ userInfo.postalCode }}</strong>
                            </p>    
                        </li>
                        <li>
                            <p class="infoOrder">
                                Telefon: <strong>{{ userInfo.brTelefona }}</strong>
                            </p>    
                        </li>
                    </ul>
                </div>
                <div class="col-5 border-right" style="background-color: white;">
                   <ul style="list-style: none;" v-for="item in cartItems">
                        <li>
                            <p class="infoOrder">
                                Šifra artikla: <strong>{{ item.product.id }}</strong>
                            </p>    
                        </li>
                        <li>
                            <p class="infoOrder">
                                Artikal: <strong>{{ item.product.name }}</strong>
                            </p>    
                        </li>
                        <li>
                            <p class="infoOrder">
                                Cena: <strong>{{ item.product.price }} din</strong>
                            </p>    
                        </li>
                        <hr>
                    </ul>
                </div>
                <div class="col-2" style="background-color: white;">
                    Ukupno za naplatu: <strong><p class="infoOrder">{{ sumCart }} din</p></strong>
                </div>
            </div>
            <div class="row">
                    <div class="col-10"></div>
                    <div class="col-2">
                        <button type="button" class="btn btn-primary btn-lg" wfd-id="563" style="margin: 10%;" @click="postOrder">Potvrda</button>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
import router from '../router'

export default {
    props: {
        cartItems: {},
        checkCart: Function
    },

    data(){
        return{
            userInfo: {
                IdUser: 0,
                fName: '',
                lName: '',
                userName: '',
                adresa: '',
                grad: '',
                postalCode: 0,
                brTelefona: ''
            },

            responseUserInfo: false,
            inputUserInfo: false,

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

    mounted(){
        if(this.$session.has('user'))
        {
           this.useUserInfo(this.$session.get('user').id);
        }
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

        removeFromCart: function(id){

            this.$http.delete("http://localhost:5000/api/cartitems/" + id)
            .then(response => {
                console.log("Successful remove product from cart.");
                this.checkCart();
            }, error =>{
                console.log(error);
            });
        },

        showUserInfo: function(){
            $(document).ready(function(){
                $("#userCheckout").slideDown();
                $("#lsProd").slideUp();
            });
        },

        showCheckOrder: function(){

            if(this.responseUserInfo)
            {
                this.postUserInfo();
            }
            else
            {
                $(document).ready(function(){
                    $("#checkOrder").slideDown();
                    $("#userCheckout").slideUp();
                });
            }
            
        },

        useUserInfo: function(id)
        {   
            this.$http.get("http://localhost:5000/api/usersinfo/" + id)
            .then(response => {
                
                if(response.statusText === "No Content")
                {
                    this.responseUserInfo = true;
                    this.userInfo.IdUser = this.$session.get('user').id
                }
                else
                {
                    this.userInfo.IdUser = response.body.idUser;
                    this.userInfo.fName = response.body.fName;
                    this.userInfo.lName = response.body.lName;
                    this.userInfo.userName = response.body.userName;
                    this.userInfo.adresa = response.body.adresa;
                    this.userInfo.grad = response.body.grad;
                    this.userInfo.brTelefona = response.body.brTelefona;
                    this.userInfo.postalCode = response.body.postalCode;
                    this.responseUserInfo = false;
                }

            }, error => {
                console.log(error);
            });
        },

        checkInputUserInfo: function(){

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

            if(this.boolUserInfo.fName && this.boolUserInfo.lName 
            && this.boolUserInfo.userName &&  this.boolUserInfo.adresa
            && this.boolUserInfo.grad && this.boolUserInfo.postalCode
            && this.boolUserInfo.brTelefona)
            {
                this.inputUserInfo = true;
            }
        },

        postUserInfo: function()
        {   
            this.checkInputUserInfo();

            if(this.responseUserInfo && this.inputUserInfo)
            {   console.log(this.userInfo);
                this.$http.post("http://localhost:5000/api/usersinfo/", this.userInfo)
                .then(response => {
                    
                    $(document).ready(function(){
                        $("#checkOrder").slideDown();
                        $("#userCheckout").slideUp();
                    });

                }, error => {
                    console.log(error);
                });
            }
        },

        postOrder: function(){

            var currentDate = new Date();

            var day = currentDate.getDate();
            var month = currentDate.getMonth(); //Be careful! January is 0 not 1
            var year = currentDate.getFullYear();

            var dateString = year + "-" +(month + 1) + "-" + day;

            var postOrderData = {
                userId: this.$session.get('user').id,
                cartId: this.cartItems[0].cartId,
                dateOrder: dateString
            };

            this.$http.post("http://localhost:5000/api/orders/", postOrderData)
            .then(response => {
                this.postOrderItems(response.body.id);
            }, error => {
                console.log(error);
            });
        },

        postOrderItems: function(orderId){

            var finish = false;

            this.cartItems.forEach((item, index) => {
                
                var postOrderItem = {
                    orderId: orderId,
                    productId: item.product.id
                };

                this.$http.post("http://localhost:5000/api/orderitems/", postOrderItem)
                .then(response => {
                    console.log("Succesfull post order item");
                    this.deleteFromCartItems(item.id, index);
                    finish = true;
                }, error => {
                    console.log(error);
                    finish = false;
                })
            });

        },

        deleteFromCartItems: function(prodId, index)
        {
            this.$http.delete("http://localhost:5000/api/cartitems/" + prodId)
            .then(response => {
                console.log("Succesfull delete product from cart items");
                if(++index == this.cartItems.length)
                {
                    location.reload();
                    router.push({ name: 'Home'});
                }
            }, error => {
                console.log(error);
            });
        }
    }
}
</script>

<style scoped>

#userCheckout, #checkOrder{
    display: none;
}

.alertReg{
    color: red;
}

#alertName, #alertLastName, #alertUserName, #alertAdress, #alertCity, #alertPostalCode, #alertPNumber {
    display: none;
}

.infoOrder{
    font-size: 16pt;
}
</style>
