<template>
    <div class="container">
        <hr>
        <h2>Admin panel</h2>
        <hr>
        <div class="row">
            <div class="col-3">
                <router-link :to="{ name: 'lista-proizvoda'}">
                    <button type="button" class="btn btn-primary btn-lg btn-block" wfd-id="557">Lista artikala</button>
                </router-link>
            </div>
            <div class="col-3">
                <router-link :to="{ name: 'dodaj-artikal'}">
                    <button type="button" class="btn btn-primary btn-lg btn-block" wfd-id="557">Dodaj artikal</button>
                </router-link>
            </div>
            <div class="col-3">
                <router-link :to="{ name: 'narudzbine'}">
                    <button type="button" class="btn btn-primary btn-lg btn-block" wfd-id="557">Narudžbine ({{orders.length}})</button>
                </router-link>
            </div>
            <div class="col-3">
                <router-link :to="{ name: 'racuni'}">
                    <button type="button" class="btn btn-primary btn-lg btn-block" wfd-id="557">Računi</button>
                </router-link>
            </div>
        </div>

        <br>

        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
 
export default {
    data(){
        return{
            orders: {}
        }
    },

    mounted(){
        this.getOrders();
    },

    methods: {
        getOrders: function(){
            this.$http.get("http://localhost:5000/api/orders/")
            .then(response => {
                this.orders = response.body;
            }, error => {
                console.log(error);
            });
        }
    }
}
</script>

<style scoped>

</style>
