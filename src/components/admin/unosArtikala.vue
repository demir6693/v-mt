<template>
    <div class="container">
        <hr>
        
        <div class="row">

            <div class="col-2">
            
            </div>

            <div class="col-8">
                <h3 style="text-align: center">Unos artikla</h3>

                <div class="form-group" wfd-id="352">
                    <label for="exampleSelect1" wfd-id="354">Grupa</label>
                    <select class="form-control" id="exampleSelect1" v-model="selectedGroup" v-on:change="setGroupId">
                        <option v-for="item in group" v-bind:value="item.id">{{ item.name }}</option>
                    </select>
                </div>

                <div class="form-group" wfd-id="352">
                    <label for="exampleSelect1" wfd-id="354">Brand</label>
                    <select class="form-control" id="exampleSelect1" v-model="selectedBrand" v-on:change="setBrandId">
                        <option v-for="item in brand" v-bind:value="item.id">{{ item.name }}</option>
                    </select>
                </div>

                <div class="form-group" wfd-id="318">
                    <label class="col-form-label" for="inputDefault" wfd-id="319">Naziv artikla</label>
                    <input type="text" class="form-control" placeholder="Naziv" id="inputDefault" v-model="productInput.name">
                </div>

                <div class="form-group" wfd-id="318">
                    <label class="col-form-label" for="inputDefault" wfd-id="319">Nabavna cena</label>
                    <input type="number" class="form-control" placeholder="Nabavna cena" id="inputDefault" v-model="productInput.msrp">
                </div>

                <div class="form-group" wfd-id="318">
                    <label class="col-form-label" for="inputDefault" wfd-id="319">Prodajna cena</label>
                    <input type="number" class="form-control" placeholder="Prodajna cena" id="inputDefault" v-model="productInput.price">
                </div>

                <div class="row">
                    <div class="col-10">
                        <label class="col-form-label" for="inputDefault" wfd-id="319">Slika</label>
                        <div class="custom-file" wfd-id="286">
                        <input type="file" class="custom-file-input" id="inputGroupFile02" @change="previewImage" accept="image/*">
                        <label class="custom-file-label" for="inputGroupFile02" wfd-id="287" >Unesi sliku</label>
                    </div>
                    </div>
                    <div class="col-2">
                        <img src="/assets/loader.gif" alt="" id="loadingPicTitle">
                        <i class="fas fa-check-circle fa-2x" id="successPicTitle"></i>
                    </div>
                </div>

                <br>

                <button type="button" class="btn btn-primary btn-lg btn-block" id="addProd" @click="addProduct">Dodaj</button>

                <div id="afterSuccessPost">
                     <hr>
                     <div class="row">
                         <div class="col-10">
                             <div class="custom-file" wfd-id="286">
                                <input type="file" class="custom-file-input" id="inputGroupFile02" @change="previewImage" accept="image/*">
                                <label class="custom-file-label" for="inputGroupFile02" wfd-id="287" >Unesi sliku</label>
                            </div>
                         </div>
                         <div class="col-2">
                             <img src="/assets/loader.gif" alt="" id="loadingPic">
                             <i class="fas fa-check-circle fa-2x" id="successPic"></i>
                         </div>
                     </div>
                    <br> <br>
                    <div class="row">
                        <div class="col-6">
                            <label for="exampleSelect1" wfd-id="354">Naziv specifikacije</label>
                            <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="" aria-label="Recipient's username" v-model="productSpecs.descriptionName" aria-describedby="basic-addon2">
                                <div class="input-group-append">
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <label for="exampleSelect1" wfd-id="354">Specifikacija</label>
                            <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="" aria-label="Recipient's username" v-model="productSpecs.description" aria-describedby="basic-addon2">
                                <div class="input-group-append">
                                    <button class="btn btn-outline-secondary" type="button" @click="postSpecs">
                                        <i class="fas fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button type="button" class="btn btn-primary btn-lg btn-block" id="addNewProd" @click="addNew">Dodaj novi artikal</button>

                </div>

                <hr>

                <div class="row">
                    <div class="col-6">
                        <label for="exampleSelect1" wfd-id="354">Dodaj grupu</label>
                        <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="" v-model="groupInput.name">
                            <div class="input-group-append">
                                <button class="btn btn-outline-secondary" type="button" @click="addGroup">
                                    <i class="fas fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <label for="exampleSelect1" wfd-id="354">Dodaj brend</label>
                        <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="" v-model="brandInput.name">
                            <div class="input-group-append">
                                <button class="btn btn-outline-secondary" type="button" @click="showBrandDialog">
                                    <i class="fas fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="col-2">
                
            </div>

        </div>
        <modal name="hello-world">
            <div class="container">
                <div class="row justify-content-center align-items-center">
                    <div class="col-4">
                        <div class="d-flex flex-column">
                        <div class="p-2"></div>
                        <div class="p-2">
                            {{brandInput.name}}
                        </div>
                        <div class="p-2"></div>
                    </div>
                    </div>
                    <div class="col-8">
                        <div class="d-flex flex-column">
                            <div class="p-2"></div>
                            <div class="p-2">
                                <ul class ="list-group">
                                    <li class="list-group-item" v-for="grp in group">
                                        {{ grp.name }}
                                        <input type="checkbox" v-bind:value="grp.id" v-model="checkedGroup" >
                                    </li>
                                </ul>
                            </div>
                            <div class="p-2"></div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-4"></div>
                    <div class="col-4">
                        <button type="button" class="btn btn-primary" @click="addBrand">Unesi</button>
                    </div>
                    <div class="col-4"></div>
                </div>
            </div>
        </modal>
    </div>
