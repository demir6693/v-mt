<template>
    <div class="container">
        <div class="row border" v-for="(ord, index) in order">
            <div class="col-4 border-right">
                <p>
                    Ime: <strong>{{ord.usersInfo.fName}}</strong>
                </p>
                <p>
                    Prezime: <strong>{{ord.usersInfo.lName}}</strong>
                </p>
                <p>
                    Grad: <strong>{{ord.usersInfo.grad}}</strong>
                </p>
                <p>
                    Poštanski broj: <strong>{{ord.usersInfo.postalCode}}</strong>
                </p>
                <p>
                    Adresa: <strong>{{ord.usersInfo.adresa}}</strong>
                </p>
                <p>
                    Broj telefona: <strong>{{ord.usersInfo.brTelefona}}</strong>
                </p>
            </div>
            <div class="col-6 border-right">
                <div v-for="ordItem in orderItems">
                    <div v-for="item in ordItem" 
                        v-if="ord.id == item.orderId" 
                        :value="sumPrice += item.product.price">
                        <p>
                            Šifra: <strong>{{item.product.id}}</strong>
                        </p>
                        <p>
                            Artikal: <strong>{{item.product.name}}</strong>
                        </p>
                        <p>
                            Cena: <strong>{{item.product.price}} din</strong>
                        </p>
                        <div class="row">
                            <div class="col-10"></div>
                            <div class="col-2">
                                <button type="button" class="btn btn-danger" wfd-id="563" @click="deleteItemFromOrder(item.id)">X</button>
                            </div>
                        </div>
                        <hr>
                    </div>
                </div>
            </div>
            <div class="col-2">
                <p>
                    Ukupno za naplatu: <strong>{{ sumPrice }} din</strong>
                </p>
                <p id="hideZero">
                    {{ sumPrice = 0}}
                </p>
                <button class="btn btn-success" @click="sendPackage(ord)">
                    Pošalji
                </button>
                <button class="btn btn-danger" @click="deleteOrder(ord.id)">
                    Otkaži
                </button>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    props: {
        checkCart: Function
    },

    data(){
        return{
            orderItems: [],
            order: {},
            userInfo: [],
            sumPrice: 0
        }
    },
    
    mounted(){
        this.getOrder();
    },

    methods: {
        getOrder: function(){
            this.$http.get("http://localhost:5000/api/orders/")
            .then(response => {
                this.order = response.body;
                this.getOrderItems();
            }, error => {
                console.log(error);
            });
        },

        getOrderItems: function(){

            this.order.forEach(element => {
            
                this.$http.get("http://localhost:5000/api/orderitems/" + element.id)
                .then(response => {
                    this.orderItems.push(response.body);
                }, error => {
                    console.log(error);
                });

            });
        },

        deleteItemFromOrder: function(idItemsOrder){
            this.$http.delete("http://localhost:5000/api/orderitems/" + idItemsOrder)
            .then(response => {
                location.reload();
            }, error => {
                console.log(error);
            });
        },

        deleteOrder: function(orderId){
            this.$http.delete("http://localhost:5000/api/orders/" + orderId)
            .then(response => {
                this.orderItems = [];
                this.checkCart();
                this.getOrder();
                location.reload();
            }, error => {
                console.log(error);
            })
        },

        sendPackage: function(order){
            
            var currentDate = new Date();

            var day = currentDate.getDate();
            var month = currentDate.getMonth(); //January = 0 
            var year = currentDate.getFullYear();

            var dateString = year + "-" +(month + 1) + "-" + day;

            var postReceipt = {
                userInfoId: order.usersInfo.id,
                DateofReceipt: currentDate
            };

            this.$http.post("http://localhost:5000/api/receipt/", postReceipt)
            .then(response => {
                this.packageItems(order, response.body.id);
            }, error => {
                console.log(error);
            });
        },

        packageItems: function(order, receiptId)
        {   
            var deleteOrd = true;
            var ordItems = this.orderItems;
            var countCartItems = 0;

            ordItems.forEach(element => {
                element.forEach(product => {
                    if(order.id == product.orderId)
                    {
                        countCartItems++;            
                    }  
                });
            });

            var countReceiptItems = 0;
            ordItems.forEach(element => {
                element.forEach(product => {
                    if(order.id == product.orderId)
                    {
                        var receiptItems = {
                            receiptId: receiptId,
                            productId: product.product.id
                        };

                        this.$http.post("http://localhost:5000/api/receiptitems/", receiptItems)
                        .then(response => {
                            
                            console.log("Success receipt");
                            countReceiptItems++;
                            if(countCartItems == countReceiptItems)
                            {
                                this.deleteOrder(order.id);
                            }
                        }, error => {
                            console.log(error);
                        });
                    }  
                });
            });
            
            
        },

        deleteOrder: function(id)
        {
            this.$http.delete("http://localhost:5000/api/orders/" + id)
            .then(response => {
                console.log("Success delete order!");
                location.reload();
            }, error => {
                console.log(error);
            });
        }


    }
}
</script>

<style scoped>

#hideZero{
    display: none;
}
</style>
