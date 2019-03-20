<template>
    <div class="container">
        <h2>{{titlePage}}</h2>
        
        <hr>

        <!-- filters -->

        <div class="container container-filters d-block d-sm-none d-none d-sm-block d-md-none d-none d-md-block d-lg-none">
            <!--
                <button type="button" class="btn btn-primary btn-lg btn-block" wfd-id="560">Kategorije <i class="fas fa-caret-down"></i></button>
             -->
            <div class="dropdown">

            <!--Trigger-->
                <a class="btn btn-primary dropdown-toggle btn-lg btn-block" type="button" id="dropdownMenu2" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                    Brend
                </a>


                <!--Menu-->
                <div class="container dropdown-menu dropdown-primary" id="dropDownFilters">
                    <ul class="list-group" v-for="b in brands">
                        <li class="">
                            <a class="dropdown-item item-filters" href="#" @click="getProByBrand(b.brand.id)">{{b.brand.name}}</a>
                        </li>
                    </ul>
                    
                </div>
            </div>  
        </div>

        <!-- Item on pc-->
    <div class="d-none d-lg-block">

        <div class="row">

            <div class="col-2 text-center">
                
                <nav class="nav flex-column">
                
                <ul style="list-style-type:none;" v-for="b in brands">
                    <li>
                        <div class="brands">
                            <a class="nav-link active" href="#">
                                <div class="kategorija">
                                    <b class="my-b" @click="getProByBrand(b.brand.id)">{{b.brand.name}}</b>
                                </div>
                            </a>
                        </div>
                    </li>
                </ul>
                    

                </nav>

            </div>

            <div class="col-10">
                
            
            <div class="row item border-bottom" v-for="(prod, index) in product">
                
                <div class="col-4 divItem">
                    <router-link :to="{ name: 'proizvod', params: { id: prod.id }}">
                        <a href="" class="my-a"><img class="img-thumbnail" v-bind:src="prod.titlePictureProduct.picture" alt=""></a>
                    </router-link>
                </div>

                <div class="col-8">

                    <h5>{{ prod.brand.name + ' ' + prod.name }}</h5>
              

                    <div class="row">
                        
                        <div class="col-sm border-right">
                             Šifra artikla: <strong>{{prod.id}}</strong>
                             |
                             Model: <strong>{{prod.name.split(' ').slice(0,3).join(' ')}}</strong>
                        </div>
                     
                    </div>

                    <hr>
                    
                    <div class="row">       
                    
                        <div class="col-8" v-for="specsProd in specsSortObj[index].prodSpecsById.slice(0,4)">
                            
                        <p class="my-p">
                            <strong>{{specsProd.descriptionName}}:</strong>
                            {{specsProd.description}}
                        </p>

                        </div>

                        <div class="col">
                            <p>
                                <strong>MP</strong>
                                {{ prod.msrp }} din.
                            </p>

                            <p class="my-pPrice">
                                {{ prod.price }} din.
                            </p>

                            <router-link :to="{ name: 'proizvod', params: { id: prod.id }}">
                                <button type="button" class="btn btn-primary btn-lg d-none d-lg-block my-button-pc" wfd-id="560">Detaljnije</button>
                            </router-link>
                        </div>                   
                    </div> 
                </div>
            </div>
        </div>
    </div>

    </div>
        

    <!-- Item on mobile-tablet-->
<div class="d-block d-sm-none d-none d-sm-block d-md-none d-none d-md-block d-lg-none">
    <div class="row my-col-item-mobile" v-for="(prod, index) in product">
        
        <div class="col-4 border-bottom">
            <img v-bind:src="prod.titlePictureProduct.picture" class="img-thumbnail " alt="...">
        </div>

        <div class="col-8">
            
            <div class="col">
                <h6 class="title-mobile">
                    {{ prod.brand.name + ' ' + prod.name }}
                </h6>
            </div>

            <div class="col col-cena">

                <p>
                    <strong>MP</strong>
                    {{ prod.msrp }} din.
                </p>

                <p class="my-pPrice">
                    {{ prod.price }} din.
                </p>
            </div>

            <div class="row priceAndButton ">
                <div class="col-2"></div>
                <div class="col-2"></div>
                <div class="col-8">
                  <p class="price">
                    <!-- cena -->
                  {{ prod.price }} RSD
                  </p>
                  <router-link :to="{ name: 'proizvod', params: { id: prod.id }}">
                      <button class="btn btn-primary details" @click="goToProduct(prod.id)">Detaljnije</button>
                  </router-link>
                </div>
            </div>

        </div>
    </div>
