<template>
    <div class="navbar-mobile">
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            
            <div class="row">

                <dov class="col-6">
                    <a class="navbar-brand naslov-header my-a" href="#" style="color: #c60100;">
                        <strong>
                            MOBILE TOWN
                        </strong>
                    </a>
                </dov>

                <div class="col-2 my-col-2">

                    <button class="btn button-header" type="button" data-toggle="dropdown">
                        <i class="fas fa-search"></i>
                    <span class="caret"></span>
                    </button>

                    <ul class="dropdown-menu drop-downmenu-login">
                        
                        <li>
                           <div class="input-group col-md-4">
                            <input class="form-control py-2 border-right-0 border" type="search" placeholder="Pretraga" id="example-search-input">
                            <span class="input-group-append">
                                <button class="btn btn-outline-secondary border-left-0 border" type="button">
                                    <i class="fa fa-search"></i>
                                </button>
                            </span>
                        </div>
                        </li>

                    </ul>

                </div>

                <div class="col-2 my-col-2">       
                    <button class="btn button-header" type="button" data-toggle="dropdown">
                        <i class="fas fa-user"></i>
                    <span class="caret"></span>
                    </button>

                    <ul class="dropdown-menu drop-downmenu-login">
                        
                        <li>
                            <div class="container form-group " wfd-id="358">
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Unesite email" wfd-id="508">
                            </div>
                        </li>

                        <li>
                            <div class="container form-group" wfd-id="355">
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" wfd-id="507">
                            </div>
                        </li>

                        <li>
                            <div class="container">
                                <button type="button" class="btn btn-primary">Uloguj se</button>
                            </div>
                        </li>
                    </ul>  
                </div>

                <div class="col-2 my-col-2">
                        <button type="button" class="btn button-header" wfd-id="543" id="cartId">
                            <i class="fas fa-shopping-cart"></i>
                        </button>
                </div>
            </div>
        </nav>
    </div>    
</template>

<style>

.drop-downmenu-login{
    right: -50px;
    left: auto;
    width: 300px !important;
}

.my-col-2{
    margin-top: 5px;
}
.button-header{
    background-color: #0049A7;
    color: white;
}

.my-a{
    font-size: 18pt;
}
</style>
