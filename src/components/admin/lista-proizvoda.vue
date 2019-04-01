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
                <td><i style="cursor: pointer;" class="fas fa-edit fa-2x" @click="showModalProduct(items.id)"></i></td>
                </tr>
            </tbody>
        </table>

        <modal name="product" adaptive="true" height="auto" width="100%">
            <div class="container">
                <h2>Izmeni artikal</h2>
                <hr>
                <div class="row">
                    <div class="col-4">
                        <img v-bind:src="urlPic" alt="" class="titlePicture">
                        <br>
                        <i class="fas fa-trash-alt fa-2x picture-icon"></i> | <i class="fas fa-exchange-alt fa-2x picture-icon"></i>
                        <hr>
                        <div class="row">
                            <div class="col-3" v-for="picture in pictureSlide">
                                <img v-bind:src="picture.picture" alt="..." class="img-thumbnail mini-picture">
                                <i class="fas fa-trash-alt picture-icon" @click="deleteSlidePicture(picture.id)"></i> | <i class="fas fa-exchange-alt picture-icon"></i>
                            </div>
                            
                            <div class="col-3 add-picture">
                                <label for="files" class="btn">
                                    <i class="fas fa-plus fa-3x"></i>
                                    <p>Dodaj sliku</p>
                                </label>
                                <input id="files" style="visibility:hidden;" type="file" accept="image/*" @change="convertPicToBase64">                               
                            </div>

                        </div>
                    </div>
                    <div class="col-4">

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

                    <div class="col-4">
                        <h4>Specifikacije</h4>

                        <table class="table table-hover slide-table">
                            <thead>
                                <tr class="table-active">
                                <th scope="col">Specifikacija</th>
                                <th scope="col">Opis spec.</th>
                                <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="specs in specsProd">
                                <td>
                                    <input type="text" class="form-control" id="inputDefault1" v-model="specs.descriptionName">
                                </td>
                                <td>
                                    <input type="text" class="form-control" id="inputDefault2" v-model="specs.description">
                                </td>
                                <td>
                                    <button class="btn btn-primary btn-sm" @click="editSpecs(specs.id, specs.descriptionName, specs.description)"><i class="fas fa-upload"></i></button>
                                </td>
                                </tr>
                            </tbody>
                        </table>
                        <h5>Dodaj Specifikaciju</h5>
                        <table>
                            <tbody>
                                <tr>
                                <td>
                                    <input type="text" class="form-control" id="inputDefault1" v-model="addSpecs.descriptionName">
                                </td>
                                <td>
                                    <input type="text" class="form-control" id="inputDefault2" v-model="addSpecs.description">
                                </td>
                                <td>
                                    <button class="btn btn-primary btn-sm" @click="addSpecsProd">
                                        <i class="fas fa-plus"></i>
                                    </button>
                                </td>
                                </tr>
                            </tbody>
                        </table>
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
            pictureSlide: {},
            specsProd: {},
            addSpecs: {
                descriptionName: '',
                description: ''
            }
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
               this.getSpecsofProd(id);
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
        },

        convertPicToBase64: function(picture){
            var input = event.target;
         
            if (input.files && input.files[0]) {
              
                var reader = new FileReader();
      
                reader.onload = (e) => {
          
                    var compressImg = LzString.compressToUTF16(e.target.result);

                    var productImage = {
                        idProd: this.productItemsForChange.id,
                        picture: compressImg  
                    }; 
                        
                    this.uploadImage(productImage);
                } 

                reader.readAsDataURL(input.files[0]);
            }
        },

        uploadImage: function(picture){
            this.$http.post("http://localhost:5000/api/productpictures/", picture)
            .then(response => {
                this.getPictureSlide(picture.idProd);
            }, error => {
                console.log(error);
            });
        },

        deleteSlidePicture: function(id)
        {
            this.$http.delete("http://localhost:5000/api/productpictures/" + id)
            .then(response => {
                this.getPictureSlide(this.productItemsForChange.id);
            }, error => {
                console.log(error);
            });
        },

        getSpecsofProd: function(id)
        {
            this.$http.get("http://localhost:5000/api/productdescriptions/" + id)
            .then(response => {
                this.specsProd = response.body;
            }, error => {
                console.log(error);
            })
        },

        editSpecs: function(id, specs, value)
        {
            var specsofProd = {
                id: id,
                productId: this.productItemsForChange.id,
                descriptionName: specs,
                description: value
            };

            this.$http.put("http://localhost:5000/api/productdescriptions/" + id, specsofProd)
            .then(response => {
                this.getSpecsofProd(this.productItemsForChange.id);
            }, error => {
                console.log(error);
            });
        },

        addSpecsProd: function()
        {   
            var specsofProd = {
                productId: this.productItemsForChange.id,
                descriptionName: this.addSpecs.descriptionName,
                description: this.addSpecs.description
            };

            this.$http.post("http://localhost:5000/api/productdescriptions/", specsofProd)
            .then(response => {
                this.getSpecsofProd(this.productItemsForChange.id);
                this.addSpecs.descriptionName = '';
                this.addSpecs.description = '';
            }, error => {
                console.log(error);
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
    text-align: center;
    cursor: pointer;
}

.picture-icon{
    cursor: pointer;
}

.slide-table {
  max-height: 450px;
  overflow: auto;
  display:inline-block;
}
</style>