</div>
    
</div>

</template>

<script>
import LzString from 'lz-string'
import { error } from 'util';
export default {
    
    data(){
        return{
            product: {},
            titlePage: '',
            brands: {},
            groupId: 0,
            spescProd: {},
            specsSortObj: {}
        }
    },

    mounted(){
        this.getProd();
        this.titlePage = this.$route.params.kategorije;
    },
    
    methods: {

        getProd: function(){

            var postGroups = {
                ver: 1,
                checkData: this.$route.params.kategorije
            };

            this.$http.post("http://localhost:5000/api/category", postGroups)
            .then(response => {
                this.product = response.body;
                this.product.forEach(element => {
                   this.groupId = element.groupId; 
                   element.titlePictureProduct.picture = LzString.decompressFromUTF16(element.titlePictureProduct.picture);
                });
                this.getBrand();
                this.getSpecsForProd();
            }, error => {
                console.log(error);
            }); 
        },


        getBrand: function(){
            this.$http.get("http://localhost:5000/api/groupbybrand/" + this.groupId)
            .then(response => {
                this.brands = response.body;
            }, error => {
                console.log(error);
            })
        },

        getProByBrand: function(id){
            this.$http.get("http://localhost:5000/api/productbybrand/" + id)
            .then(response => {
                this.product = response.body;
                this.product.forEach(element => {
                   this.groupId = element.groupId; 
                   element.titlePictureProduct.picture = LzString.decompressFromUTF16(element.titlePictureProduct.picture);
                });
                this.getSpecsForProd();
            }, error => {
                console.log(error);
            })
        },

        getSpecsForProd: function(){
            
            var postData = {
                specsId: []
            };

            this.product.forEach(element => {
                postData.specsId.push(element.id);
            });

            this.$http.post("http://localhost:5000/api/productbybrand/", postData)
            .then(response => {
                this.spescProd = response;
                this.seppProdSpecs();
            }, error => {
                console.log(error);
            })

        },

        seppProdSpecs: function(){
               
            var objTmp = [];

            this.product.forEach(prod => {

                var specsObj = {
                idProd: 0,
                prodSpecsById: []
                };

                specsObj.idProd = prod.id;

                this.spescProd.body.forEach(spc => {
                    spc.forEach(sss => {
                        if(prod.id == sss.productId)
                        {
                            specsObj.prodSpecsById.push(sss);
                        }
                    });
                });
               
               objTmp.push(specsObj);
            }); 

            this.specsSortObj = objTmp;
        }
    },

    watch: {
        '$route.params.kategorije': function () {
            this.getProd();
        }
    }
}
</script>



<style scoped>

.details{
    margin-bottom: 5%; 
}
.list-group{
    list-style-type: none;
}
.title-mobile{
    margin-top: 1%; 
}

.my-button-pc{
    margin-bottom: 5%; 
}

.col-cena{
    text-align: right;
}

.my-col-item-mobile{
    background-color: white;
}

.col-centered{
    float: none;
    margin: 0 auto;
}

.item-filters{
    color: white;
    text-align: center;
}

#dropDownFilters{
    background-color: #145bcd;
}

#dropdownMenu2{
    color: white;
}

.container-filters{

    text-align: center;
    margin-bottom: 15px;
}

.img-thumbnail{
    border: none;
}

.item{
    background-color: white;
}

.divItem{
    text-align: center;
}
.col-3{
    margin-top: 15px;
}

.my-pPrice{
    font-size: 22pt;
    color: #c60100;
}

.my-p{
    font-size: 10pt;
}

.kategorija{
    background-color: #145bcd;
    border: 1px solid #145bcd;
    border-radius: 10px;
    text-align: center;
    margin-top: 10px;
}

.my-b{
 color: white;
}
</style>
