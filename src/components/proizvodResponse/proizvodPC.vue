<template>
    <div class="container">
        <hr>
        <h3 class="naslov-item">{{ msg.name }}</h3>
    
    <!-- item on PC-->
    <div>
        <div class="row">

            <div class="col-5">
                <img class="titlePic" v-bind:src="msg.titlePictureProduct.picture" alt="">

                <div class="row">
                    <div class="col-3">
                        <img src="https://www.gigatron.rs/img/products/medium/image5b6c350e3b102.png" alt="..." class="img-thumbnail">
                    </div>
                    
                    <div class="col-3">
                        <img src="https://www.gigatron.rs/img/products/medium/image5b6c350e3b102.png" alt="..." class="img-thumbnail">
                    </div>
                    
                    <div class="col-3">
                        <img src="https://www.gigatron.rs/img/products/medium/image5b6c350e3b102.png" alt="..." class="img-thumbnail">
                    </div>
                    
                    <div class="col-3">
                        <img src="https://www.gigatron.rs/img/products/medium/image5b6c350e3b102.png" alt="..." class="img-thumbnail">
                    </div>
                </div>
            </div>

            <div class="col-3 ">
                
                <br>
               <ul class="list-specs-mini">
                   <li>
                       <p class="item-specs-mini">
                           <strong>
                           Dijagonala ekrana:
                           </strong>
                           6.4"
                       </p>
                   </li>
                   <li>
                       <p class="item-specs-mini">
                           <strong>
                           Broj jezgara procesora:
                           </strong>
                           Octa Core
                       </p>
                   </li>
                   <li>
                       <p class="item-specs-mini">
                           <strong>
                           RAM memorija:
                           </strong>
                           6 GB
                       </p>
                   </li>
                   <li>
                       <p class="item-specs-mini">
                           <strong>
                           Zadnja kamera:
                           </strong>
                           12.0 Mpix + 12.0 Mpix
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
                       MP 30.990 din.
                   </p>
                   <p class="cena-popust">
                       29.990 din.
                   </p>

                   <hr>

                    <p class="">
                        <i class="fas fa-circle na-stanju"></i>
                        Na stanju
                    </p>
                    
                    <div class="button-kupi">
                        <button type="button" class="btn btn-primary btn-lg" wfd-id="563">
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
    props: ['msg', 'specs'],
    data(){
        return{
            
        }
    },

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
</style>
