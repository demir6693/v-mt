<template>
<div>
    <div class="navbar-mobile">
            <div class="row">
                <div class="col-8">
                    <a class="navbar-brand naslov-header my-logo" href="#" style="color: #c60100; font-size: 20pt;" id="mbtown">
                        <strong>
                            MOBILE TOWN
                        </strong>
                    </a>
                </div>
                <div class="col-2 mycol-2">    
                    <button type="button" class="btn button-header" wfd-id="543" id="loginUser"
                    style="background-color: #0049A7;
                                        color: white;">
                        <i class="fas fa-user"></i>
                    </button>
                </div>
                <div class="col-2 mycol-2">
                        <button type="button" class="btn button-header" wfd-id="543" id="cartId"
                        style="background-color: #0049A7;
                                            color: white;">
                            <i class="fas fa-shopping-cart"></i>
                        </button>
                </div>
            </div>
       
        <div id="panelItems">
            <ul class="list-group">
                <li class="list-group-item">
                    item 1
                </li>
                <li class="list-group-item">
                    item 2
                </li>
                <li class="list-group-item">
                    item 3
                </li>
            </ul>
        </div>
        <div id="loginForm">
            <br>
            <form class="form" id="login-nav">
                <div class="form-group">
                        <input type="email" class="form-control" id="emailId" placeholder="Email adresa" >
                </div>
                <div class="form-group">
                        <input type="password" class="form-control" id="passId" placeholder="Šifra" >
                        <!--<div class="help-block text-right"><a href="">Forget the password ?</a></div> -->
                </div>
                <div class="form-group">
                        <button type="submit" class="btn btn-primary btn-block my-btn">Uloguj se</button>
                </div>
            </form>
        </div>
    </div>
    <br>
    <div class="container">
            <div class="container">
                <input class="form-control mr-sm-2 search-nav shadow-lg" type="text" placeholder="Pretraga" wfd-id="518">
            </div>
    </div>
    <br>
</div>
</template>

<script>
export default {

    mounted() { 
        $(document).ready(function(){
            $("#mbtown").click(function(){
                $("#panelItems").slideToggle("slow");
                $("#loginForm").slideUp();
            });
        });

        $(document).ready(function(){
            $("#loginUser").click(function(){
                $("#loginForm").slideToggle("slow");
                $("#panelItems").slideUp();
            });
        });
    }
}
</script>

<style>

.list-group-item{
    background-color: #007bff;
    border: none;
}

.my-btn{
    background-color: #0049A7;
}

#panelItems  {
  padding: 5px;
  background-color: #007bff;
}

#panelItems {
    color: white;
    display: none;
}

#loginForm  {
  padding: 5px;
  background-color: #007bff;
}

#loginForm {
    color: white;
    display: none;
}

.dropdown-login{
    display: none;
    width: 100%;
    left: 0;
    position: absolute;
    z-index: 1;
}

.drop-downmenu-login{
    right: -50px;
    left: auto;
    width: 300px !important;
}

.mycol-2{
    margin: auto;
    width: 60%;
    padding: 10px;
}

.navbar-mobile{
    background-color: #007bff;
}
</style>
