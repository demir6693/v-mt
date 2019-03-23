<template>
    <div class="container">
        <div class="row border" v-for="(ord, index) in order">
            <div class="col-4 border-right">
                <p>
                    Ime: <strong>{{userInfo[index].fName}}</strong>
                </p>
                <p>
                    Prezime: <strong>{{userInfo[index].lName}}</strong>
                </p>
                <p>
                    Grad: <strong>{{userInfo[index].grad}}</strong>
                </p>
                <p>
                    Poštanski broj: <strong>{{userInfo[index].postalCode}}</strong>
                </p>
                <p>
                    Adresa: <strong>{{userInfo[index].adresa}}</strong>
                </p>
                <p>
                    Broj telefona: <strong>{{userInfo[index].brTelefona}}</strong>
                </p>
            </div>
            <div class="col-6 border-right">
                <div v-for="ordItem in orderItems">
                    <div v-for="item in ordItem" v-if="ord.id == item.orderId" :value="sumPrice += item.product.price">
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
                                <button type="button" class="btn btn-danger" wfd-id="563">X</button>
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
                <button class="btn btn-success">
                    Pošalji
                </button>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
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
                this.getUserInfo();
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

        getUserInfo: function(){

            this.order.forEach(element => {
                this.$http.get("http://localhost:5000/api/usersinfo/" + element.userId)
                .then(response => {
                    this.userInfo.push(response.body);
                }, error => {
                    console.log(error);
                })
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
