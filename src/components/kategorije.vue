<template>
    <div class="container">
        <h2>Laptop / Notebook računari</h2>
        
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

            <div class="col-2">
                
                <nav class="nav flex-column">
                    
                    <a class="nav-link active" href="#">
                        <div class="kategorija">
                            <b class="my-b">Asus</b>
                        </div>
                    </a>

                    <a class="nav-link" href="#">
                        <div class="kategorija">
                            <b class="my-b">Acer</b>
                        </div>
                    </a>
                    
                    <a class="nav-link" href="#">
                        <div class="kategorija">
                            <b class="my-b">Lenovo</b>
                        </div>
                    </a>
                    
                    <a class="nav-link disabled" href="#">
                        <div class="kategorija">
                            <b class="my-b">HP</b>
                        </div>
                    </a>
                </nav>

            </div>

            <div class="col-10">
                
            
            <div class="row item border-bottom">
                
                <div class="col-4 divItem">
                    <a href="" class="my-a"><img class="img-thumbnail" src="../assets/laptop.jpg" alt=""></a>
                </div>

                <div class="col-8">

                    <h5>Laptop Acer A315 15.6"HD,Intel DC N3060/4GB/500GB/Intel HD 400</h5>
              

                    <div class="row">
                        
                        <div class="col-sm border-right">
                             Šifra artikla: <strong>8638307</strong>
                             |
                             Model: <strong>Acer A315</strong>
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
                                30.990 din.
                            </p>

                            <p class="my-pPrice">
                                29.990 din.
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

</script>


<style>

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
