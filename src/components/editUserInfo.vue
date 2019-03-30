<template>
    <div class="container">
        <!-- on PC -->
        <div class="d-none d-lg-block">
            <div class="row">
                <div class="col-3">
                    <h3 class="my-acc-p" @click="showHideComponent(0)"><i class="fas fa-user"></i> Moj nalog</h3>
                    <hr>
                    <p class="my-acc-p" @click="showHideComponent(1)">
                        <strong>KORISNIČKI PODACI</strong>
                    </p>
                    <p class="my-acc-p" @click="showHideComponent(2)">
                    <strong>MOJE NARUDŽBINE</strong>
                    </p>
                    <hr>
                </div>
                <div class="col-9">
                    <app-title id="0" :receiptData="getUserReceiptData" :userInfo="getUserInfoData"></app-title>
                    <app-userInfo :userInfo="getUserInfoData" id="1" class="compUser"></app-userInfo>
                    <app-cartInfo :receiptItems="receiptData" :receiptData="getUserReceiptData" id="2" class="compUser"></app-cartInfo>
                </div>
            </div> 
        </div>

        <!-- on Mobile -->
        <div class="d-block d-sm-none d-none d-sm-block d-md-none d-none d-md-block d-lg-none">
            <div class="dropdown">
                <button class="btn btn-primary btn-lg btn-block dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    KORISNIČKI PANEL
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <p class="dropdown-item" @click="showHideComponentOnMobile(4)">Moj nalog</p>
                    <p class="dropdown-item" @click="showHideComponentOnMobile(5)">KORISNIČKI PODACI</p>
                    <p class="dropdown-item" @click="showHideComponentOnMobile(6)">MOJE NARUDŽBINE</p>
                </div>
            </div>
            <hr>
            <app-title id="4" :receiptData="getUserReceiptData" :userInfo="getUserInfoData"></app-title>
            <app-userInfo :userInfo="getUserInfoData" id="5" class="compUser"></app-userInfo>
            <app-cartInfo :receiptItems="receiptData" :receiptData="getUserReceiptData" id="6" class="compUser"></app-cartInfo>
        </div>

        <hr>
        
        

    </div>
</template>

<script>
import cartInfo from './editUserInfoDat/cartInfo'
import title from './editUserInfoDat/title'
import userInfo from './editUserInfoDat/userInfo'

export default {
    components:{
        appCartInfo: cartInfo,
        appTitle: title,
        appUserInfo: userInfo
    },

    data(){
        return{
        
            getUserInfoData: {},

            getUserReceiptData: {},

            receiptData: []
        }
    },

    mounted(){
        this.getUserInfo();
    },

    methods: {
        showHideComponent: function(idComp){
            
            $(document).ready(function(){
                
                if(idComp === 0)
                {   
                    $("#0").show();
                    $("#1").hide();
                    $("#2").hide();
                }
                else if(idComp === 1)
                {   
                    $("#1").show();
                    $("#0").hide();
                    $("#2").hide();
                }
                else if(idComp === 2)
                {   
                    $("#2").show();
                    $("#0").hide();
                    $("#1").hide();
                }
            });

        },

        showHideComponentOnMobile: function(idComp){
            
            $(document).ready(function(){
                
                if(idComp === 4)
                {   
                    $("#4").show();
                    $("#5").hide();
                    $("#6").hide();
                }
                else if(idComp === 5)
                {   
                    $("#5").show();
                    $("#4").hide();
                    $("#6").hide();
                }
                else if(idComp === 6)
                {   
                    $("#6").show();
                    $("#4").hide();
                    $("#5").hide();
                }
            });

        },

        getUserInfo: function(){
            var user = JSON.parse(localStorage.getItem("user"));
            this.$http.get("http://localhost:5000/api/usersinfo/" + user.id)
            .then(response => {
                this.getUserInfoData = response.body;
                this.getUserReceipt();
            }, error => {
                console.log(error);
            });
        },

        getUserReceipt: function(){
            this.$http.get("http://localhost:5000/api/receipt/" + this.getUserInfoData.id)
            .then(response => {
                this.getUserReceiptData = response.body;
                this.getReceiptItems();
            }, error => {
                console.log(error);
            });
        },

        getReceiptItems: function(){
            this.getUserReceiptData.forEach(element => {
                this.$http.get("http://localhost:5000/api/receiptitems/" + element.id)
                .then(response => {
                    this.receiptData.push(response.body);
                }, error => {
                    console.log(error);
                })
            });
        }
    }
}
</script>

<style scoped>

.compUser{
    display: none;
}

.alertReg{
    color: red;
}

.my-acc-p{
    cursor: pointer;
}
</style>
