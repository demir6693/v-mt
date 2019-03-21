<template>
    <div class="container">
        <hr>
        <h3 class="naslov-item">{{ msg.name }}</h3>
    
    <!-- item on PC-->
    <div>
        <div class="row">

            <div class="col-5">
                <img class="titlePic" v-bind:src="msg.titlePictureProduct.picture" alt="" id="titlePicture">
                <hr>
                <div class="row">
                    <div class="col-3" v-for="(picture, index) in pictureSlide">
                        <img v-bind:src="picture.picture" alt="..." class="img-thumbnail mini-picture" @click="changePictureOnClick(picture.picture, index)" v-bind:id="index">
                    </div>
                </div>
            </div>

            <div class="col-3 ">
                
                <br>
               <ul class="list-specs-mini">
                   <li v-for="spcf in specs.slice(0,4)">
                       <p class="item-specs-mini">
                           <strong>
                           {{spcf.descriptionName}}
                           </strong>
                           {{spcf.description}}
                       </p>
                   </li>
               </ul>

               <hr>

               <p>
                   Vreme isporuke: <strong>2 radna dana</strong>
               </p>

               <div class="row">
                   <div class="col-3">
                       <i class="fas fa-truck fa-3x"></i>
                   </div>
                   <div class="col-9">
                       <strong>BESPLATNA DOSTAVA</strong>
                       na teritoriji Srbije
                   </div>
               </div>
            </div>

            <div class="col-4">
                <br>
               <div class="div-cart-in border shadow-lg p-3 mb-5 bg-white">
                   <p>
                       MP {{ msg.msrp }} din.
                   </p>
                   <p class="cena-popust">
                       {{ msg.price }} din.
                   </p>

                   <hr>

                    <p class="">
                        <i class="fas fa-circle na-stanju"></i>
                        Na stanju
                    </p>
                    
                    <div class="button-kupi">
                        <button type="button" class="btn btn-primary btn-lg" wfd-id="563" @click="onClick(msg.id)">
                            Dodaj u korpu <i class="fas fa-shopping-cart"></i>
                        </button>
                    </div>

               </div>
            </div>
        </div>

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

    </div>    
</template>

<script>
export default {
    props: {
        msg: {},
        specs: {},
        pictureSlide: {},
        onClick: Function
    },
    
    data(){
        return{
                 
        }
    },

    mounted(){
       
    },

    methods:{
        
        changePictureOnClick: function(src, id){
            
            $(function(){
               $("#"+id).click(function(){
                    $("#titlePicture").attr("src", src);
               });
            });

        }
        
    }

}
</script>


<style scoped>

.button-kupi{
    text-align: center;
    margin-bottom: 10px;
}

.na-stanju{
    color: green;
}

.cena-popust{
    font-size: 22pt;
    color: #c60100;
}

.div-cart-in{
    border-radius: 15px;
}

.titlePic{
    width: 350px;
    height: 400px;
}

.list-specs-mini{
    list-style-type: none;
}

.naslov-item{
    font-size: 18pt;
}

.mini-picture{
    cursor: pointer;
}
</style>
