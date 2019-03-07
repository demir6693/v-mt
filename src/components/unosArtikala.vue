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
                    <select class="form-control" id="exampleSelect1" wfd-id="521">
                        <option v-for="item in group" :value="item">{{ item.name }}</option>
                    </select>
                </div>

                <div class="form-group" wfd-id="352">
                    <label for="exampleSelect1" wfd-id="354">Brand</label>
                    <select class="form-control" id="exampleSelect1" wfd-id="521">
                        <option v-for="item in brand" :value="item">{{ item.name }}</option>
                    </select>
                </div>

                <div class="form-group" wfd-id="318">
                    <label class="col-form-label" for="inputDefault" wfd-id="319">Naziv artikla</label>
                    <input type="text" class="form-control" placeholder="Naziv" id="inputDefault" wfd-id="495">
                </div>

                <div class="form-group" wfd-id="318">
                    <label class="col-form-label" for="inputDefault" wfd-id="319">Nabavna cena</label>
                    <input type="number" class="form-control" placeholder="Nabavna cena" id="inputDefault" wfd-id="495">
                </div>

                <div class="form-group" wfd-id="318">
                    <label class="col-form-label" for="inputDefault" wfd-id="319">Prodajna cena</label>
                    <input type="number" class="form-control" placeholder="Prodajna cena" id="inputDefault" wfd-id="495">
                </div>

                <button type="button" class="btn btn-primary btn-lg btn-block" wfd-id="557">Dodaj</button>

                <hr>

                <div class="custom-file" wfd-id="286">
                    <input type="file" class="custom-file-input" id="inputGroupFile02" wfd-id="485">
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

                <hr>

                <div class="row">
                    <div class="col-6">
                        <label for="exampleSelect1" wfd-id="354">Dodaj grupu</label>
                        <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="" aria-label="Recipient's username" aria-describedby="basic-addon2">
                            <div class="input-group-append">
                                <button class="btn btn-outline-secondary" type="button">
                                    <i class="fas fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <label for="exampleSelect1" wfd-id="354">Dodaj brend</label>
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
            brand: []
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
    }
}
</script>

<style scoped>

</style>
