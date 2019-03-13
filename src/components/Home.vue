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
        
        <!-- Naslovna Laptopovi -->
        <div class="row">

          <div class="col-4 text-center border-right">

            <a href="" class=""><img class="img-thumbnail naslovna-img" src="../assets/laptop.jpg" alt=""></a>

            <div class="row">
              <div class="col-2">

              </div>
              <div class="col-8">
                <p>
                  Laptop HP 15-ra037nm Win10 15.6"AG, Intel DC
                  N3060/ 4gb/ 500GB /Intel HD
                </p>
              </div>
              <div class="col-2">

              </div>
            </div>

            <div class="row">
              <div class="col-2"></div>
              <div class="col-2"></div>
              <div class="col-8">
                <p class="price">
                  34.990 RSD
                </p>
                <button class="btn btn-primary">Detaljnije</button>
              </div>
            </div>

          </div>

          <div class="col-4 text-center border-right">
            
            <a href="" class=""><img class="img-thumbnail naslovna-img" src="../assets/laptop.jpg" alt=""></a>

            <div class="row">
              <div class="col-2">

              </div>
              <div class="col-8">
                <p>
                  Laptop HP 15-ra037nm Win10 15.6"AG, Intel DC
                  N3060/ 4gb/ 500GB /Intel HD
                </p>
              </div>
              <div class="col-2">

              </div>
            </div>

            <div class="row">
              <div class="col-2"></div>
              <div class="col-2"></div>
              <div class="col-8">
                <p class="price">
                  34.990 RSD
                </p>
                <button class="btn btn-primary">Detaljnije</button>
              </div>
            </div>

          </div>

          <div class="col-4 text-center border-right ">

            <a href="" class=""><img class="img-thumbnail naslovna-img" src="../assets/laptop.jpg" alt=""></a>

            <div class="row">
              <div class="col-2"></div>
              <div class="col-8">
                <p>
                  Laptop HP 15-ra037nm Win10 15.6"AG, Intel DC
                  N3060/ 4gb/ 500GB /Intel HD
                </p>
              </div>
              <div class="col-2"></div>
            </div>

            <div class="row">
              <div class="col-2"></div>
              <div class="col-2"></div>
              <div class="col-8">
                <p class="price">
                  34.990 RSD
                </p>
                <button class="btn btn-primary">Detaljnije</button>
              </div>
            </div>


          </div>

        </div>

        <hr>
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
          <hr>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld'
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
  width: 250px;
  height: 250px;
}
</style>
