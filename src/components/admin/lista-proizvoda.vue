<template>
    <div class="container">
        <table class="table table-hover">
            <thead>
                <tr class="table-active">
                <th scope="col">R. br.</th>
                <th scope="col">Id</th>
                <th scope="col">Naziv artikla</th>
                <th scope="col">Grupa</th>
                <th scope="col">Brand</th>
                <th scope="col">Cena</th>
                <th scope="col">Na stanju</th>
                <th scope="col">Izmeni</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(items, index) in productItems">
                <th scope="row">{{++index}}</th>
                <td>{{items.id}}</td>
                <td>{{items.name}}</td>
                <td>{{items.group.name}}</td>
                <td>{{items.brand.name}}</td>
                <td>{{items.price}} din</td>
                <td>
                    <p v-html="stateofProd(items.stanje)">
                        {{items.stanje}}
                    </p>
                    </td>
                <td><i class="fas fa-edit fa-2x" @click="showModalProduct(items.id)"></i></td>
                </tr>
            </tbody>
        </table>

        <modal name="product" adaptive="true" height="auto" width="100%">
            <div class="container">
                <h2>Izmeni artikal</h2>
                <hr>
                <div class="row">
                    <div class="col-5">
                        <img v-bind:src="urlPic" alt="" class="titlePicture">
                        <br>
                        <i class="fas fa-trash-alt fa-2x"></i> | <i class="fas fa-exchange-alt fa-2x"></i>
                        <hr>
                        <div class="row">
                            <div class="col-3" v-for="picture, index in pictureSlide">
                                <img v-bind:src="picture.picture" alt="..." class="img-thumbnail mini-picture">
                                <i class="fas fa-trash-alt"></i> | <i class="fas fa-exchange-alt"></i>
                            </div>
                            
                            <div class="col-3">
                                <button type="button" class="btn btn-primary btn-lg btn-block" wfd-id="561">
                                    <i class="fas fa-plus fa-3x"></i>
                                </button>
                            </div>

                        </div>
                    </div>
                    <div class="col-7">

                        <div class="form-group" wfd-id="318">
                            <label class="col-form-label" for="inputDefault" wfd-id="319">Naziv artikla</label>
                            <input type="text" class="form-control" placeholder="Naziv" id="inputDefault" v-model="productItemsForChange.name">
                        </div>

                        <div class="form-group" wfd-id="318">
                            <label class="col-form-label" for="inputDefault" wfd-id="319">Nabavna cena</label>
                            <input type="number" class="form-control" placeholder="Nabavna cena" id="inputDefault" v-model="productItemsForChange.msrp">
                        </div>

                        <div class="form-group" wfd-id="318">
                            <label class="col-form-label" for="inputDefault" wfd-id="319">Prodajna cena</label>
                            <input type="number" class="form-control" placeholder="Prodajna cena" id="inputDefault" v-model="productItemsForChange.price">
                        </div>

                        <div class="form-check" wfd-id="337">
                            <label class="form-check-label" wfd-id="338">
                            <input class="form-check-input" type="checkbox" value="" checked="" wfd-id="503">
                            Na stanju
                            </label>
                        </div>

                        <hr>

                        <button class="btn btn-primary btn-lg">
                            Izmeni
                        </button>
                    </div>
                </div>
                <br>
            </div>
        </modal>
    </div>
</template>

<script>
import LzString from 'lz-string'

export default {
    data(){
        return{
            productItems: {},
            productItemsForChange: {},
            urlPic: '',
            pictureSlide: {}
        }
    },

    mounted() {
        this.getProduct();
    },

    methods: {
        getProduct: function(){
            this.$http.get("http://localhost:5000/api/product")
            .then(response => {
                this.productItems = response.body;
            }, error => {
                console.log(error);
            });
        },

        stateofProd: function(state){
            if(state)
            {
                return '<i style="color: green;" class="fas fa-check-circle fa-2x"></i>';
            }
            else
            {
                return '<i style="color: red;" class="fas fa-slash fa-2x"></i>';
            }
        },

        showModalProduct: function(id){
            
           
           this.$http.get("http://localhost:5000/api/product/" + id)
           .then(response => {
               this.productItemsForChange = response.body;
               this.decompressImg();
               this.$modal.show('product');
               this.getPictureSlide(id);
           }, error => {
               console.log(error);
           })
        },

        decompressImg: function(){
            this.urlPic = LzString.decompressFromUTF16(this.productItemsForChange.titlePictureProduct.picture);
        },

        getPictureSlide: function(id)
        {
            this.$http.get("http://localhost:5000/api/productpictures/" + id)
            .then(response => {
                this.pictureSlide = response.body;
                this.decompressImgSlide();
            }, error => {
                console.log(error);
            })
        },

        decompressImgSlide: function(){

            this.pictureSlide.forEach(element => {
                element.picture = LzString.decompressFromUTF16(element.picture);
            });
        }
    }
}
</script>

<style scoped>

.mini-picture{
    cursor: pointer;
}

.titlePicture{
    width: 350px;
    height: 400px;
}

.add-picture{
 
}
</style>
