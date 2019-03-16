<template>
    <div class="container">
        <div class="d-none d-lg-block">
            <app-proizvodPC :msg="product" :specs="productSpecs" :pictureSlide="productPictures"></app-proizvodPC>
        </div>
        
        <div class="d-block d-sm-none d-none d-sm-block d-md-none d-none d-md-block d-lg-none">
            <app-proizvodMobile :msg="product" :specs="productSpecs" :pictureSlide="productPictures"></app-proizvodMobile>
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

            productSpecs: {},

            productPictures: {}
        }
    },

    mounted(){
        this.getProd();
        this.getPictureSlide();
    },

    methods: {

        getProd: function(){

            this.$http.get("http://localhost:5000/api/product/" + this.$route.params.id)
            .then(response => {
                this.product = response.body;
                this.decompressImg();
            }, error => {
                console.log(error);
            });

            this.$http.get("http://localhost:5000/api/productdescriptions/" + this.$route.params.id)
            .then(response => {
                this.productSpecs = response.body;
            }, error => {
                console.log(error);
            });
        },

        decompressImg: function(){
            this.product.titlePictureProduct.picture = LzString.decompressFromUTF16(this.product.titlePictureProduct.picture);
        },

        getPictureSlide: function(){

            this.$http.get("http://localhost:5000/api/productpictures/" + this.$route.params.id)
            .then(response => {

                response.body.forEach(element => {
                    element.picture = LzString.decompressFromUTF16(element.picture);
                });

                this.productPictures = response.body;

            }, error => {
                console.log(error);
            });
            
        }
    }
}
</script>


<style scoped>

</style>