</template>

<script>

import LzString from 'lz-string'
import { setTimeout } from 'timers';
import { error } from 'util';

export default {

    data(){
        return {
            group: [],
            brand: [],
            selectedGroup: '',
            selectedBrand: '',
            brandInput: {
                name: ''
            },
            groupInput: {
                name: ''
            },
            groupTmp: [],

            productInput: {
                name: '',
                price: '',
                msrp: '',
                pictureId: 0,
                groupId: 0,
                brandId: 0,
                stanje: true
            },

            responseProdData: {
                id: '',
                name: '',
                price: '',
                msrp: '',
                pictureId: 0,
                groupId: 0,
                brandId: 0
            },

            imageData: '',

            productImage: {
                idProd: 0,
                picture: ''
            },

            productSpecs: {
                productId: 1,
                descriptionName: '',
                description: ''
            },
            
            idProdPost: 0,

            firstImageProd: true,

            checkedGroup: [],

            responseBrand: {},

            postBrandByGroupData:{
                groups: [],
                name: ''
            }
        }
    },
    
    mounted() {
        this.getBrand();
        this.getGroups();
    },

    methods: {

        getBrand: function(){
            this.$http.get("http://localhost:5000/api/brand/")
            .then(response => {
                this.brand = response.body;
            });
        },

        getGroups: function(){
            this.$http.get("http://localhost:5000/api/groups/")
            .then(response => {
                this.group = response.body;
            });
        },

        ShowSpecsPic:function() {
            $(document).ready(function(){
                $("#afterSuccessPost").slideDown();
            });
        },

        HideSpecsPic:function() {
            $(document).ready(function(){
                $("#afterSuccessPost").slideUp();;
            });
        },
        
        showLoading:function(){
            $(document).ready(function(){
                $("#loadingPic").show();
            });
        },

        hideLoading:function(){
            $(document).ready(function(){
                $("#loadingPic").hide();
                $("#successPic").show();
            });
            setTimeout(function(){
                $("#successPic").hide('slow');
            }, 3000);
        },

        showLoadingTitle:function(){
            $(document).ready(function(){
                $("#loadingPicTitle").show();
            });
        },

        hideLoadingTitle:function(){
            $(document).ready(function(){
                $("#loadingPicTitle").hide();
                $("#successPicTitle").show();
            });
            setTimeout(function(){
                $("#successPicTitle").hide('slow');
            }, 3000);
        },

        addNew:function(){
            this.HideSpecsPic();
            this.productInput = [];
        },

        addBrand() {
            this.$http.post("http://localhost:5000/api/brand/", this.brandInput)
            .then(response => {
                this.responseBrand = response;
                this.connectBrandWithGroup();

                this.getBrand();
                this.getGroups();
            }, error => {
                console.log(error);
            }); 
        },

        addGroup() {
            this.$http.post("http://localhost:5000/api/groups/", this.groupInput)
            .then(response => {
               this.groupInput.name = '';
               this.getGroups();
            }, error => {
                console.log(error);
            });
        },

        setGroupId:function(){
            this.productInput.groupId = this.selectedGroup;
        },

        setBrandId:function(){
            this.productInput.brandId = this.selectedBrand;
        },

        addProduct:function() {
        
            this.productInput.price = parseFloat(this.productInput.price, 2);
            this.productInput.msrp = parseFloat(this.productInput.msrp, 2)
            
            this.$http.post("http://localhost:5000/api/product/", this.productInput)
            .then(response => {
                console.log("success post product");
                this.idProdPost = response.body['id'];
                this.responseProdData = response.body;
                this.ShowSpecsPic();
            }, error => {
                console.log(error);
            }); 
        },

        previewImage: function(event) {

            var input = event.target;
         
            if (input.files && input.files[0]) {
              
                var reader = new FileReader();
      
                reader.onload = (e) => {
          
                    var compressImg = LzString.compressToUTF16(e.target.result);

                    this.productImage = {
                        idProd: this.idProdPost,
                        picture: compressImg  
                    }; 
                        
                    this.uploadImage();
                } 

                reader.readAsDataURL(input.files[0]);
            }
        },

        uploadImage: function() {
            
            

            var urlPostPic = "";
            var postImg;

            if(this.firstImageProd)
            {   
                this.showLoadingTitle();
                urlPostPic = "http://localhost:5000/api/titlepictureproduct/";
                postImg = {
                    picture: this.productImage.picture
                };
            }
            else
            {   
                this.showLoading();
                urlPostPic = "http://localhost:5000/api/productpictures/";
                postImg = {
                    idProd: this.productImage.idProd,
                    picture: this.productImage.picture
                };
            }

            this.$http.post(urlPostPic, postImg)
            .then(response => {
                
                if(this.firstImageProd)
                {   this.hideLoadingTitle();
                    this.productInput.pictureId = response.body['id'];
                    this.firstImageProd = false;
                }
                else
                {
                    this.hideLoading();
                }

            }, error => {
                console.log(error);
            });
        },

        postSpecs: function(){
            this.productSpecs.productId = this.idProdPost;
            this.$http.post("http://localhost:5000/api/productdescriptions/", this.productSpecs)
            .then(response => {
                console.log("Success post specs");
                this.productSpecs.productId = '';
                this.productSpecs.descriptionName = '';
                this.productSpecs.description = '';
            }, error => {
                console.log(error);
            });
        },

        showBrandDialog(){
            this.$modal.show('hello-world');

        },

        hideBrandDialog(){
            this.$modal.hide('hello-world');
        },

        connectBrandWithGroup: function(){
            this.postBrandByGroupData.groups = this.checkedGroup;
            this.postBrandByGroupData.name = this.responseBrand.body['id'];

            this.postBrandByGroupData.groups.forEach(element => {
                
                var postBrandConn = {
                    brandId: this.responseBrand.body['id'],
                    groupId: element
                };
                
                this.$http.post("http://localhost:5000/api/groupbybrand/", postBrandConn)
                .then(response => {
                    this.brandInput.name = '';
                    this.hideBrandDialog();
                }, error => {
                    console.log(error);
                });

            });
        }
    }
}
</script>

<style scoped>

#afterSuccessPost{
    display: none;
}

#loadingPic, #loadingPicTitle{
    display: none;
}

#successPic, #successPicTitle{
    display: none;
}

</style>
