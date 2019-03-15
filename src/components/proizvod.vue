<template>
    <div class="container">
        <div class="d-none d-lg-block">
            <app-proizvodPC :msg="product" :specs="productSpecs"></app-proizvodPC>
        </div>
        
        <div class="d-block d-sm-none d-none d-sm-block d-md-none d-none d-md-block d-lg-none">
            <app-proizvodMobile></app-proizvodMobile>
        </div>
    </div>    
</template>

<script>
import proizvodMobile from './proizvodResponse/proizvodMobile.vue';
import proizvodPC from './proizvodResponse/proizvodPC.vue';
import LzString from 'lz-string'

export default {
    components: {
        appProizvodPC: proizvodPC,
        appProizvodMobile: proizvodMobile
    },

    data(){
        return{
            product: {},

            productSpecs: {}
        }
    },

    mounted(){
        this.getProd();
    },

    methods: {

        getProd: function(){

            this.$http.get("http://localhost:5000/api/product/9")
            .then(response => {
                this.product = response.body;
                this.decompressImg();
            }, error => {
                console.log(error);
            });

            this.$http.get("http://localhost:5000/api/productdescriptions/9")
            .then(response => {
                this.productSpecs = response.body;
            }, error => {
                console.log(error);
            });

        },

        decompressImg: function(){
            this.product.titlePictureProduct.picture = LzString.decompressFromUTF16(this.product.titlePictureProduct.picture);
            console.log(this.product);
        }
    }
}
</script>


<style scoped>

</style>
