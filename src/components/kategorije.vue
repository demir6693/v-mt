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
                    <a class="dropdown-item item-filters" href="#">Asus</a>
                    <a class="dropdown-item item-filters" href="#">Acer</a>
                    <a class="dropdown-item item-filters" href="#">Lenovo</a>
                    <a class="dropdown-item item-filters" href="#">HP</a>
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
                                    <b class="my-b">{{b.brand.name}}</b>
                                </div>
                            </a>
                        </div>
                    </li>
                </ul>
                    

                </nav>

            </div>

            <div class="col-10">
                
            
            <div class="row item border-bottom" v-for="prod in product">
                
                <div class="col-4 divItem">
                    <a href="" class="my-a"><img class="img-thumbnail" v-bind:src="prod.titlePictureProduct.picture" alt=""></a>
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
                    
                        <div class="col-8">
                            
                        <p class="my-p">
                            <strong>Procesor:</strong>
                            Intel® Celeron® Processor N3060, 1.6-2.48GHz, 2 cores,2 threads
                        </p>

                        <p class="my-p">
                            <strong>Memorija:</strong>
                            4GB DDR3L, 2 memorijska slota, max 8GB
                        </p>

                        <p class="my-p">
                            <strong>Hard disk:</strong>
                            500GB 5400 rpm
                        </p>

                        <p class="my-p">
                            <strong>Grafička kartica:</strong>
                            Intel HD Graphics 400
                        </p>

                        <p class="my-p">
                            <strong>Ekran:</strong>
                            15.6"
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

                            <button type="button" class="btn btn-primary btn-lg d-none d-lg-block" wfd-id="560">Detaljnije</button>
                        </div>                   
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>
        

    <!-- Item on mobile-tablet-->
<div class="d-block d-sm-none d-none d-sm-block d-md-none d-none d-md-block d-lg-none">
    <div class="row my-col-item-mobile">
        
        <div class="col-4 border-bottom">
            <img src="../assets/laptop.jpg" class="img-thumbnail " alt="...">
        </div>

        <div class="col-8">
            
            <div class="col">
                <h6>
                    Laptop Acer A315 15.6"HD,Intel DC N3060/4GB/500GB/Intel HD 400
                </h6>
            </div>

            <div class="col col-cena">

                <p>
                    <strong>MP</strong>
                    30.990 din.
                </p>

                <p class="my-pPrice">
                    29.990 din.
                </p>
            </div>
        </div>

    </div>
</div>
    
</div>

</template>

<script>
import LzString from 'lz-string'
export default {
    
    data(){
        return{
            product: {},
            titlePage: '',
            brands: {},
            groupId: 0
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
            }, error => {
                console.log(error);
            }); 
        },


        getBrand: function(){
            this.$http.get("http://localhost:5000/api/groupbybrand/" + this.groupId)
            .then(response => {
                this.brands = response.body; console.log(this.brands);
            }, error => {
                console.log(error);
            })
        },

        getBrandProd: function(brand){

        
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
    background-color: #f8f9fa;
    border: 1px solid #474747;
    border-radius: 10px;
    text-align: center;
    margin-top: 10px;
}

.my-b{
 color: #474747;
}
</style>
