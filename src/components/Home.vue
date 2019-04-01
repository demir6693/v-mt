<template>
  <div class="container">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" src="../assets/slide2.png" alt="First slide">
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="../assets/slide1.png" alt="Second slide">
              </div>
              
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
        </div>
        <hr>
        
        <!-- Naslovna products PC-->
        <div class="homePc d-none d-lg-block">
          <div v-for="(group, item) in homeData">
          
          <h5 class="title-home-prod">{{ item }}</h5>
          <hr>
          <div class="row" >
          
          <div class="col-4 text-center border-right" v-for="prod in group">

            <a href="" class="" @click="goToProduct(prod.id)"><img class="img-thumbnail naslovna-img" v-bind:src="prod.titlePictureProduct.picture" alt=""></a>

            <div class="info-prod">
                <div class="row">
                <div class="col-2">

                </div>
                <div class="col-8">
                  <p class="titleProd" @click="goToProduct(prod.id)">
                    <!-- naslov -->
                    {{ prod.brand.name + ' ' + prod.name }}
                  </p>
                </div>
                <div class="col-2">

                </div>
              </div>

              <div class="row priceAndButton ">
                <div class="col-2"></div>
                <div class="col-2"></div>
                <div class="col-8">
                  <p class="price">
                    <!-- cena -->
                  {{ prod.price }} RSD
                  </p>
                  <button class="btn btn-primary details" @click="goToProduct(prod.id)">Detaljnije</button>
                </div>
              </div>
            </div>

          </div>
          <hr>
        </div>
        <hr>
        </div>
        </div>
        
        <!-- home mobile -->
        <div class="homeMob d-block d-sm-none d-none d-sm-block d-md-none d-none d-md-block d-lg-none">
          <div class="home-mob" v-for="(group, item) in homeData">
            <h5>{{ item }}</h5>
            <hr>
            <div class="row">
              <div class="col-5 border-right item-in-slide text-center" alt="Second slide" v-for="prod in group">
                <img v-bind:src="prod.titlePictureProduct.picture" alt="" class="picture-mob">

                <div class="naslov">
                  <p class="item-slide-title">{{ prod.brand.name + ' ' + prod.name }}</p>
                </div>

                <div class="row">
                  <div class="col"></div>
                  <div class="col"></div>
                  <div class="col">
                    <p class="price-mob">
                      {{ prod.price }} RSD
                    </p>
                  </div>
                </div>

                <div class="row">
                  <div class="col-2"></div>
                  <div class="col-2"></div>
                  <div class="col-2">
                    <button class="btn btn-primary details btn-sm" @click="goToProduct(prod.id)">Detaljnije</button>
                  </div>
                </div>
              </div>
          </div>
          <hr>
          </div>
        </div>

          <div class="row">

            <div class="col-md-3">
              <img id="rcorners4" src="../assets/lenovo_logo.png" alt="">
            </div>

            <div class="col-md-3">
              <img id="rcorners4" src="../assets/samsung_logo.jpg" alt="" >
            </div>

            <div class="col-md-3">
              <img id="rcorners4" src="../assets/apple_logo.png" alt="" >
            </div>

            <div class="col-md-3">
              <img id="rcorners4" src="../assets/huawei_logo.jpg" alt="" >
            </div>

            <div class="col-md-3">
              <img id="rcorners4" src="../assets/alcatel_logo.jpg" alt="" >
            </div>

            <div class="col-md-3">
              <img id="rcorners4" src="../assets/ps_logo.png" alt="" >
            </div>

            <div class="col-md-3">
              <img id="rcorners4" src="../assets/hp_logo.png" alt="" >
            </div>

            <div class="col-md-3">
              <img id="rcorners4" src="../assets/asus_logo_1.jpg" alt="" >
            </div> 

            <div class="col-md-3">
              <img id="rcorners4" src="../assets/sony_logo.jpg" alt="" >
            </div>

            <div class="col-md-3">
              <img id="rcorners4" src="../assets/xbox_logo.png" alt="" >
            </div>

            <div class="col-md-3">
              <img id="rcorners4" src="../assets/nokia_logo.png" alt="" >
            </div>

            <div class="col-md-3">
              <img id="rcorners4" src="../assets/motorola_logo.png" alt="" >
            </div>
            
          </div>
          
  </div>
</template>

<script>
import LzString from 'lz-string'
import router from '../router'

export default {
  
  data(){
    return{
      homeData: []
    }
  },

  mounted(){
    this.getHomeData();
  },

  methods: {

    getHomeData: function(){
      this.$http.get("http://localhost:5000/api/naslovna")
      .then(response => {
        this.homeData = response.body;
        this.decompressImg();
      }, error => {
        console.log(error);
      });
    },

    decompressImg: function(){
      for([key, value] of Object.entries(this.homeData))
      {
        value.forEach(element => {
          element['titlePictureProduct'].picture = LzString.decompressFromUTF16(element['titlePictureProduct'].picture);
        });
      }
    },

    goToProduct: function(id){
      router.push({
        name: 'proizvod',
        params: {
          id: id
        }
      })
    }

  }

}
</script>

<style scoped>

#rcorners4 {
  border-radius: 15px;
  background: #f8f9fa;
  padding: 20px; 
  width: 200px;
  height: 150px;
  border: 1px solid #f8f9fa;
}

.price{
  font-size: 18pt;
  color: red;
   
}

.naslovna-img{
  width: 200px;
  height: 200px;
}

.titleProd{
  margin-bottom: 10%; 
  height: 7em;
  cursor: pointer;
  word-wrap: break-word;
}

.priceAndButton{
  
}

.details{
  margin-bottom: 10%;
}

.info-prod{
  white-space: normal;
}

.picture-mob{
  height: 150px;
  width: 120px;
  display: block;
}

.item-in-slide{
  margin-left: 5%;
}

.item-slide-title{
  display: block; /* or inline-block */
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  max-height: 3.6em;
  line-height: 1.8em;
}

.price-mob{
  color: red;
}

.title-home-prod{
  word-wrap: break-word;
}
</style>
