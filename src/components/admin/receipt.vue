<template>
    <div class="container">
        <hr>
         <div v-for="receipt in receiptData">
            <div class="row">
                <div class="col-2">
                    <p>
                        Broj pošiljke: <strong>{{receipt.id}}</strong>
                    </p>
                    <p>
                        <strong>{{ getDate(receipt.dateofReceipt) }}</strong>
                    </p>
                </div>
                <div class="col-4">
                    <i class="my-i" @click="showHideUserInfo(receipt.id)">
                        Korisnik <i class="fas fa-sort-down"></i>
                    </i>
                    <div :name="receipt.id + 'info'" class="info-receipt">
                        <hr>
                        <p>
                            Ime: <strong>{{receipt.usersInfo.fName}}</strong>
                        </p>
                        <p>
                            Prezime: <strong>{{receipt.usersInfo.lName}}</strong>
                        </p>
                        <p>
                            Adresa: <strong>{{receipt.usersInfo.adresa}}, {{receipt.usersInfo.grad}}, {{ receipt.usersInfo.postalCode }}</strong>
                        </p>
                        <p>
                            Broj telefona: <strong>{{receipt.usersInfo.brTelefona}}</strong>
                        </p>
                    </div>
                </div>
                <div class="col-5">
                    <i class="my-i" @click="showHideProd(receipt.id)">
                        Artikli <i class="fas fa-sort-down"></i>
                    </i>
                    <div class="info-receipt" v-for="(items, index) in receiptItemsData" v-if="receipt.id == items.receiptId" :name="receipt.id">
                        <hr>
                        <p>
                            Šifra artikla: <strong>{{items.product.id}}</strong>
                        </p>
                        <p class="name-prod">
                            Naziv artikla: <router-link :to="{ name: 'proizvod', params: { id: items.product.id }}">
                             <strong>{{items.product.name}}</strong>
                            </router-link>
                        </p>
                        <p>
                            Cena: <strong>{{items.product.price}} din</strong>
                        </p>
                    </div>
                </div>
                <div class="col">
                    <button class="btn btn-danger" @click="deleteReceipt(receipt.id)">X</button>
                </div>
                
            </div>
                <hr>
         </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            receiptData: {},
            receiptItemsData: {}
        }
    },

    computed: {
       
    },

    mounted(){
        this.getReceipt();
        this.getReceiptItems();
    },

    methods:{
        getReceipt: function(){
            this.$http.get("http://localhost:5000/api/receipt/")
            .then(response => {
                this.receiptData = response.body;
                this.receiptData.reverse();
            }, error => {
                console.log(error);
            });
        },

        getReceiptItems: function()
        {
            this.$http.get("http://localhost:5000/api/receiptitems/")
            .then(response => {
                this.receiptItemsData = response.body;
                this.receiptItemsData.reverse();
            }, error => {
                console.log(error);
            });
        },

        showHideProd: function(name){
            $(document).ready(function(){
                $('div[name='+ name +']').toggle('slow');
            });
        },

        showHideUserInfo: function(name)
        {
            $(document).ready(function(){
                $('div[name='+ name +'info]').toggle('slow');
            });
        },

        deleteReceipt: function(id)
        {
            this.$http.delete("http://localhost:5000/api/receipt/" + id)
            .then(response => {
                console.log("Success delete");
                this.getReceipt();
                this.getReceiptItems();
            }, error => {
                console.log(error);
            })
        },

        getDate: function(date)
        {   
            var dateFormat = new Date(date);
            var d = dateFormat.getTime();
            var tmp = new Date(d);
            return tmp.getDate() + "/" + tmp.getMonth() + "/" + tmp.getFullYear() + " | " + tmp.getHours() + ":" + tmp.getMinutes() + "h";
        }
    }
}
</script>

<style scoped>
.my-i{
    cursor: pointer;
}

.info-receipt{
    display: none;
}

.name-prod{
    cursor: pointer;
}
</style>
