<template>
    <div class="container">
       
        <hr>
        <h3 class="naslov-item">{{ msg.name }}</h3>
        
        <div class="row h-100 justify-content-center align-items-center">
            <img v-bind:src="msg.titlePictureProduct.picture" alt="" id="titlePicture">
        </div>
        
        <div class="row">
            <div class="col-3" v-for="(picture, index) in pictureSlide">
                <img v-bind:src="picture.picture" alt="..." class="img-thumbnail mini-picture" @click="changePictureOnClick(picture.picture, index)" v-bind:id="index">
            </div>
        </div>

        <hr>

        <h6>Moguća kupovina čekovima građana.</h6>

        <p class="">
            <i class="fas fa-circle na-stanju"></i>
            Na stanju
        </p>

        <div class="row">
            <div class="col-3">
                <i class="fas fa-truck fa-2x"></i>
            </div>
            <div class="col-9">
                <strong>Rok isporuke:</strong>
                2-3 radna dana
            </div>
        </div>

        <hr>

        <p>
            MP 30.990 din.
        </p>
        <p class="cena-popust">
            29.990 din.
        </p>

        <button type="button" class="btn btn-primary btn-lg btn-block" wfd-id="560">
            <i class="fas fa-shopping-cart"></i> Dodaj u korpu
        </button>

        <hr>

        <h4>Specifikacije</h4>
        <table class="table table-striped">
            <tbody>
                <tr v-for="specofProd in specs">
                <th scope="row">{{ specofProd.descriptionName }}</th>
                <td>{{ specofProd.description }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: ['msg', 'specs', 'pictureSlide'],

    methods: {

        changePictureOnClick: function(src, id){
            
            $(document).ready(function(){
                 $("#"+id).on("click touchstart", function(){
                    $("#titlePicture").attr("src", src);
               });
            });

        }

    }
}
</script>


<style scoped>

.naslov-item{
    font-size: 18pt;
}

.mini-picture{
    cursor: pointer;
}

</style>
