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

                <button type="button" class="btn btn-primary btn-lg btn-block" id="addProd" @click="addProduct">Dodaj</button>

                <div id="afterSuccessPost">
                     <hr>
                    <div class="custom-file" wfd-id="286">
                        <input type="file" class="custom-file-input" id="inputGroupFile02" @change="previewImage" accept="image/*">
                        <label class="custom-file-label" for="inputGroupFile02" wfd-id="287">Unesi sliku</label>
                    </div>
                    <br> <br>
                    <div class="row">
                        <div class="col-6">
                            <label for="exampleSelect1" wfd-id="354">Naziv specifikacije</label>
                            <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="" aria-label="Recipient's username" aria-describedby="basic-addon2">
                                <div class="input-group-append">
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <label for="exampleSelect1" wfd-id="354">Specifikacija</label>
                            <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="" aria-label="Recipient's username" aria-describedby="basic-addon2">
                                <div class="input-group-append">
                                    <button class="btn btn-outline-secondary" type="button">
                                        <i class="fas fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                
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
                                <button class="btn btn-outline-secondary" type="button" @click="addBrand">
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
    </div>
</template>

<script>

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
                picture: 'nema',
                groupId: 0,
                brandId: 0
            },

            imageData: '',

            productImage: {
                idProd: 0,
                picture: ''
            }
        }
    },
    
    mounted() {

        this.$http.get("http://localhost:5000/api/groups/")
        .then(response => {
            this.group = response.body;
        });

        this.$http.get("http://localhost:5000/api/brand/")
        .then(response => {
            this.brand = response.body;
        });
       
    },

    methods: {

        hideShowSpecsPic:function() {
            $(document).ready(function(){
                $("#afterSuccessPost").slideDown();;
        });
        },

        addBrand() {
            this.$http.post("http://localhost:5000/api/brand/", this.brandInput)
            .then(response => {
                console.log(response);
            }, error => {
                console.log(error);
            });
        },

        addGroup() {
            this.$http.post("http://localhost:5000/api/groups/", this.groupInput)
            .then(response => {
                console.log(response);
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
            /*
            this.productInput.price = parseFloat(this.productInput.price, 2);
            this.productInput.msrp = parseFloat(this.productInput.msrp, 2)
            
            this.$http.post("http://localhost:5000/api/product/", this.productInput)
            .then(response => {
                console.log(response); 
                this.hideShowSpecsPic();
            }, error => {
                console.log(error);
            }); */
            this.hideShowSpecsPic();
        },

        previewImage: function(event) {
            // Reference to the DOM input element
            var input = event.target;
            // Ensure that you have a file before attempting to read it
            if (input.files && input.files[0]) {
                // create a new FileReader to read this image and convert to base64 format
                var reader = new FileReader();
                // Define a callback function to run, when FileReader finishes its job
                reader.onload = (e) => {
                    // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
                    // Read image as base64 and set to imageData
                    this.productImage = {
                        idProd: 1,
                        picture: e.target.result  
                    }; 
                    this.uploadImage();
                } 
                // Start the reader job - read file as a data url (base64 format)
                reader.readAsDataURL(input.files[0]);
            }
        },

        uploadImage: function() {
            this.$http.post("http://localhost:5000/api/productpictures/", this.productImage)
            .then(response => {
                console.log(response);
            }, error => {
                console.log(error);
            });
        }
    }
}
</script>

<style scoped>

#afterSuccessPost{
    display: none;
}
</style>
