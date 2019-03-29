<template>
    <div class="container">
        <hr>
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
